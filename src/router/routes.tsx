import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';
import { LandingPage } from '../pages/Landing/LandingPage';
import { HomePage } from '../pages/Home/HomePage';
import { SearchPage } from '../pages/Search/SearchPage';
import { ProductDetailsPage } from '../pages/ProductDetails/ProductDetailsPage';
import { ProvidersPage } from '../pages/Providers/ProvidersPage';
import { ProviderDetailsPage } from '../pages/ProviderDetails/ProviderDetailsPage';
import { PricingPage } from '../pages/Pricing/PricingPage';
import { CartPage } from '../pages/Cart/CartPage';
import { CheckoutPage } from '../pages/Checkout/CheckoutPage';
import { OrderTrackingPage } from '../pages/OrderTracking/OrderTrackingPage';
import { OrderHistoryPage } from '../pages/OrderHistory/OrderHistoryPage';
import { NotificationsPage } from '../pages/Notifications/NotificationsPage';
import { ProfilePage } from '../pages/Profile/ProfilePage';

const RootLayout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'landing',
        element: <LandingPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'providers',
        element: <ProvidersPage />,
      },
      {
        path: 'provider/:id',
        element: <ProviderDetailsPage />,
      },
      {
        path: 'product/:id',
        element: <ProductDetailsPage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
      {
        path: 'tracking/:id',
        element: <OrderTrackingPage />,
      },
      {
        path: 'orders',
        element: <OrderHistoryPage />,
      },
      {
        path: 'notifications',
        element: <NotificationsPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
    ],
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
