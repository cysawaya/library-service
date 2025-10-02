import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from '../../application/users/user.service';

@Module({
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}