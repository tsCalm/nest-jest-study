import { Injectable } from '@nestjs/common';
import { IRepository, IUser } from './types';
import { User } from './user.entity';

@Injectable()
export class UserRepository implements IRepository<User> {
  #db: User[];

  constructor() {
    this.#db = [1, 2, 3].map((idx) => new User(idx, `test-user-${idx}`));
  }

  sleep() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  async find(ids: number[]): Promise<User[]> {
    await this.sleep();
    const users = this.#db.filter((user) => ids.includes(user.id));
    if (users.length === 0) throw new Error('user not found');
    return users;
  }
  async findone(id: number): Promise<User> {
    await this.sleep();
    const user = this.#db.find((user) => user.id === id);
    if (!user) throw new Error('user not found');
    return user;
  }
}
