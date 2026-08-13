import { Module } from '@nestjs/common';
import { ChatController } from './chat/chat.controller';
import { ChatService } from './chat/chat.service';

@Module({
  controllers: [ChatController],
  providers: [ChatService],
})
export class AppModule {}
