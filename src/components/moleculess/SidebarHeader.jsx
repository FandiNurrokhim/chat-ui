import React from 'react';
import NewChatButton from '../atoms/NewChatButton';
import Search from '../atoms/Search';
import ListWithIcons from '../atoms/ListWithIcon';

export default function SidebarHeader() {
  return (
    <div>
      <NewChatButton />
      <Search />
      <ListWithIcons />
    </div>
  );
}