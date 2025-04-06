"use client";

import React from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RefreshButton() {
  return (
    <Button 
      variant="outline" 
      size="sm"
      className="bg-gray-800 border-gray-700 hover:bg-gray-700"
      id="refreshBtn" 
      name="refreshBtn"
      onClick={() => window.location.reload()}
    >
      <RefreshCw className="w-4 h-4 mr-2" />
      Refresh
    </Button>
  );
} 