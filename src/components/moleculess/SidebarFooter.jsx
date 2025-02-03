import React from 'react';
import SidebarButton from '../atoms/SidebarButton';
import { Settings, HelpCircle } from 'lucide-react';
import UserInfo from './UserInfo';

export default function SidebarFooter() {
  return (
    <div className="align-end flex w-full flex-col justify-center gap-4">
      <div className="px-3">
        <div className="space-y-6 px-2">
          <SidebarButton icon={Settings} label="Settings" />
          <SidebarButton icon={HelpCircle} label="Help" />
        </div>
      </div>
      <UserInfo />
    </div>
  );
}