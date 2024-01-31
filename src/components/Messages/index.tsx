import { useChat } from '@/contexts/ChatContext'
import { useUser } from '@/contexts/UserContext'
import React, { useRef, useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";
import Option from '../Option';
import { AiOutlineStop } from "react-icons/ai";


type Props = {
  refScroll: React.LegacyRef<HTMLDivElement>
}
const Messages = ({refScroll}:Props) => {
  const userCtx = useUser()
  const chatCtx = useChat()
  const [showOption, setShowOption] = useState(false)
  const [popoverIndex, setPopoverIndex] = useState<number | null>(null)
  const [isRemove, setIsRemove] = useState(false)

  const handleShowOptions = (index: number | null) => {

    setShowOption(!showOption)
    setPopoverIndex(index)

  }
  const updateStatePopover = (show: boolean) => {
    setShowOption(!show)
  }
  const changeDelete = (remove: boolean) => {
    setIsRemove(!remove)
  }
  return (
    <div className='p-2 flex flex-col gap-3'>
        
       
            {chatCtx?.messages.map((item, index) => {
             
              return(
                <div
                ref = {refScroll}
                className={`flex gap-2 border  border-white rounded-md p-2 text-sm px-3 py-3
                 ${userCtx?.name === item.name? 'bg-white self-end': 'bg-transparent self-start' }`}
                key={item.id}>
                  {
                    !isRemove ? (
                      <div className='flex-1'>
                        <p className={`${userCtx?.name === item.name? 'text-black font-bold': 'text-white font-bold'}`}>{item.name}</p>
                        <p className={`${userCtx?.name === item.name? 'text-black': 'text-white'}`}>{item.text}</p>
                      </div>
                    ):(
                      <div className='flex gap-3 text-gray-500'>
                        <AiOutlineStop size={20}/>
                      </div>
                    )
                  }
                  <div className='relative '>
                    <CiMenuKebab onClick={() => handleShowOptions(index)} className={`${userCtx?.name === item.name? 'text-gray-500': 'text-white '} cursor-pointer `} size={20}/>
                    { showOption && popoverIndex === index && <Option remove = {isRemove} changeDelete = {changeDelete} show = {showOption} updateStatePopover = {updateStatePopover} index = {item.id} />}
                  
                  </div>
                </div>
              )
            })}
         
          
        
    </div>
  )
}

export default Messages