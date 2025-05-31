export interface BinanceResponse {
  code: string;
  message: null;
  messageDetail: null;
  data: Datum[];
  total: number;
  success: boolean;
}

export interface Datum {
  adv: Adv;
  advertiser: Advertiser;
  privilegeDesc: null;
  privilegeType: null;
}

export interface Adv {
  advNo: string;
  classify: Classify;
  tradeType: TradeType;
  asset: Asset;
  fiatUnit: FiatUnit;
  advStatus: null;
  priceType: null;
  priceFloatingRatio: null;
  rateFloatingRatio: null;
  currencyRate: null;
  price: string;
  initAmount: null;
  surplusAmount: string;
  tradableQuantity: string;
  amountAfterEditing: null;
  maxSingleTransAmount: string;
  minSingleTransAmount: string;
  buyerKycLimit: null;
  buyerRegDaysLimit: null;
  buyerBtcPositionLimit: null;
  remarks: null;
  autoReplyMsg: null;
  payTimeLimit: number;
  tradeMethods: { [key: string]: null | string }[];
  userTradeCountFilterTime: null;
  userBuyTradeCountMin: null;
  userBuyTradeCountMax: null;
  userSellTradeCountMin: null;
  userSellTradeCountMax: null;
  userAllTradeCountMin: null;
  userAllTradeCountMax: null;
  userTradeCompleteRateFilterTime: null;
  userTradeCompleteCountMin: null;
  userTradeCompleteRateMin: null;
  userTradeVolumeFilterTime: null;
  userTradeType: null;
  userTradeVolumeMin: null;
  userTradeVolumeMax: null;
  userTradeVolumeAsset: null;
  createTime: null;
  advUpdateTime: null;
  fiatVo: null;
  assetVo: null;
  advVisibleRet: null;
  takerAdditionalKycRequired: number;
  minFiatAmountForAdditionalKyc: null;
  inventoryType: null;
  offlineReason: null;
  assetLogo: null;
  assetScale: number;
  fiatScale: number;
  priceScale: number;
  fiatSymbol: FiatSymbol;
  isTradable: boolean;
  dynamicMaxSingleTransAmount: string;
  minSingleTransQuantity: string;
  maxSingleTransQuantity: string;
  dynamicMaxSingleTransQuantity: string;
  commissionRate: string;
  takerCommissionRate: null;
  minTakerFee: null;
  tradeMethodCommissionRates: null;
  launchCountry: null;
  abnormalStatusList: null;
  closeReason: null;
  storeInformation: null;
  allowTradeMerchant: null;
  adTradeInstructionTagInfoRets: null;
  isSafePayment: boolean;
  adAdditionalKycVerifyItems: null;
  isStarTraderAdditionalKycExclusion: null;
  isStarTraderCounterpartyConditionsExclusion: null;
  nonTradableRegions: null;
  invisibleType: null;
  invisibleTitle: null;
  invisibleReason: null;
}

export enum Asset {
  Usdt = 'USDT',
}

export enum Classify {
  Mass = 'mass',
}

export enum FiatSymbol {
  Bs = 'Bs',
}

export enum FiatUnit {
  Ves = 'VES',
}

export enum TradeType {
  Sell = 'SELL',
}

export interface Advertiser {
  userNo: string;
  realName: null;
  nickName: string;
  margin: null;
  marginUnit: null;
  orderCount: null;
  monthOrderCount: number;
  monthFinishRate: number;
  positiveRate: number;
  advConfirmTime: null;
  email: null;
  registrationTime: null;
  mobile: null;
  userType: UserType;
  tagIconUrls: any[];
  userGrade: number;
  userIdentity: string;
  proMerchant: null;
  badges: null;
  vipLevel: null;
  isBlocked: boolean;
  activeTimeInSecond: number;
}

export enum UserType {
  User = 'user',
}
