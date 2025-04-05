"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { X, Bell, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

// Notification type for future extensibility
type NotificationType = 'update' | 'feature' | 'maintenance' | 'event';

interface UpdateNotificationProps {
  id: string;
  title: string;
  message: string;
  linkText?: string;
  linkUrl?: string;
  type?: NotificationType;
  duration?: number; // Auto-dismiss after X milliseconds (0 = never)
  position?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left' | 'top-center' | 'bottom-center';
}

export function UpdateNotification({
  id,
  title,
  message,
  linkText,
  linkUrl,
  type = 'update',
  duration = 0,
  position = 'bottom-right'
}: UpdateNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Add handleDismiss to the dependency array or use useCallback
  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    localStorage.setItem('updateNotificationDismissed', 'true');
  }, []);
  
  useEffect(() => {
    // Check if user has already dismissed this notification
    const isDismissed = localStorage.getItem('updateNotificationDismissed') === 'true';
    
    if (!isDismissed) {
      // Show notification after a delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [handleDismiss]);
  
  // Position styles mapping
  const positionStyles = {
    'top-right': 'top-4 right-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2'
  };
  
  // Type style mapping
  const typeStyles = {
    'update': {
      bg: 'bg-gradient-to-r from-neon-blue/10 to-blue-600/5',
      border: 'border-neon-blue/30',
      icon: <Bell className="h-5 w-5 text-neon-blue" />,
      iconBg: 'bg-neon-blue/20'
    },
    'feature': {
      bg: 'bg-gradient-to-r from-green-500/10 to-emerald-600/5',
      border: 'border-green-500/30',
      icon: <Bell className="h-5 w-5 text-green-400" />,
      iconBg: 'bg-green-500/20'
    },
    'maintenance': {
      bg: 'bg-gradient-to-r from-amber-500/10 to-orange-600/5',
      border: 'border-amber-500/30',
      icon: <Bell className="h-5 w-5 text-amber-400" />,
      iconBg: 'bg-amber-500/20'
    },
    'event': {
      bg: 'bg-gradient-to-r from-purple-500/10 to-indigo-600/5',
      border: 'border-purple-500/30',
      icon: <Bell className="h-5 w-5 text-purple-400" />,
      iconBg: 'bg-purple-500/20'
    }
  };
  
  const style = typeStyles[type];
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed ${positionStyles[position]} z-50 max-w-sm shadow-lg shadow-black/10 backdrop-blur-md`}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`rounded-lg border ${style.border} ${style.bg} p-4 w-full max-w-sm`}>
            <div className="flex items-start">
              <div className={`flex-shrink-0 rounded-full ${style.iconBg} p-2 mr-3`}>
                {style.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                <p className="text-gray-300 text-sm mb-3">{message}</p>
                
                {linkText && linkUrl && (
                  <Link href={linkUrl} className="inline-flex items-center text-sm font-medium text-neon-blue hover:text-blue-400 transition-colors">
                    {linkText}
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                )}
              </div>
              <button 
                onClick={handleDismiss}
                className="flex-shrink-0 ml-2 rounded-full p-1 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                aria-label="Close notification"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Usage example component
export function NotificationProvider() {
  return (
    <>
      <UpdateNotification
        id="v1.2-update"
        title="New Update Available"
        message="We've added new learning resources and community features to enhance your cybersecurity journey."
        linkText="See what's new"
        linkUrl="/updates"
        type="update"
        position="bottom-right"
      />
    </>
  );
} 