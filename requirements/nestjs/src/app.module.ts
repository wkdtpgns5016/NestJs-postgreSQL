import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { OauthController } from './oauth/oauth.controller';
import { OauthService } from './oauth/oauth.service';
import { OauthModule } from './oauth/oauth.module';
import { HttpModule, HttpService } from '@nestjs/axios';


@Module({
  imports: [
    // ConfigModule.forRoot(),
    // UsersModule,
    // TypeOrmModule.forRoot({
    //   type: process.env.DB_TYPE as any,
    //   host: process.env.PG_HOST,
    //   port: parseInt(process.env.PG_PORT),
    //   username: process.env.PG_USER,
    //   password: process.env.PG_PASSWORD,
    //   database: process.env.PG_DB,
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
  OauthModule, HttpModule],
  controllers: [AppController, OauthController],
  providers: [AppService, OauthService],
})
export class AppModule {}