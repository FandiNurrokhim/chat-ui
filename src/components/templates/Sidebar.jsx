import React, { useState } from "react";
import NavBar from "../moleculess/NavBar";
import SidebarHeader from "../moleculess/SidebarHeader";
import SidebarFooter from "../moleculess/SidebarFooter";
import ConversationList from "../moleculess/ConversationList";
import conversations from "../data.json";

export default function SideBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const conversationsList = conversations.conversation_list;

  console.log(darkMode);

  return (
    <div>
      <NavBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <aside
        className={`fixed w-[300px] top-0 left-0 z-40 h-screen pt-14 border-r border-gray-200 bg-white dark:bg-gray-800 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white flex flex-col justify-between">
          <SidebarHeader />
          <div>
            {conversationsList.slice(0, 5).map((conversation, index) => (
              <ConversationList
                key={index}
                isLastConversation={index === 0}
                data={conversation}
              />
            ))}
            {conversationsList.length > 5 && (
              <button className="flex w-full items-center justify-center rounded-lg border bg-white px-4 py-2 text-sm font-bold text-black shadow hover:bg-[#00000009]">
                Show More
                <svg
                  className="ml-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 16L8 12H16L12 16Z" fill="currentColor" />
                </svg>
              </button>
            )}
          </div>
          <SidebarFooter />
        </div>
      </aside>
    </div>
  );
}
