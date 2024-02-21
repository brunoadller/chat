import { useUser } from '@/contexts/UserContext'
import React, { MutableRefObject, useRef } from 'react'
import UserInput from '../UserInput/UserInput'
import Messages from '../Messages'
import ChatInput from '../ChatInput'

const Chat = () => {
    const scrollMessageRef = useRef<HTMLDivElement | null>(null)
    const userCtx = useUser()

    const scrollToBottom = () => {
      scrollMessageRef.current?.scrollIntoView()
    }

    if(!userCtx) return null
    if(!userCtx?.name) return <UserInput />

  
  return (
    <div className='w-1/3 h-[400px] flex flex-col border border-white rounded-md'>
      <div  className='flex-1 h-40 overflow-y-scroll'>
          <Messages reference = {scrollMessageRef}/>
      </div>
      <div className='flex w-full border-t border-white'>
          <ChatInput   scrollToBottom = {scrollToBottom} name={userCtx.name}/>
      </div>
      <div className='flex w-full border-t border-white'>
        <ChatInput scrollToBottom = {scrollToBottom}  name='bot'/>
      </div>
    </div>
  )
}

export default Chat