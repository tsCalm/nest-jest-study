export interface IUser {
  id: number;
  name: string;
}

export interface IService {
  execute(params: any): Promise<any>;
}

export interface IRepository<T> {
  find(ids: number[]): Promise<T[]>;
  findone(id: number): Promise<T>;
}
