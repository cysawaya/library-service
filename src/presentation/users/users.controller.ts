import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserService } from '../../application/users/user.service';
import { User } from '../../domain/users/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UserService,
    @Inject('MAIL_SERVICE') private readonly mailClient: ClientProxy,
  ) {}

  @Post()
  async create(@Body() body: { name: string; email: string }) {
    const user = new User(uuidv4(), body.name, body.email);
    const created = this.userService.create(user);

    // Enviar evento para o Mail Service
    this.mailClient.emit('user_created', {
      name: created.name,
      email: created.email,
    });

    return created;
  }
}

