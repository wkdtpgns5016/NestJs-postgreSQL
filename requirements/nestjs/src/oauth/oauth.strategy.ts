import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';

@Injectable()
export class OAuth2Strategy extends PassportStrategy(Strategy, 'oauth') {
    constructor() {
        super({
            authorizationURL: '',
            tokenURL: '',
            clientID: '',
            clientSecret: '',
            callbackURL: '',
        });
    }

    async validate(accessToken: string, refreshToken: string) {
        try {
          console.log('accessToken: ', accessToken);
          console.log('refreshToken: ', refreshToken);
          return accessToken;
        } catch (error) {
          console.log(error);
        }
    }
}