import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async readUserList(): Promise<User[]> {
    return this.userRepository.find();
  }

  async readUserInfo(id: number): Promise<User> {
    return this.userRepository.readUserInfo({ where: { id } });
  }

  async createUserInfo(user: Partial<User>): Promise<User> {
    const newuser = this.userRepository.createUserInfo(user);
    return this.userRepository.save(newuser);
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}