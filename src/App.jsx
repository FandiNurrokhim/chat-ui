import { useState } from "react";
import Header from "./components/templates/Header";
import SideBar from "./components/templates/SideBar";
import ConversationDetails from "./components/moleculess/ConversationDetail";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full bg-[#f3f3f3]">
        <Header />
        <div className="flex w-full items-center justify-between">
          <div className="w-1/4">
            <SideBar />
          </div>
          <div className="flex w-full mx-auto justify-end">
            <ConversationDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
