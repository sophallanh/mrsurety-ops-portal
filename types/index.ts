// types/index.ts

// Type definitions for WorkOrder
export interface WorkOrder {
    id: string;
    userId: string;
    status: 'pending' | 'in-progress' | 'completed';
    createdAt: Date;
    updatedAt: Date;
    description: string;
}

// Type definitions for User Roles
export type UserRole = 'admin' | 'manager' | 'staff' | 'client';

// Type definitions for GPS Tracking
export interface GPSTrack {
    latitude: number;
    longitude: number;
    timestamp: Date;
}

// Type definitions for QuickBooks
export interface QuickBooksInvoice {
    invoiceId: string;
    amount: number;
    dueDate: Date;
    status: 'paid' | 'pending';
}

// Type definitions for Invoice Data
export interface InvoiceData {
    id: string;
    userId: string;
    totalAmount: number;
    issuedDate: Date;
    dueDate: Date;
    items: Array<{ description: string; amount: number; }>; 
}