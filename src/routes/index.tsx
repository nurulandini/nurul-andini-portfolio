import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout'

import HomePage from '@/pages/HomePage'

import ProjectDetailPage from '@/pages/ProjectDetailPage'
import NotFoundPage from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects/:slug',
        element: <ProjectDetailPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
