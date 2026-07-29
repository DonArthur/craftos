import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { AuthLayout } from '../layouts/AuthLayout';

import { DashboardPage } from '@/features/dashboard/pages/DashboardPage';
import { TasksPage } from '@/features/tasks/pages/TasksPage';
import { ProjectsPage } from '@/features/projects/pages/ProjectsPage';
import { SettingsPage } from '@/features/settings/pages/SettingsPage';
import { LoginPage } from '@/features/login/pages/LoginPage';

export const router = createBrowserRouter([
  {
    // The main app wrapper
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <DashboardPage /> }, // Loads at '/'
      { path: 'tasks', element: <TasksPage /> },   // Loads at '/tasks'
      { path: 'projects', element: <ProjectsPage /> },   // Loads at '/projects'
      { path: 'settings', element: <SettingsPage /> }, // Loads at '/settings'
    ],
  },
  {
    // Keeping Auth separate makes sense so the login screen doesn't show the sidebar!
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
]);