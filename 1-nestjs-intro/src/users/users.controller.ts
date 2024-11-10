import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

// http://localhost:3000/users
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers(): string {
    return this.userService.getUsers();
  }
}
