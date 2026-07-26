'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export const LandingPage: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={() => router.push('/')}>Go to Home</button>
    </div>
  );
};

export default LandingPage;
