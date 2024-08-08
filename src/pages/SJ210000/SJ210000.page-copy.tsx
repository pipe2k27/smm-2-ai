/* eslint-disable no-console */
import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { FirstTable } from './elements/FirstTable.component';
import { SecondTable } from './elements/SecondTable.component';
import { ButtonList } from '@/components';
import { PageContainer } from '@/components/layout/PageContainer.component';
import { LoadingSpinner } from '@/components/UI';
import { useApiDispatch } from '@/hooks/useApiDispatch.hook';
import { postRegistration } from '@/services/api.service';
import type { RegistrationAndDocumentInfoReq, RegistrationResBody } from '@/utils/types';

export const SJ210000Copy: React.FC = () => {
  const { apiDispatch } = useApiDispatch<RegistrationAndDocumentInfoReq, RegistrationResBody>({
    apiFunction: postRegistration,
  });

  const { error, data, isLoading, mutate } = useMutation({
    mutationFn: apiDispatch,
    mutationKey: 'apiDispatch',
  });

  const handleButtonClick = (): void =>
    mutate({
      miseId: '',
      userId: '',
      reqFormId: '',
      onlineYmd: '',
      deviceId: '',
      headerInf: {
        shoriKbn: '',
        nendoKbn: '',
        cardKbn: '',
        ukeMiseNo: '',
        kenshuYmd: '',
        bunruiCode: '',
        shohinKbn: '',
        denpyouNo: '',
        checkDigit: '',
        toriCode: '',
        genkaKinTotal: '',
        detailCount: '',
      },
      data: [],
    });

  useEffect(() => {
    if (!isLoading) {
      console.log('data', data);
    }

    console.log(isLoading, 'loading');
    if (error) console.log('error', error);
  }, [isLoading, data, error]);

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <PageContainer>
        <Stack alignItems="flex-start" width={952}>
          <button type="button" onClick={() => handleButtonClick()}>
            CLICK ME
          </button>
          <FirstTable />
          <SecondTable />
          <Stack
            padding={1}
            bgcolor="#aaddff"
            border="1px solid rgba(224, 224, 224, 1)"
            width={100}
            alignItems="center"
            alignSelf="flex-end"
          >
            原価金額
          </Stack>
          <Stack alignSelf="flex-end">
            <Stack direction="row">
              <Stack
                padding={1}
                bgcolor="#aaddff"
                border="1px solid rgba(224, 224, 224, 1)"
                width={80}
                alignItems="center"
              >
                合計入力
              </Stack>
              <Stack
                padding={1}
                bgcolor="#fff"
                width={100}
                alignItems="center"
                border="1px solid rgba(224, 224, 224, 1)"
              >
                99.999.999
              </Stack>
            </Stack>
            <Stack direction="row">
              <Stack
                padding={1}
                bgcolor="#aaddff"
                border="1px solid rgba(224, 224, 224, 1)"
                width={80}
                alignItems="center"
              >
                差額
              </Stack>
              <Stack
                padding={1}
                bgcolor="#fff"
                width={100}
                alignItems="center"
                border="1px solid rgba(224, 224, 224, 1)"
              >
                99
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </PageContainer>
      <Box mt={2}>
        <ButtonList />
      </Box>
    </>
  );
};
