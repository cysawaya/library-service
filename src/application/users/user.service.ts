import { Injectable } from '@nestjs/common';
import { User } from '../../domain/users/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  create(user: User) {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }
}