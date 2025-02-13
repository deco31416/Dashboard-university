"use client";

import { createContext, useContext, useState } from "react";
import { ReactSetter } from "@/lib/aliases";
import { useGetSession } from "@/hooks/api/chatbot";
import { useChatHistory, useChatboxWS } from "@/hooks/api/study-companion";
import { ChatPayload, LastMessagePayload } from "@/hooks/api/chatbox/schema";
import { useNftDetail } from "@/hooks/api/nft";

interface CreateChatbotContextProps {
  createChatbot: any;
  handleChange: any;

  newQuestion: string;
  setNewQuestion: ReactSetter<string>;
  lastQuestion: string;
  setLastQuestion: ReactSetter<string>;

  lastJsonMessage: LastMessagePayload;
  readyState: number;
  sendValidatedMessage: (message: any) => void;

  replyStatus: "idle" | "answering";
  setReplyStatus: ReactSetter<"idle" | "answering">;

  messageHistory: Message[];
  setMessageHistory: ReactSetter<Message[]>;

  buttonSession: any;
  setButtonSession: any;

  setChatbotId: ReactSetter<string>;
  chatSession: any;
  chatHistoryAPI: any;

  isReferencesOpen: boolean;
  setIsReferencesOpen: ReactSetter<boolean>;
  references: any;
  setReferences: ReactSetter<any>;
}

interface Message {
  sender: "bot" | "user";
  message: string;
  created?: string;
  citations?: string | null;
  suggested_question?: string;
}

const CreateChatbotContext = createContext<
  CreateChatbotContextProps | undefined
>(undefined);

export const CreateChatbotProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [createChatbot, setCreateChatbot] = useState({
    type: "",
    profile_image: "",
    username: "",
    category_id: "",
    name: "",
    description: "",
    instruction: "",
    example_conversation: "",
  });
  const [newQuestion, setNewQuestion] = useState("");
  const [lastQuestion, setLastQuestion] = useState("");
  const [buttonSession, setButtonSession] = useState(false);

  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  const { lastJsonMessage, readyState, sendValidatedMessage } = useChatboxWS(
    `${process.env.NEXT_PUBLIC_APPS_WS}/study-companion/websocket`,
  );
  const [replyStatus, setReplyStatus] = useState<"idle" | "answering">("idle");

  const [chatbotId, setChatbotId] = useState<string>("");

  const [isReferencesOpen, setIsReferencesOpen] = useState(false);
  const [references, setReferences] = useState<any>([]);

  const chatSession = useGetSession({ chatbot_id: chatbotId });

  const chatHistoryAPI = useChatHistory({
    dialog_id: chatSession?.data?.data?.data?.session_id,
    chatbot_id: chatbotId as string,
    page_num: 1,
    page_size: 20,
  });

  const handleChange = (name: string, value: any) => {
    setCreateChatbot((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <CreateChatbotContext.Provider
      value={{
        createChatbot,
        handleChange,

        // Pressing send button
        newQuestion,
        setNewQuestion,
        lastQuestion,
        setLastQuestion,

        // WS
        lastJsonMessage,
        readyState,
        sendValidatedMessage,

        // Loading
        replyStatus,
        setReplyStatus,

        // Chat history
        messageHistory,
        setMessageHistory,

        buttonSession,
        setButtonSession,

        setChatbotId,
        chatSession,
        chatHistoryAPI,

        isReferencesOpen,
        setIsReferencesOpen,
        references,
        setReferences,
      }}
    >
      {children}
    </CreateChatbotContext.Provider>
  );
};

export const useCreateChatbotContext = () => {
  const context = useContext(CreateChatbotContext);
  if (!context) {
    throw new Error(
      "useCreateChatbotContext must be used within a CreateChatbotProvider",
    );
  }
  return context;
};
