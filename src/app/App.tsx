import React from 'react';
import { AppProvider } from '../providers/AppProvider';
import { AppRouter } from '../router/routes';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
