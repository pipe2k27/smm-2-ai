import { Stack } from '@mui/material';
import { FirstTable } from './elements/FirstTable';
import { SecondTable } from './elements/SecondTable';
import { PageContainer } from '@/components/layout/PageContainer';
import { Footer } from '@/components/page/SJ210000/Footer';

export const SJ210000 = (): React.ReactElement => (
  <>
    <PageContainer>
      <Stack alignItems="flex-start" width={952}>
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
    <Footer />
  </>
);
