import React from 'react';

export default function SidebarButton({ icon: Icon, label }) {
  return (
    <div className="flex items-center justify-between text-gray-700">
      <div className="flex items-center gap-2">
        <Icon size={20} />
        <span className="text-sm font-bold">{label}</span>
      </div>
    </div>
  );
}