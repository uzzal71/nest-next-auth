import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  isMarried: boolean;
}

@Injectable()
export class UsersService {
  users: User[] = [
    { id: 1, name: 'Sujon', age: 28, gender: 'male', isMarried: false },
    { id: 2, name: 'Uzzal', age: 29, gender: 'male', isMarried: false },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user: User) => user.id === id);
  }

  createUser(newUser: User): User {
    this.users.push(newUser);
    return newUser;
  }
}
