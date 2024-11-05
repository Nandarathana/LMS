import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Trophy,
  TrendingUp,
  Users,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export function Dashboard() {
  const { addNotification } = useApp();

  const stats = [
    { icon: BookOpen, label: 'Active Courses', value: '12' },
    { icon: Users, label: 'Total Students', value: '248' },
    { icon: Clock, label: 'Hours Completed', value: '1,432' },
    { icon: Trophy, label: 'Certifications', value: '89' },
  ];

  const upcomingCourses = [
    {
      title: 'Advanced Fleet Management',
      date: 'March 15, 2024',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop'
    },
    {
      title: 'Safety Regulations 2024',
      date: 'March 18, 2024',
      progress: 25,
      image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&auto=format&fit=crop'
    },
    {
      title: 'Eco-Driving Techniques',
      date: 'March 20, 2024',
      progress: 60,
      image: 'https://images.unsplash.com/photo-1530850374161-146cfe6b5c6d?w=800&auto=format&fit=crop'
    }
  ];

  const handleScheduleTraining = () => {
    addNotification({
      title: 'Training Scheduled',
      message: 'Your training session has been scheduled. Check your calendar for details.'
    });
  };

  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
            <p className="text-gray-600">Here's what's happening with your learning progress</p>
          </div>
          <button
            onClick={handleScheduleTraining}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Schedule Training
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl border border-gray-200 flex items-center">
              <div className="p-3 rounded-lg bg-blue-50">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Learning Progress</h2>
              <div className="flex items-center gap-2 text-green-600">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm font-medium">+12.5% this month</span>
              </div>
            </div>
            <div className="space-y-4">
              {upcomingCourses.map((course) => (
                <div key={course.title} className="flex items-center gap-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-500">{course.date}</p>
                    <div className="mt-2 h-2 bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {course.progress}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Tasks</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Complete Safety Module</p>
                  <p className="text-sm text-gray-500">Due Today</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Vehicle Inspection Quiz</p>
                  <p className="text-sm text-gray-500">Due Tomorrow</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Route Planning Exercise</p>
                  <p className="text-sm text-gray-500">Due March 16</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}