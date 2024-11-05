import React from 'react';
import { X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function NotificationPanel() {
  const { notifications, markNotificationAsRead } = useApp();

  if (notifications.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No new notifications
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-100">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`p-4 hover:bg-gray-50 ${notification.read ? 'opacity-50' : ''}`}
        >
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-900">{notification.title}</h3>
            <button
              onClick={() => markNotificationAsRead(notification.id)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
        </div>
      ))}
    </div>
  );
}