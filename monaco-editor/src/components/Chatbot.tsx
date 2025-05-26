import chatbotimg from '../assets/chatbot.png'
import { Switch } from "./ui/switch"

export function Chatbot(){
    return (
        <div className="chatbot-container">
            <div className="chatbot-icon"></div>
            <img src={chatbotimg} width="75" height="75"></img>
            <div className="chatbot-messages">
                <p className="message-text">Hey there! How can I help you today</p>
            </div>
            <Switch />
        </div>
    )
}