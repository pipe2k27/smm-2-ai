import { Stack, useTheme } from '@mui/material';
import { DipButton } from 'dipcore-react-lib';

export const Footer = (): React.ReactElement => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="10px 20px"
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Stack direction="row" gap={1}>
        <DipButton label="終了" />
        <DipButton label="クリア" />
        <DipButton label="Excel" />
      </Stack>
    </Stack>
  );
};
