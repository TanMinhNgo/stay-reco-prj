'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { DashboardShell } from '@/components/admin/dashboard-shell';
import Sidebar, { SidebarProvider } from '@/common/sidebar/Sidebar';
import Navbar from '@/common/navbar/Navbar';

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (
    pathname === '/admin/dashboard' ||
    pathname.startsWith('/admin/users') ||
    pathname === '/admin/payment-settings' ||
    pathname.startsWith('/admin/transactions') ||
    pathname === '/admin/logs' ||
    pathname === '/admin/ai-settings'
  ) {
    return <DashboardShell>{children}</DashboardShell>;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background text-foreground">
        <div className="fixed inset-y-0 left-0 z-30 hidden md:block">
          <Sidebar />
        </div>
        <div className="md:pl-sidebar">
          <Navbar />
          <main className="min-h-[calc(100dvh-4rem)] p-4 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
