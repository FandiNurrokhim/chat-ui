import { Mic, Image, Send } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="flex w-full flex-col items-center px-4">
      <div className="w-full align-middle justify-center gap-2 flex">
        <div className="flex w-full max-w-xl items-center rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm">
          <button className="text-gray-500 hover:text-gray-700">
            <Image size={20} />
          </button>

          <input
            type="text"
            placeholder="Enter a prompt here..."
            className="flex-1 bg-transparent px-3 text-gray-700 outline-none"
          />

          <button className="text-gray-500 hover:text-gray-700">
            <Mic size={20} />
          </button>
        </div>
        <div className="flex h-12 w-[6%] items-center justify-center rounded-md bg-purple-500">
          <Send className="h-6 w-6 cursor-pointer text-white" />
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-gray-500">
        Complimentary Sneak Peek of Research. ChatAI has the potential to
        generate incorrect information.
      </p>
    </div>
  );
};

export default ChatInput;
