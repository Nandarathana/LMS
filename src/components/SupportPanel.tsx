import React from 'react';
import { X, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function SupportPanel() {
  const { setShowSupport } = useApp();

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-blue-600" />
          <h3 className="font-medium text-gray-900">Support Chat</h3>
        </div>
        <button
          onClick={() => setShowSupport(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4">How can we help you today?</p>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          rows={3}
          placeholder="Type your message here..."
        ></textarea>
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </div>
    </div>
  );
}