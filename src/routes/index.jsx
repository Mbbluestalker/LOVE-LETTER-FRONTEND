import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Dashboard from '../features/dashboard/Dashboard';
import AccountManagement from '../features/account/AccountManagement';
import UserManagement from '../features/userManagement/UserManagement';
import ComponentDemo from '../features/demo/ComponentDemo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'account',
        element: <AccountManagement />,
      },
      {
        path: 'users',
        element: <UserManagement />,
      },
      {
        path: 'demo',
        element: <ComponentDemo />,
      },
    ],
  },
]);
