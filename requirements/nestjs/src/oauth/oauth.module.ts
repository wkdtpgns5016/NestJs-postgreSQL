import { Module } from '@nestjs/common';
import { OauthController } from './oauth.controller';
import { OauthService } from './oauth.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { OauthGuard } from './oauth.guard'
import { OAuth2Strategy } from './oauth.strategy'

@Module({
    imports: [HttpModule,],
    controllers: [OauthController],
    providers: [OauthService, OauthGuard, OAuth2Strategy]
})
export class OauthModule {}
