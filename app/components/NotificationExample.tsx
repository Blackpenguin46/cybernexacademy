"use client";

import React, { useState } from 'react';
import { UpdateNotification } from './UpdateNotification';
import { Button } from '../components/ui/button';

export default function NotificationExample() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [showFeature, setShowFeature] = useState(false);
  const [showMaintenance, setShowMaintenance] = useState(false);
  const [showEvent, setShowEvent] = useState(false);
  const [showAutoClose, setShowAutoClose] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-white">Notification Examples</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900/50 p-6 rounded-lg border border-neon-blue/20">
          <h2 className="text-xl font-semibold mb-4 text-white">Update Notification</h2>
          <p className="text-gray-300 mb-6">Standard notification for app updates and new features.</p>
          <Button 
            onClick={() => setShowUpdate(!showUpdate)}
            className="bg-neon-blue hover:bg-blue-600"
          >
            {showUpdate ? 'Hide' : 'Show'} Notification
          </Button>
          
          {showUpdate && (
            <UpdateNotification
              id="example-update"
              title="New Update Available"
              message="We've added new learning resources and community features to enhance your cybersecurity journey."
              linkText="See what's new"
              linkUrl="/updates"
              type="update"
              position="bottom-right"
            />
          )}
        </div>
        
        <div className="bg-gray-900/50 p-6 rounded-lg border border-green-500/20">
          <h2 className="text-xl font-semibold mb-4 text-white">Feature Notification</h2>
          <p className="text-gray-300 mb-6">Highlight new features or capabilities in your application.</p>
          <Button 
            onClick={() => setShowFeature(!showFeature)}
            className="bg-green-500 hover:bg-green-600"
          >
            {showFeature ? 'Hide' : 'Show'} Notification
          </Button>
          
          {showFeature && (
            <UpdateNotification
              id="example-feature"
              title="New Feature Added"
              message="Try our new AI-powered threat detection system for enhanced security monitoring."
              linkText="Try it now"
              linkUrl="/features/ai-detection"
              type="feature"
              position="top-right"
            />
          )}
        </div>
        
        <div className="bg-gray-900/50 p-6 rounded-lg border border-amber-500/20">
          <h2 className="text-xl font-semibold mb-4 text-white">Maintenance Alert</h2>
          <p className="text-gray-300 mb-6">Notify users about upcoming maintenance or temporary issues.</p>
          <Button 
            onClick={() => setShowMaintenance(!showMaintenance)}
            className="bg-amber-500 hover:bg-amber-600"
          >
            {showMaintenance ? 'Hide' : 'Show'} Notification
          </Button>
          
          {showMaintenance && (
            <UpdateNotification
              id="example-maintenance"
              title="Scheduled Maintenance"
              message="Our systems will be undergoing maintenance on June 15th from 2-4am UTC. Brief service interruptions may occur."
              linkText="Learn more"
              linkUrl="/status"
              type="maintenance"
              position="top-center"
            />
          )}
        </div>
        
        <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
          <h2 className="text-xl font-semibold mb-4 text-white">Event Notification</h2>
          <p className="text-gray-300 mb-6">Promote webinars, workshops, or other community events.</p>
          <Button 
            onClick={() => setShowEvent(!showEvent)}
            className="bg-purple-500 hover:bg-purple-600"
          >
            {showEvent ? 'Hide' : 'Show'} Notification
          </Button>
          
          {showEvent && (
            <UpdateNotification
              id="example-event"
              title="Upcoming Webinar"
              message="Join our expert panel discussing 'Emerging Threats in Cybersecurity' this Friday at 2pm."
              linkText="Register now"
              linkUrl="/events/webinar"
              type="event"
              position="bottom-left"
            />
          )}
        </div>
        
        <div className="bg-gray-900/50 p-6 rounded-lg border border-red-500/20">
          <h2 className="text-xl font-semibold mb-4 text-white">Auto-closing Notification</h2>
          <p className="text-gray-300 mb-6">This notification will automatically close after 5 seconds.</p>
          <Button 
            onClick={() => setShowAutoClose(!showAutoClose)}
            className="bg-red-500 hover:bg-red-600"
          >
            {showAutoClose ? 'Hide' : 'Show'} Notification
          </Button>
          
          {showAutoClose && (
            <UpdateNotification
              id="example-auto-close"
              title="Auto-closing Alert"
              message="This notification will automatically close after 5 seconds. Use this for less critical information."
              type="update"
              position="bottom-center"
              duration={5000}
            />
          )}
        </div>
      </div>
    </div>
  );
} 