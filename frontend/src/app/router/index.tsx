/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';

// We will eventually import these from your 'features' folders!
// For now, these are placeholder components.
const Tasks = () => <div className="p-8">Tasks List</div>;
const Settings = () => <div className="p-8">Settings</div>;

export const router = createBrowserRouter([
  {
    path: '/',
    // This element will act as your main layout wrapper (Sidebar, Header, etc.)
    element: (
      <div className="min-h-screen w-full bg-background">
        {/* Your Sidebar/Header components will go here */}
        <main className="flex-1">
          {/* We will eventually render an <Outlet /> here so child routes inject inside the layout */}
          <DashboardLayout />
        </main>
      </div>
    ),
  },
  {
    path: '/tasks',
    element: <Tasks />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);