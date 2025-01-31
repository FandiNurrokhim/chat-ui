export default function NewChatButton() {

  return (
    <button className="mt-3 flex w-full items-center justify-start px-4 rounded-lg bg-[#6d67e3] py-2 text-sm text-white hover:bg-[#5c57c2]">
      <svg
        className="mr-2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M5 12H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      New Chat
    </button>
  );
}
