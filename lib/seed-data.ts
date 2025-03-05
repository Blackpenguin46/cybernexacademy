import { supabase } from './supabase';
import { v4 as uuidv4 } from 'uuid';

// Sample instructors
const instructors = [
  {
    id: uuidv4(),
    name: 'Dr. Alex Morgan',
    bio: 'Cybersecurity researcher with over 10 years of experience in penetration testing and digital forensics.',
    avatar_url: 'https://i.pravatar.cc/150?img=1',
    created_at: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: 'Sarah Chen',
    bio: 'Former NSA analyst specialized in cryptography and secure systems design.',
    avatar_url: 'https://i.pravatar.cc/150?img=5',
    created_at: new Date().toISOString()
  },
  {
    id: uuidv4(),
    name: 'Marcus Johnson',
    bio: 'CISO with experience across multiple Fortune 500 companies. Expert in security architecture and compliance.',
    avatar_url: 'https://i.pravatar.cc/150?img=3',
    created_at: new Date().toISOString()
  }
];

// Sample courses
const generateCourses = (instructorIds: string[]) => {
  return [
    {
      id: uuidv4(),
      title: 'Introduction to Cybersecurity',
      description: 'Learn the fundamentals of cybersecurity, including basic principles, common threats, and essential protection techniques.',
      image_url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      level: 'Beginner',
      duration: '8 hours',
      price: 49.99,
      instructor_id: instructorIds[0],
      category: 'Fundamentals',
      created_at: new Date().toISOString(),
      slug: 'introduction-to-cybersecurity'
    },
    {
      id: uuidv4(),
      title: 'Ethical Hacking Masterclass',
      description: 'Comprehensive guide to ethical hacking methodology, tools and techniques for penetration testing.',
      image_url: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      level: 'Intermediate',
      duration: '24 hours',
      price: 129.99,
      instructor_id: instructorIds[0],
      category: 'Offensive Security',
      created_at: new Date().toISOString(),
      slug: 'ethical-hacking-masterclass'
    },
    {
      id: uuidv4(),
      title: 'Cryptography and Secure Communications',
      description: 'Deep dive into modern cryptographic algorithms, protocols, and their real-world applications in securing communications.',
      image_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      level: 'Advanced',
      duration: '16 hours',
      price: 99.99,
      instructor_id: instructorIds[1],
      category: 'Cryptography',
      created_at: new Date().toISOString(),
      slug: 'cryptography-and-secure-communications'
    },
    {
      id: uuidv4(),
      title: 'Network Security Fundamentals',
      description: 'Learn how to secure networks against common attacks and vulnerabilities. Explore firewall configuration, IDS/IPS, and VPNs.',
      image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80',
      level: 'Intermediate',
      duration: '12 hours',
      price: 79.99,
      instructor_id: instructorIds[2],
      category: 'Network Security',
      created_at: new Date().toISOString(),
      slug: 'network-security-fundamentals'
    },
    {
      id: uuidv4(),
      title: 'Secure Coding Practices',
      description: 'Master the techniques to write secure code and prevent common vulnerabilities like injections, XSS, and CSRF.',
      image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      level: 'Intermediate',
      duration: '10 hours',
      price: 69.99,
      instructor_id: instructorIds[1],
      category: 'Application Security',
      created_at: new Date().toISOString(),
      slug: 'secure-coding-practices'
    },
    {
      id: uuidv4(),
      title: 'Cloud Security Architecture',
      description: 'Design and implement secure cloud infrastructures on major platforms like AWS, Azure, and Google Cloud.',
      image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80',
      level: 'Advanced',
      duration: '20 hours',
      price: 149.99,
      instructor_id: instructorIds[2],
      category: 'Cloud Security',
      created_at: new Date().toISOString(),
      slug: 'cloud-security-architecture'
    }
  ];
};

// Sample modules for the Introduction to Cybersecurity course
const generateModules = (courseId: string) => {
  return [
    {
      id: uuidv4(),
      title: 'Understanding Cybersecurity Basics',
      description: 'Introduction to key cybersecurity concepts and terminology.',
      course_id: courseId,
      order_index: 1,
      created_at: new Date().toISOString()
    },
    {
      id: uuidv4(),
      title: 'Common Cyber Threats',
      description: 'Overview of the most prevalent cyber threats organizations face today.',
      course_id: courseId,
      order_index: 2,
      created_at: new Date().toISOString()
    },
    {
      id: uuidv4(),
      title: 'Defense Mechanisms',
      description: 'Introduction to cybersecurity defense strategies and tools.',
      course_id: courseId,
      order_index: 3,
      created_at: new Date().toISOString()
    },
    {
      id: uuidv4(),
      title: 'Security Policies and Compliance',
      description: 'Understanding security policies, frameworks, and compliance requirements.',
      course_id: courseId,
      order_index: 4,
      created_at: new Date().toISOString()
    }
  ];
};

// Function to seed the database with sample data
export async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Insert instructors
    const { error: instructorsError } = await supabase
      .from('content_creators')
      .insert(instructors);

    if (instructorsError) {
      throw new Error(`Error inserting instructors: ${instructorsError.message}`);
    }

    console.log('Instructors inserted successfully.');

    // Get instructor IDs
    const instructorIds = instructors.map(instructor => instructor.id);
    
    // Insert courses
    const courses = generateCourses(instructorIds);
    const { error: coursesError } = await supabase
      .from('courses')
      .insert(courses);

    if (coursesError) {
      throw new Error(`Error inserting courses: ${coursesError.message}`);
    }

    console.log('Courses inserted successfully.');

    // Insert modules for the first course
    const modules = generateModules(courses[0].id);
    const { error: modulesError } = await supabase
      .from('modules')
      .insert(modules);

    if (modulesError) {
      throw new Error(`Error inserting modules: ${modulesError.message}`);
    }

    console.log('Modules inserted successfully.');
    
    console.log('Database seeding completed successfully!');
    return { success: true, message: 'Database seeded successfully!' };
  } catch (error) {
    console.error('Error seeding database:', error);
    return { success: false, error };
  }
}

// Export sample data for use in other contexts if needed
export const sampleInstructors = instructors;
export const sampleCourses = (ids: string[]) => generateCourses(ids);
export const sampleModules = (courseId: string) => generateModules(courseId); 