export interface BinanceBody {
  asset: string;
  fiat: string;
  merchantCheck: boolean;
  page: number;
  payTypes: any[];
  rows: number;
  tradeType: string;
}
