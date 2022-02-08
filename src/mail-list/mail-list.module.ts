import { Module } from '@nestjs/common';
import { MailListService } from './mail-list.service';
import { MailListController } from './mail-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MailList, MailListSchema } from './schemas/mail-list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MailList.name, schema: MailListSchema },
    ]),
  ],
  controllers: [MailListController],
  providers: [MailListService],
})
export class MailListModule {}
