import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async readUserList(): Promise<User[]> {
    return this.usersService.readUserList();
  }

  @Get(':id')
  async readUserInfo(@Param('id') id: number): Promise<User> {
    const user = await this.usersService.readUserInfo(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }

  @Post()
  async createUserInfo(@Body() user: User): Promise<User> {
    return this.usersService.createUserInfo(user);
  }

  @Put(':id')
  async updateUserInfo(@Param('id') id: number, @Body() user: User): Promise<any> {
    return this.usersService.updateUserInfo(id, user);
  }

  @Delete(':id')
  async deleteUserInfo(@Param('id') id: number): Promise<any> {
    const user = await this.usersService.readUserInfo(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return this.usersService.deleteUserInfo(id);
  }
}