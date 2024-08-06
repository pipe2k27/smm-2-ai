import { StyledButton } from '@/components/UI';
import { Stack, Typography, useTheme } from '@mui/material';

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
      <Stack direction="row" gap={1} width="100%">
        <StyledButton label="終了" buttonNumber="F1" />
        <StyledButton label="画面印刷" buttonNumber="F2" />
        <StyledButton label="強制入力" buttonNumber="F3" disabled />
        <StyledButton label="合計入力" buttonNumber="F4" />
        <StyledButton buttonNumber="F5" />
        <StyledButton label="確認" buttonNumber="F6" />
        <StyledButton label="登録" buttonNumber="F7" disabled />
        <StyledButton buttonNumber="F8" />
        <StyledButton buttonNumber="F9" />
        <StyledButton label="戻る" buttonNumber="F10" />
        <StyledButton buttonNumber="F11" />
        <StyledButton buttonNumber="F12" />
      </Stack>
    </Stack>
  );
};
