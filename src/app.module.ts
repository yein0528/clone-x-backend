import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FeedsModule } from './feeds/feeds.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '34.64.246.67',
      port: 3306,
      username: 'admin',
      password: 'Alex08205!',
      database: 'twitter',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsersModule,
    FeedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
