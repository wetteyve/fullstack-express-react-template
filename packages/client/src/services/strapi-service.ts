import { AxiosBaseService } from "./axios-base.service";

export class StrapiService extends AxiosBaseService {
  constructor() {
    super('https://content.uht-herisau.ch/');
  }

  public async getLandingPageData(): Promise<any> {
    return await this.instance.get('/landing-page').then(this.responseBody).catch(this.errorHandling);
  }
}
