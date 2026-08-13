import axios from "axios";
import { ChatMessage } from "../interfaces/chat-message.interface";
export default(messages : ChatMessage[]) => {
  return axios.post(
    process.env.API_URL,
    {
      model: process.env.GROQ_MODEL,
      messages,
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
    },
  );
};
