import React, { createContext, useContext, useState, useCallback } from 'react';

interface User {
  name: string;
  role: string;
  notifications: Notification[];
}

interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
}

interface AppContextType {
  user: User;
  notifications: Notification[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  markNotificationAsRead: (id: string) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'read'>) => void;
  showSupport: boolean;
  setShowSupport: (show: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user] = useState<User>({
    name: 'John Driver',
    role: 'Senior Instructor',
    notifications: []
  });

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'New Course Available',
      message: 'Advanced Fleet Management course is now available',
      read: false
    },
    {
      id: '2',
      title: 'Certification Update',
      message: 'Your safety certification needs renewal',
      read: false
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [showSupport, setShowSupport] = useState(false);

  const markNotificationAsRead = useCallback((id: string) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'read'>) => {
    setNotifications(prev => [
      ...prev,
      { ...notification, id: Date.now().toString(), read: false }
    ]);
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        notifications,
        searchQuery,
        setSearchQuery,
        markNotificationAsRead,
        addNotification,
        showSupport,
        setShowSupport
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}