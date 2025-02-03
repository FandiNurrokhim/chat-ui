import { useEffect, useState } from "react";
import { ThumbsUp, Download, RefreshCw, Edit } from "lucide-react";

export default function MessageBalloon({ me, message, user }) {
  const [time, setTime] = useState("");
  const flexAlignItems = me ? "items-end" : "items-start";
  const backgroundColor = me ? "bg-none" : "bg-[#FFFFFF] shadow-md";
  const borderRounded = me ? "rounded-tr-none" : "rounded-tl-none";

  useEffect(() => {
    setTime(refreshTime());
  }, []);

  function refreshTime() {
    const date = new Date();
    return `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className="h-full w-full">
      {me ? (
        <div className="mb-1 flex items-center gap-2">
          <img
            src={user.avatar}
            alt="Avatar"
            className="h-6 w-6 rounded-full"
          />
          <span className="text-sm font-semibold">{user.name}</span>
          <span>{time}</span>
        </div>
      ) : null}

      <div
        className={`flex max-w-full ${backgroundColor} ${borderRounded} flex-col gap-2 rounded-lg p-2`}
      >
        <div className="mb-2 flex w-full items-start justify-between rounded-lg p-3 text-[#0F0F0F] gap-5">
          {!me && (
            <div className="mb-1 flex items-center gap-2">
              <img
                src={user.avatar}
                alt="Avatar"
                className="h-8 w-8 rounded-md"
              />
            </div>
          )}

          <div className="flex w-full items-start gap-2">
            <div className="w-[90%]">
              {!me && (
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-sm font-semibold">{user.name}</span>
                  <span className="text-gray-600">15m</span>
                </div>
              )}
              {message.image && (
                <img
                  src="https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Chat Image"
                  className="my-2 max-h-40 rounded-lg object-cover"
                />
              )}
              <p>{message}</p>
            </div>{" "}
            <div className="mt-2 flex items-center justify-between text-xs text-[#777777]">
              <div className="flex gap-2 rounded-md border p-1 text-[#777777]">
                {me ? (
                  <Edit className="cursor-pointer hover:text-black" />
                ) : (
                  <>
                    <ThumbsUp className="cursor-pointer hover:text-black" />
                    <Download className="cursor-pointer hover:text-black" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {!me && (
        <div className="flex items-center justify-end gap-2">
          <button className="mt-3 flex cursor-pointer items-center justify-start rounded-lg border bg-white px-4 py-2 text-sm text-black shadow-sm hover:bg-gray-50">
            <Download className="mr-4" />
            <span>Download Chat</span>
          </button>

          <button className="mt-3 flex cursor-pointer items-center justify-start rounded-lg border bg-white px-4 py-2 text-sm text-black shadow-sm hover:bg-gray-50">
            <RefreshCw className="mr-4" />
            <span>Regenerate</span>
          </button>
        </div>
      )}
    </div>
  );
}
