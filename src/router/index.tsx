import { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ENDPOINTS } from '../constants/endpoint';
import Feedback from '../pages/feedback';

const Dashboard = lazy(() => import('../pages/dashboard'));
const NotFound = lazy(() => import('../pages/notfound'));

const allRoutes: RouteObject[] = [
  {
    path: ENDPOINTS.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ENDPOINTS.FEEDBACK,
    element: <Feedback />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

export default function Router() {
  const route = useRoutes(allRoutes);
  return route;
}
