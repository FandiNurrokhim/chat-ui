import MessageBalloon from "../atoms/MessageBallon";
import ChatInput from "./ChatInput";

export default function ConversationDetails() {
  const messages = [
    {
      id: 1,
      user: { name: "You", avatar: "https://i.pravatar.cc/40?img=1" },
      message: { text: "Provide a UX design tip I can share on LinkedIn." },
      me: true,
    },
    {
      id: 2,
      user: { name: "ChatAI", avatar: "https://i.pravatar.cc/40?img=2" },
      message: {
        text:
          "UX tip: Prioritize clarity over complexity. Keep interfaces simple and intuitive to enhance user satisfaction and engagement. #UserExperience #UXDesign",
      },
      me: false,
    },
    {
      id: 3,
      user: { name: "You", avatar: "https://i.pravatar.cc/40?img=1" },
      message: { text: "Make a description about this picture" },
      me: true,
    },
    {
      id: 4,
      user: { name: "ChatAI", avatar: "https://i.pravatar.cc/40?img=2" },
      message: {
        text:
          "The glass is adorned with colorful, hand-drawn mind maps, sticky notes, and sketches, showcasing the dynamic and active brainstorming process.",
        image: "https://via.placeholder.com/200", // Gambar Placeholder
      },
      me: false,
    },
  ];

  return (
    <div className="flex w-full h-full flex-col justify-between bg-[#f3f3f3] text-start">
      <div className="flex w-full flex-col gap-4 p-4 mx-auto max-h-[85vh]  overflow-y-scroll">
        <div className="w-1/2 mx-auto">
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

      <footer className="flex h-24 w-full items-center justify-between py-3 text-[#8696a0]">
        <ChatInput />
      </footer>
    </div>
  );
}
