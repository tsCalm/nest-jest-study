import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY_TOKEN } from './token';
import { IRepository, IService, IUser } from './types';

@Injectable()
export class UserFindService implements IService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IRepository<IUser>,
  ) {}

  execute(params: number[]): Promise<IUser[]> {
    return this.userRepository.find(params);
  }
}

@Injectable()
export class UserFindOneService implements IService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IRepository<IUser>,
  ) {}
  execute(params: number): Promise<IUser> {
    return this.userRepository.findone(params);
  }
}
