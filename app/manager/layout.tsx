import type { ReactNode } from 'react';
import { ManagerShell } from '@/components/manager/manager-shell';
export default function ManagerLayout({ children }: { children: ReactNode }) { return <div className="manager-role"><ManagerShell>{children}</ManagerShell></div>; }
