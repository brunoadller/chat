import { useUser } from '@/contexts/UserContext'
import React, { useRef } from 'react'
import UserInput from '../UserInput/UserInput'
import Messages from '../Messages'
import ChatInput from '../ChatInput'

const Chat = () => {
    const scrollMessageRef = useRef(null)
    const userCtx = useUser()

    if(!userCtx) return null
    if(!userCtx?.name) return <UserInput />
  return (
    <div className='w-1/3 h-[400px] flex flex-col border border-white rounded-md'>
      <div className='flex-1 h-40 overflow-y-scroll'>
          <Messages refScroll = {scrollMessageRef}/>
      </div>
      <div className='flex w-full border-t border-white'>
          <ChatInput  refScroll = {scrollMessageRef} name={userCtx.name}/>
      </div>
      <div className='flex w-full border-t border-white'>
        <ChatInput  refScroll = {scrollMessageRef} name='bot'/>
      </div>
    </div>
  )
}

export default Chat