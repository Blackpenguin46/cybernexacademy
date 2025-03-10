"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import FeedbackForm from "@/app/components/FeedbackForm";
import { Newspaper, Calendar, BookOpen, MessageSquare, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  publishedAt: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
}

interface RecommendedResource {
  id: string;
  title: string;
  description: string;
  url: string;
  resource_type: string;
  interests: string[];
  experience_levels: string[];
  goals: string[];
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [userInterests, setUserInterests] = useState<string[]>([]);
  const [userExperience, setUserExperience] = useState<string>("");
  const [userGoals, setUserGoals] = useState<string[]>([]);
  const [recommendedResources, setRecommendedResources] = useState<RecommendedResource[]>([]);
  const [onboardingCompleted, setOnboardingCompleted] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUser(user);
          // Fetch user profile data
          const { data: profile } = await supabase
            .from('profiles')
            .select('interests, experience_level, goals, onboarding_completed')
            .eq('user_id', user.id)
            .single();
          
          if (profile) {
            setUserInterests(profile.interests || []);
            setUserExperience(profile.experience_level || "");
            setUserGoals(profile.goals || []);
            setOnboardingCompleted(profile.onboarding_completed || false);
            
            // If onboarding not completed, redirect to onboarding page
            if (!profile.onboarding_completed) {
              router.push('/onboarding');
            }
          }
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        if (!userInterests || userInterests.length === 0) return;
        
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .in('category', userInterests)
          .order('published_at', { ascending: false })
          .limit(5);

