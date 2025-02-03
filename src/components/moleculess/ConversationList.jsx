import { useContext } from "react";
import { ConversationContext } from "./ConversationContext";
import { MessageSquare } from "lucide-react";

export default function ConversationList({ isLastConversation, data }) {
  const { conversation, setConversation } = useContext(ConversationContext);
  const { contactName, lastMessage, phoneNumber } = data;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const isActive = conversation && conversation.phoneNumber === phoneNumber;

  return (
    <div
      className={`flex h-[4rem] w-full cursor-pointer gap-2 rounded-lg border px-2 mb-1 ${
        isActive ? "bg-[#f3f2f8] border-[#a7a7c1]" : "bg-white hover:bg-[#00000009]"
      }`}
      onClick={() => setConversation(data)}
    >
      <div className="flex h-full w-[1.3rem] py-2 pb-5">
        <MessageSquare />
      </div>
      <div
        className={`flex w-full items-center justify-between gap-2 py-2 ${
          isLastConversation ? "border-none" : "border-b"
        } border-gray-200`}
      >
        <div className="flex w-full text-start py-2">
          <div className="flex h-full w-full flex-col">
            <span className="overflow-y-hidden font-bold text-black">
              {truncateText(contactName, 23)}
            </span>
            <span className="overflow-y-hidden text-ellipsis text-sm text-[#aebac1]">
              {truncateText(lastMessage, 23)}
            </span>
          </div>
          <div className="flex w-auto flex-col text-[#aebac1]">
            <h1 className="text-xs">15m</h1>
          </div>
        </div>
      </div>
    </div>
  );
}