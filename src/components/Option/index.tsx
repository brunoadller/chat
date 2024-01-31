import { useChat } from '@/contexts/ChatContext'
import React, { useState } from 'react'



type Props = {
    index: number
    show: boolean
    updateStatePopover:  (show: boolean) => void
    remove: boolean
    changeDelete: (remove: boolean) => void
}
const Option = ({index, show, updateStatePopover, remove, changeDelete}: Props) => {
    const ChatCtx = useChat()
    


    const handleRemoveButton = () => {
        ChatCtx?.dispatch({
            type: 'remove',
            payload: {id: index}
        })
        updateStatePopover(show)
        changeDelete(remove)
        
    }
   
  return (
    
       
     
    <div  className='rounded-md text-sm h-10 absolute self-end text-center bg-slate-500 text-white p-3 my-3'>
        <div onClick={handleRemoveButton} className='cursor-pointer'>Remover</div>
    </div>
        
    
    
  )
}

export default Option