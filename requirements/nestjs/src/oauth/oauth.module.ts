import { Module } from '@nestjs/common';
import { OauthController } from './oauth.controller';
import { OauthService } from './oauth.service';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [OauthController],
    providers: [OauthService, ]
})
export class OauthModule {}
