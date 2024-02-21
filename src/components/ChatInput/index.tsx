
import { useChat } from '@/contexts/ChatContext'
import { useUser } from '@/contexts/UserContext'
import React, { useState } from 'react'
type Props= {
    name: string
    scrollToBottom: () => void
    
}
const ChatInput = ({name, scrollToBottom}: Props) => {
  const userCtx = useUser()
  const chatCtx = useChat()
  

  const [message, setMessage] = useState('')
  const handleKeyUpMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code.toLowerCase() === 'enter'){
      if(message.trim() !== ''){
        chatCtx?.dispatch({
          type: 'add',
          payload:{
            name: name,
            text:message
          }
        })
        
        setMessage('')
        scrollToBottom()
      }
    }
    
  }
  return (
    <input
    value={message}
    onChange={e => setMessage(e.target.value)}
    onKeyUp={handleKeyUpMessage}
    placeholder={`${name}, Digite uma mensagem [e aperte enter]`}
    className='text-white text-sm bg-transparent py-3 px-2 flex-1 outline-none' 
    type="text" />
  )
}

export default ChatInput