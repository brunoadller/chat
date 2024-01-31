import { Messages } from "@/types/Messages";

type AddAction = {
    type: 'add',
    payload:{
        name: string
        text: string
    }
}
type RemoveAction = {
    type: 'remove',
    payload:{
        id: number
    }
}

export type ChatActions = AddAction | RemoveAction

export const chatReducer = (messages: Messages[],action: ChatActions) => {

    switch(action.type){
        case 'add':
            return [...messages, {
                id: messages.length,
                name: action.payload.name,
                text: action.payload.text
            }]
        case 'remove':
            return messages.filter(item => item.id !== action.payload.id)
        default:
            messages
    }
}