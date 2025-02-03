import { useContext } from "react";
import { ConversationContext } from "./ConversationContext";
import MessageBalloon from "../atoms/MessageBallon";
import ChatInput from "./ChatInput";

export default function ConversationDetails() {
  const { conversation } = useContext(ConversationContext);

  if (!conversation || !conversation.messages) {
    return (
      <div className="flex w-full h-full flex-col justify-center items-center bg-[#f3f3f3] text-start">
        Select a conversation to start chatting
      </div>
    );
  }

  const { messages } = conversation;

  return (
    <div className="flex w-full h-full flex-col justify-between bg-[#f3f3f3] text-start">
      <div className="flex w-full flex-col gap-4 p-4 mx-auto h-[calc(100vh-6rem)] overflow-y-scroll">
        <div className="lg:w-[60%] md:w-[60%] sm:w-full w-full lg:px-0 pt-20 md:ml-80 md:px-10 mx-auto">
          {messages.map((msg) => (
            <MessageBalloon
              key={msg.id}
              me={msg.me}
              message={msg.message}
              user={msg.user}
            />
          ))}
        </div>
      </div>
      <ChatInput />
    </div>
  );
}