        if (error) throw error;
        setArticles(data || []);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    const fetchEvents = async () => {
      try {
        if (!userInterests || userInterests.length === 0) return;
        
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .in('type', userInterests)
          .gte('date', new Date().toISOString())
          .order('date', { ascending: true })
          .limit(3);

        if (error) throw error;
        setEvents(data || []);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    
    const fetchRecommendedResources = async () => {
      try {
        if (!userInterests || userInterests.length === 0) return;
        
        // Fetch resources that match user interests and experience level
        let query = supabase
          .from('recommended_resources')
          .select('*');
        
        // Build a condition that checks if any of the user's interests are in the resource's interests array
        const interestFilter = userInterests.map(interest => `interests.cs.{${interest}}`).join(',');
        
        // Add experience level filter if available
        if (userExperience) {
          query = query.or(`experience_levels.cs.{${userExperience}}`);
        }
        
        // Add goals filter if available
        if (userGoals && userGoals.length > 0) {
          const goalsFilter = userGoals.map(goal => `goals.cs.{${goal}}`).join(',');
          query = query.or(goalsFilter);
        }
        
        // Fetch the data with the combined filters
        const { data, error } = await query.limit(6);
        
        if (error) throw error;
        
        // Filter results to match at least one interest
        const filteredResources = data.filter(resource => 
          resource.interests.some((interest: string) => userInterests.includes(interest))
        );
        
        setRecommendedResources(filteredResources || []);
      } catch (error) {
        console.error('Error fetching recommended resources:', error);
      }
    };

    if (userInterests.length > 0) {
      fetchArticles();
      fetchEvents();
      fetchRecommendedResources();
    }
  }, [userInterests, userExperience, userGoals]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-800 rounded w-1/4"></div>
          <div className="h-32 bg-gray-800 rounded"></div>
          <div className="h-32 bg-gray-800 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          {/* Welcome Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
            <h1 className="text-2xl font-bold text-white mb-2">
              Welcome back, {user?.email?.split('@')[0]}
            </h1>
            <p className="text-gray-400">
              Stay updated with the latest in cybersecurity. Your personalized dashboard shows content based on your interests.
            </p>
            {!onboardingCompleted && (
              <div className="mt-4">
                <Link 
                  href="/onboarding" 
                  className="inline-flex items-center text-blue-500 hover:text-blue-400"
                >
                  Complete your profile to get personalized recommendations
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            )}
          </div>
          
          {/* Personalized Recommendations */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">Recommended For You</h2>
            </div>
            
            {recommendedResources.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedResources.map((resource) => (
                  <Link 
                    href={resource.url} 
                    target="_blank" 
                    key={resource.id}
                    className="border border-gray-800 hover:border-blue-500/50 bg-gray-800/30 p-4 rounded-lg transition-colors hover:bg-gray-800/50"
                  >
                    <div className="flex flex-col h-full">
                      <h3 className="text-white font-medium mb-2">{resource.title}</h3>
                      <p className="text-gray-400 text-sm mb-3 flex-grow">{resource.description}</p>
                      <div className="flex justify-between mt-auto">
                        <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                          {resource.resource_type}
                        </span>
                        <span className="text-blue-400 text-xs flex items-center">
                          View Resource
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400">
                  {userInterests.length > 0 
                    ? "We're preparing personalized recommendations based on your interests." 
                    : "Complete your profile to get personalized recommendations."}
                </p>
                {userInterests.length === 0 && (
                  <Link 
                    href="/onboarding" 
                    className="text-blue-500 hover:text-blue-400 mt-2 inline-block"
                  >
                    Set your interests
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* News Articles */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <Newspaper className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">Latest News</h2>
            </div>
            <div className="space-y-4">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <div key={article.id} className="border-b border-gray-800 last:border-0 pb-4 last:pb-0">
                    <Link href={article.url} target="_blank" className="block hover:bg-gray-800/50 p-2 rounded-lg transition-colors">
                      <h3 className="text-white font-medium mb-1">{article.title}</h3>
                      <p className="text-gray-400 text-sm">{article.description}</p>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <span className="bg-gray-800 px-2 py-1 rounded">{article.category}</span>
                        <span className="ml-2">{new Date(article.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-400">No articles found matching your interests.</p>
                </div>
              )}
            </div>
          </div>

          {/* Learning Progress */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">Learning Progress</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Current Course</h3>
                <p className="text-gray-400 text-sm">Web Application Security</p>
                <div className="mt-2 h-2 bg-gray-700 rounded-full">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Certifications</h3>
                <p className="text-gray-400 text-sm">2 In Progress</p>
                <p className="text-blue-500 text-sm mt-1">View Details →</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">Upcoming Events</h2>
            </div>
            <div className="space-y-4">
              {events.length > 0 ? (
                events.map((event) => (
                  <div key={event.id} className="border-b border-gray-800 last:border-0 pb-4 last:pb-0">
                    <h3 className="text-white font-medium">{event.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{event.description}</p>
                    <div className="flex items-center mt-2 text-xs">
                      <span className="text-blue-500">{new Date(event.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-500">{event.type}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-400">No upcoming events found.</p>
                </div>
              )}
            </div>
          </div>

          {/* Current Interests */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Your Interests</h2>
              <Link href="/onboarding" className="text-blue-500 hover:text-blue-400 text-sm">
                Update
              </Link>
            </div>
            
            {userInterests.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {userInterests.map((interest) => (
                  <span 
                    key={interest} 
                    className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full"
                  >
                    {interest.replace('_', ' ')}
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-400">No interests selected.</p>
                <Link 
                  href="/onboarding" 
                  className="text-blue-500 hover:text-blue-400 mt-2 inline-block"
                >
                  Set your interests
                </Link>
              </div>
            )}
          </div>

          {/* Feedback Section - Make it more prominent */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <MessageSquare className="w-5 h-5 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold text-white">Feedback</h2>
              </div>
              <button
                onClick={() => setShowFeedback(!showFeedback)}
                className="px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm transition-colors"
              >
                {showFeedback ? 'Close Form' : 'Submit Feedback'}
              </button>
            </div>
            
            {!showFeedback && (
              <p className="text-gray-400 mb-4">
                We value your input! Help us improve CyberNex by sharing your thoughts, suggesting new features, or reporting issues.
              </p>
            )}
            
            {showFeedback && <FeedbackForm />}
          </div>
        </div>
      </div>
    </div>
  );
}