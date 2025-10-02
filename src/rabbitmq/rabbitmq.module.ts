import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MAIL_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'mail_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  exports: ['MAIL_SERVICE'],
})
export class RabbitMQModule {}