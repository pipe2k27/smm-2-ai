import { Box, CircularProgress, Stack } from '@mui/material';
import { useAtom } from 'jotai';
import { isLoading } from '@/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const LoadingSpinner = () => {
  const [loading] = useAtom(isLoading);

  return (
    <>
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1300,
          }}
        >
          <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress size="100px" color="warning" />
          </Stack>
        </Box>
      )}
    </>
  );
};
