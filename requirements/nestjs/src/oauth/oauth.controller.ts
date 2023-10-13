import { Controller, Get, Param, Query, Request, UseGuards } from '@nestjs/common';
import { OauthService } from './oauth.service';
import { AxiosResponse } from 'axios'
import { OauthGuard } from './oauth.guard';

@Controller('oauth')
export class OauthController {
    constructor(private readonly oauthService : OauthService) {};

    @Get()
    getCode(@Query('code') code : string) : Promise<string> {
        console.log(code);
        return this.oauthService.getAccessToken(code);
    }

    @UseGuards(OauthGuard)
    @Get('token')
    async getAccessToken(@Request() req) {
        return 'success';
    }
}
