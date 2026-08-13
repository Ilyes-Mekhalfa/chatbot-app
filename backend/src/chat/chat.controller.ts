import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatMessage } from './interfaces/chat-message.interface';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async chat(@Body() body: { messages: ChatMessage[] }) {
    const reply = await this.chatService.sendMessage(body.messages);
    return { reply };
  }
}
