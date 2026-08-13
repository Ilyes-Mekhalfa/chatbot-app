import { Injectable, InternalServerErrorException } from '@nestjs/common';
import sendToGroq from './providers/groq.provider';
import { ChatMessage } from './interfaces/chat-message.interface';

@Injectable()
export class ChatService {
  private readonly apiKey = process.env.GROQ_API_KEY;
  async sendMessage(messages: ChatMessage[]): Promise<string> {
    if (!this.apiKey) {
      throw new InternalServerErrorException(
        'GROQ_API_KEY is not set on the server. please add it to continue',
      );
    }

    try {
      const response = await sendToGroq(messages)
      return response.data.choices[0].message.content;
    } catch (err: any) {
      const detail = err?.response?.data || err.message;
      console.error('Chat API error:', detail);
      throw new InternalServerErrorException('Failed to get a response from the model.');
    }
  }
}
