// Registration Endpoint

export type HeaderInf = {
  shoriKbn: string;
  nendoKbn: string;
  cardKbn: string;
  ukeMiseNo: string;
  kenshuYmd: string;
  bunruiCode: string;
  shohinKbn: string;
  denpyouNo: string;
  checkDigit: string;
  toriCode: string;
  genkaKinTotal: string;
  detailCount: string;
};

export type ShohinData = {
  gyoNo: string;
  riyuKbn: string;
  shohinCode: string;
  genkaSu: string;
  genTanka: string;
  shuseiKbn: string;
};

export type RegistrationAndDocumentInfoReq = {
  miseId: string;
  userId: string;
  reqFormId: string;
  onlineYmd: string;
  deviceId: string;
  headerInf: HeaderInf;
  data: ShohinData[];
};

export type Message = {
  messageId: string;
  messageText: string;
  targetIds: null;
  attributes: null;
};

export type StatusInf = {
  messageInfCheck: {
    errFlg: string;
    messageInf: {
      messageStr: string;
    };
  };
};

type StatusInfo = {
  resultCode: number;
  statusInf: StatusInf;
};

export type RegistrationResBody = {
  code: string;
  message: Message;
  messageDetails: null;
  object: StatusInfo;
};

// CheckDocumentInformation endpoint

export type StatusInfCheck = {
  errFlg: string;
  messageInf: {
    messageStr: string;
  };
  focusList: string[];
  messageInfCheck: {
    messageStr2: string;
  };
};

export type CheckDocumentInfoRes = {
  resultCode: number;
  statusInfCheck: StatusInfCheck;
};
