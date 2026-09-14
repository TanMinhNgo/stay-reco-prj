import { PartnerShell } from '@/components/partner/partner-shell';
import type { ReactNode } from 'react';

export default function PartnerLayout({ children }: { children: ReactNode }) {
  return <div className="partner-role"><PartnerShell>{children}</PartnerShell></div>;
}
