import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from 'src/common/adapter/axios.adapter';
import { BinanceBody } from './interfaces/binance-body.interface';
import { ConfigService } from '@nestjs/config';
import { BinanceResponse } from './interfaces/binance-reponse.interface';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

@Injectable()
export class SeedService {
  constructor(
    private readonly http: AxiosAdapter,
    private readonly configService: ConfigService,
  ) {}

  async executeSeed() {
    const buyBody: BinanceBody = {
      asset: 'USDT',
      fiat: 'VES',
      merchantCheck: false,
      page: 1,
      payTypes: [],
      rows: 10,
      tradeType: 'BUY',
    };

    const sellBody: BinanceBody = {
      asset: 'USDT',
      fiat: 'VES',
      merchantCheck: false,
      page: 1,
      payTypes: [],
      rows: 10,
      tradeType: 'SELL',
    };

    const url: string = this.configService.get('URL')!;

    const buyData: BinanceResponse = await this.http.post(url, buyBody);
    const sellData: BinanceResponse = await this.http.post(url, sellBody);

    const buyPrices = buyData.data.map((d) => {
      return d.adv.price;
    });
    const sellPrices = sellData.data.map((d) => {
      const price = d.adv.price;
      return price;
    });

    const date = this.refreshDate();

    const averagePrice = parseFloat(
      (
        (this.averagePrice(buyPrices) + this.averagePrice(sellPrices)) /
        2
      ).toFixed(2),
    );

    return {
      averagePrice,
      date,
    };
  }

  private averagePrice(array: string[]) {
    if (array.length === 0) return 0;

    const sum = array
      .map((str) => parseFloat(str))
      .reduce((acc, val) => acc + val, 0);

    const average = sum / array.length;

    return parseFloat(average.toFixed(2));
  }

  private refreshDate() {
    const date = new Date();

    // const formatted = format(date, 'EEEE, dd/MM/yyyy hh:mm a', { locale: es });
    // const capitalized = formatted.charAt(0).toUpperCase() + formatted.slice(1);

    // console.log(capitalized);

    // return capitalized;

    return date.toISOString();
  }
}
