import { useState } from "react";
import ConversationList from "../moleculess/ConversationList";
import NavBar from "../moleculess/NavBar";
import conversations from "../data.json";
import NewChatButton from "../atoms/NewChatButton";
import Search from "../atoms/Search";
import ListWithIcons from "../atoms/ListWithIcon";
import UserInfo from "../moleculess/UserInfo";
import { Sun, Moon, Settings, HelpCircle } from "lucide-react";

export default function SideBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [visibleConversations, setVisibleConversations] = useState(5);
  const conversationsList = conversations.conversation_list;
  const [search, setSearch] = useState("");
  const filteredConversationsList =
    search.length > 0
      ? conversationsList.filter((conversationList) =>
          conversationList.contactName.toLowerCase().includes(search)
        )
      : conversationsList;

  const handleShowMore = () => {
    setVisibleConversations((prev) => prev + 5);
  };

  return (
    <div>
      <NavBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <aside
        id="logo-sidebar"
        className={`fixed w-[300px] top-0 left-0 z-40 h-screen pt-14 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } border-r border-gray-200 sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white flex flex-col justify-between">
          <div>
            <NewChatButton />
            <Search />
            <ListWithIcons />

            <div className="mt-2 overflow-y-auto h-[calc(100vh-30rem)]">
              {filteredConversationsList
                .slice(0, visibleConversations)
                .map((conversation, index) => {
                  return (
                    <ConversationList
                      key={index}
                      isLastConversation={index === 0}
                      data={conversation}
                    />
                  );
                })}
            </div>
            {filteredConversationsList.length > visibleConversations && (
              <button
                onClick={handleShowMore}
                className="mt-1 flex w-full items-center justify-center rounded-lg border bg-white px-4 py-2 text-sm font-bold text-black shadow hover:bg-[#00000009]"
              >
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

          <div className="align-end flex w-full flex-col justify-center mt-5 gap-4">
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
