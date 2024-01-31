import { useUser } from '@/contexts/UserContext'
import React, { useState } from 'react'

const UserInput = () => {
    const [nameInput, setNameInput] = useState('')
    const userCtx = useUser()

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.code.toLowerCase() === 'enter'){
            if(nameInput.trim() !== '' || nameInput !== 'bot'){
                userCtx?.setName(nameInput)
                console.log(userCtx?.name)
            }
        }
    }
  return (
    <div className='max-w-96 flex flex-col'>
        <h1 className='text-xl my-3'>Digite seu nome</h1>
        <div>
            <input
            value={nameInput}
            onChange={e => setNameInput(e.target.value)}
            onKeyUp={handleKeyUp}
            className='w-full border-2 border-white outline-none bg-transparent rounded-md text-white py-3 px-2'
            placeholder='Informe o nome [e aperte enter]' 
            type="text" />
        </div>
    </div>
  )
}

export default UserInput