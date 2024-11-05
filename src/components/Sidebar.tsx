import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Calendar, 
  Users, 
  FileText, 
  Settings,
  Truck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export function Sidebar() {
  const { setShowSupport } = useApp();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: GraduationCap, label: 'Courses', path: '/courses' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: Users, label: 'Students', path: '/students' },
    { icon: FileText, label: 'Assessments', path: '/assessments' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 text-blue-600">
          <Truck className="h-8 w-8" />
          <span className="text-xl font-bold">TransportLMS</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 m-4 bg-blue-50 rounded-lg">
        <p className="text-sm font-medium text-blue-600">Need Help?</p>
        <p className="text-xs text-gray-600 mt-1">Contact our support team</p>
        <button
          onClick={() => setShowSupport(true)}
          className="mt-3 text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        >
          Get Support
        </button>
      </div>
    </div>
  );
}