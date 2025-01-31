import ConversationList from "../moleculess/ConversationList";
import conversations from "../data.json";
import { useState } from "react";
import NewChatButton from "../atoms/NewChatButton";
import Search from "../atoms/Search";
import ListWithIcons from "../atoms/ListWithIcon";
import UserInfo from "../moleculess/UserInfo";
import { Sun, Moon, Settings, HelpCircle } from "lucide-react";

export default function SideBar() {
  const [darkMode, setDarkMode] = useState(false);
  const conversationsList = conversations.conversation_list;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex w-[350px] items-center  justify-start rtl:justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-black">
                  Chat-AI
                </span>
              </a>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="text-black">Chat</div>
              <div className="flex items-center ms-3">
                <div>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed w-[300px] top-0 left-0 z-40 h-screen pt-14 border-r border-gray-200 bg-white dark:bg-gray-800 transition-transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white flex flex-col justify-between">
          <div>
            <NewChatButton />
            <Search />
            <ListWithIcons />

            <div className="mt-8">
              {conversationsList.slice(0, 5).map((conversation, index) => {
                return (
                  <ConversationList
                    key={index}
                    isLastConversation={index === 0}
                    data={conversation}
                  />
                );
              })}
            </div>
            {conversationsList.length > 5 && (
              <button className="mt-1 flex w-full items-center justify-center rounded-lg border bg-white px-4 py-2 text-sm font-bold text-black shadow hover:bg-[#00000009]">
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

          <div className="align-end flex w-full flex-col justify-center gap-4">
            <div className="px-3">
              <div className="space-y-6 px-2">
                <div className="flex items-center justify-between text-gray-700">
                  <div className="flex items-center gap-2">
                    <Settings size={20} />
                    <span className="text-sm font-bold">Settings</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-gray-700">
                  <div className="flex items-center gap-2">
                    <HelpCircle size={20} />
                    <span className="text-sm font-bold">Help</span>
                  </div>
                </div>
              </div>
            </div>
            <UserInfo />
          </div>
        </div>
      </aside>
    </div>
  );
}
