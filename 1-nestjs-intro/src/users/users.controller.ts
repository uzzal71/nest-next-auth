import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): User | undefined {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() newUser: User): User {
    return this.userService.createUser(newUser);
  }
}
