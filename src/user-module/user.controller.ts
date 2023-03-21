import { Controller, Get, Inject } from '@nestjs/common';
import { USER_FINDONE_TOKEN, USER_FIND_TOKEN } from './token';
import { IService } from './types';

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_FIND_TOKEN) private readonly userFindService: IService,
    @Inject(USER_FINDONE_TOKEN) private readonly userFindOneService: IService,
  ) {}

  @Get('find')
  find() {
    return this.userFindService.execute([1, 2, 3]);
  }

  @Get('findone')
  findOne() {
    return this.userFindOneService.execute(1);
  }
}
