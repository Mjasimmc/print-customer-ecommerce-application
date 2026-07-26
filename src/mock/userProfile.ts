export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  avatarUrl: string;
  walletBalance: number;
  vipTier: string;
  addresses: {
    id: string;
    label: string;
    address: string;
    isDefault: boolean;
  }[];
  savedPaymentCards: {
    id: string;
    brand: string;
    last4: string;
    expMonth: number;
    expYear: number;
  }[];
  savedFilesCount: number;
}

export const MOCK_USER_PROFILE: UserProfile = {
  id: 'usr-901',
  fullName: 'Muhammed Jasim',
  email: 'jasim@example.com',
  phone: '+1 (555) 234-5678',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  walletBalance: 142.50,
  vipTier: 'VIP Pro Member',
  addresses: [
    {
      id: 'addr-1',
      label: 'Home Address',
      address: '742 Evergreen Terrace, San Francisco, CA 94102',
      isDefault: true,
    },
    {
      id: 'addr-2',
      label: 'Design Studio / Office',
      address: '100 Market Street, Suite 400, San Francisco, CA 94105',
      isDefault: false,
    },
  ],
  savedPaymentCards: [
    { id: 'card-1', brand: 'Visa', last4: '4242', expMonth: 12, expYear: 2028 },
    { id: 'card-2', brand: 'Mastercard', last4: '8819', expMonth: 8, expYear: 2027 },
  ],
  savedFilesCount: 14,
};
