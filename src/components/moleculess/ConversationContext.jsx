import { createContext, useState } from "react";

export const ConversationContext = createContext({});

export function ConversationProvider({ children }) {
  const [conversation, setConversationData] = useState({});
  const [message, setMessageData] = useState([]);

  function setConversation(conversation) {
    setConversationData(conversation);
  }

  function setMessage(message) {
    setMessageData(message);
  }

  return (
    <ConversationContext.Provider value={{ 
      conversation, 
      message, 
      setConversation, 
      setMessage 
    }}>
      {children}
    </ConversationContext.Provider>
  );
}
