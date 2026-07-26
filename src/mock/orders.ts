export interface TimelineStep {
  id: string;
  title: string;
  timestamp: string;
  completed: boolean;
  active: boolean;
  description: string;
}

export interface CustomerOrder {
  id: string;
  orderNumber: string;
  date: string;
  productName: string;
  providerName: string;
  totalPrice: number;
  itemCount: number;
  status: 'in_production' | 'ready' | 'out_for_delivery' | 'delivered' | 'cancelled';
  statusText: string;
  courierName: string;
  estimatedDelivery: string;
  timeline: TimelineStep[];
}

export const MOCK_ORDERS: CustomerOrder[] = [
  {
    id: 'ord-1094',
    orderNumber: 'PD-893012',
    date: 'July 26, 2026 at 4:15 PM',
    productName: 'Luxury Velvet Soft-Touch Business Cards',
    providerName: 'Apex Craft & Print Studio',
    totalPrice: 43.79,
    itemCount: 250,
    status: 'in_production',
    statusText: 'In Service Production',
    courierName: 'Marcus Vance',
    estimatedDelivery: '5:30 PM Today',
    timeline: [
      { id: '1', title: 'Order Received', timestamp: '4:15 PM', completed: true, active: false, description: 'Order successfully sent to provider.' },
      { id: '2', title: 'Project File Verification', timestamp: '4:18 PM', completed: true, active: false, description: 'File pre-flight passed 300 DPI resolution.' },
      { id: '3', title: 'Service Production', timestamp: '4:22 PM', completed: true, active: true, description: 'Digital press & soft-touch lamination active.' },
      { id: '4', title: 'Quality Verification', timestamp: 'Est 4:45 PM', completed: false, active: false, description: 'Inspection check before packaging.' },
      { id: '5', title: 'Packaging & Dispatch', timestamp: 'Est 4:55 PM', completed: false, active: false, description: 'Securely packaged for courier pick up.' },
      { id: '6', title: 'Out for Courier Delivery', timestamp: 'Est 5:10 PM', completed: false, active: false, description: 'Express courier driver en route.' },
      { id: '7', title: 'Delivered', timestamp: 'Est 5:30 PM', completed: false, active: false, description: 'Order handed to recipient.' },
    ],
  },
  {
    id: 'ord-1088',
    orderNumber: 'PD-892401',
    date: 'July 20, 2026',
    productName: 'Custom Embroidered Fleece Hoodie',
    providerName: 'Metro Design & Apparel Lab',
    totalPrice: 69.00,
    itemCount: 2,
    status: 'delivered',
    statusText: 'Delivered',
    courierName: 'Sarah Jenkins',
    estimatedDelivery: 'Completed',
    timeline: [
      { id: '1', title: 'Order Received', timestamp: 'Jul 20, 10:00 AM', completed: true, active: false, description: 'Order confirmed.' },
      { id: '2', title: 'Embroidery Setup', timestamp: 'Jul 20, 10:30 AM', completed: true, active: false, description: 'Thread digitizing complete.' },
      { id: '3', title: 'Delivered', timestamp: 'Jul 20, 2:15 PM', completed: true, active: false, description: 'Delivered to front porch.' },
    ],
  },
];
