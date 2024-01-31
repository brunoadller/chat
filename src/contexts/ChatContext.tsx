import { ChatActions, chatReducer } from "@/reducers/ChatReducer";
import { Messages } from "@/types/Messages";
import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

type ChatContextType = {
    messages: Messages[]
    dispatch: Dispatch<ChatActions>
}

const ChatContext = createContext<ChatContextType | null>(null)


type Props = {children: ReactNode}

export const ChatProvider = ({children}: Props) =>{
    const [messages, dispatch] = useReducer(chatReducer, [])

    return(
        <ChatContext.Provider value={{messages, dispatch}}>
            {children}
        </ChatContext.Provider>
    )
}
export const useChat = () => useContext(ChatContext) 