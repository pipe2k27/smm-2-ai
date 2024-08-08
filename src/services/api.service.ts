/* eslint-disable no-console */
import type {
  CheckDocumentInfoRes,
  RegistrationAndDocumentInfoReq,
  RegistrationResBody,
} from '@/utils/types';

export const postRegistration = (
  params: RegistrationAndDocumentInfoReq
): Promise<RegistrationResBody> => {
  console.log('params post Registration', params);
  return new Promise((resolve) => {
    setTimeout(() => {
      const res: RegistrationResBody = {
        code: '0000',
        message: {
          messageId: 'SMM0001',
          messageText: 'Successful',
          targetIds: null,
          attributes: null,
        },
        messageDetails: null,
        object: {
          resultCode: 0,
          statusInf: {
            messageInfCheck: {
              errFlg: 'aString',
              messageInf: {
                messageStr: 'aString',
              },
            },
          },
        },
      };

      resolve(res);
    }, 2000);
  });
};

export const postCheckDocumentInformation = (
  params: RegistrationAndDocumentInfoReq
): Promise<CheckDocumentInfoRes> => {
  console.log('params post CheckDocumentInformation', params);

  return new Promise((resolve) => {
    const res: CheckDocumentInfoRes = {
      resultCode: 1,
      statusInfCheck: {
        errFlg: 'aString',
        messageInf: {
          messageStr: 'aString',
        },
        focusList: ['aString', 'aString', 'aString'],
        messageInfCheck: {
          messageStr2: 'aString',
        },
      },
    };

    resolve(res);
  });
};
