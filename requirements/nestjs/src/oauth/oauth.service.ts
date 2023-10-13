import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs'

@Injectable()
export class OauthService {
    constructor(private httpService: HttpService) {};
    private readonly DATA_URL = '';
    private readonly UID = '';
    private readonly SECRET = '';
    private readonly REDIRECT_URL = '';
    private readonly GRANT_TYPE = '';

    async getAccessToken(code : string) : Promise<string> {
        const body = {'grant_type': this.GRANT_TYPE,
                    'code': code,
                    'client_id': this.UID,
                    'client_secret': this.SECRET,
                    'redirect_uri': this.REDIRECT_URL};
        const products = await this.httpService.post(this.DATA_URL, body);
        return (await firstValueFrom(products)).data.access_token;
    }
}
