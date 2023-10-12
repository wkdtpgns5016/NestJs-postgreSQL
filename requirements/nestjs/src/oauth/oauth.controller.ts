import { Controller, Get, Param, Query } from '@nestjs/common';
import { OauthService } from './oauth.service';
import { AxiosResponse } from 'axios'

@Controller('oauth')
export class OauthController {
    constructor(private readonly oauthService : OauthService) {};

    @Get()
    getCode(@Query('code') code : string) : Promise<string> {
        console.log(code);
        return this.oauthService.getAccessToken(code);
    }
}
