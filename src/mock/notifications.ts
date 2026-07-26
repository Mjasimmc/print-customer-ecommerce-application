export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  timestamp: string;
  read: boolean;
  type: 'production' | 'delivery' | 'promo' | 'system';
  orderId?: string;
}

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Service Production Active 🛠️',
    body: 'Apex Craft & Print Studio has started processing your order #PD-893012.',
    timestamp: '10 mins ago',
    read: false,
    type: 'production',
    orderId: 'ord-1094',
  },
  {
    id: 'notif-2',
    title: 'Project File Pre-Flight Passed ✓',
    body: 'Your uploaded file brand_identity_proof.pdf passed 300 DPI pre-flight verification.',
    timestamp: '25 mins ago',
    read: true,
    type: 'production',
    orderId: 'ord-1094',
  },
  {
    id: 'notif-3',
    title: 'Express Delivery Partner Assigned 🚴',
    body: 'Marcus Vance has been assigned to deliver order #PD-893012 upon completion.',
    timestamp: '1 hour ago',
    read: true,
    type: 'delivery',
    orderId: 'ord-1094',
  },
  {
    id: 'notif-4',
    title: '$15 Service Credit Added 🎁',
    body: 'Use promo code LOCALHERO20 for 15% off your next local service order.',
    timestamp: 'Yesterday',
    read: true,
    type: 'promo',
  },
];
