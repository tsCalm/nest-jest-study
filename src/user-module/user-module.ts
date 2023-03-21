import { Module } from '@nestjs/common';
import {
  USER_FINDONE_TOKEN,
  USER_FIND_TOKEN,
  USER_REPOSITORY_TOKEN,
} from './token';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { UserFindOneService, UserFindService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: UserRepository,
    },
    {
      provide: USER_FIND_TOKEN,
      useClass: UserFindService,
    },
    {
      provide: USER_FINDONE_TOKEN,
      useClass: UserFindOneService,
    },
  ],
})
export class UserModule {}
