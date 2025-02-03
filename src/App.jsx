import { useState } from "react";
import SideBar from "./components/templates/SideBar";
import ConversationDetails from "./components/moleculess/ConversationDetail";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full bg-[#f3f3f3] h-full">
        <div className="flex w-full items-center justify-between">
          <SideBar />
          <div className="flex w-full lg:ml-64 md:md-auto sm:ml-auto justify-end">
            <ConversationDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
