import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { Message, MessageSchema } from './message.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),],
  controllers: [MessageController],
  providers: [MessageService]
})
export class MessageModule {}
