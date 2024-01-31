"use client"
import Chat from "@/components/Chat"
import UserInput from "@/components/UserInput/UserInput"
import { ChatProvider } from "@/contexts/ChatContext"
import { UserProvider, useUser } from "@/contexts/UserContext"


const Home = () => {
 
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <UserProvider>
        <ChatProvider>
          <h1 className="text-3xl font-bold my-3">Chat Simples</h1>
         <Chat />
        </ChatProvider>
      </UserProvider>
    </div>
  )
}

export default Home