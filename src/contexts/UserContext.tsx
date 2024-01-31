import { ReactNode, createContext, useContext, useState } from "react";

type UserContextType = {
     name: string,
     setName: (newName: string) => void
}
const UserContex = createContext<UserContextType | null>(null);


type Props = {children: ReactNode}

export const UserProvider = ({children}: Props) => {
    const [name, setName] = useState('')
    
    return(
        <UserContex.Provider value={{name, setName}}>
            {children}
        </UserContex.Provider>
    )
}

export const useUser = () => useContext(UserContex)