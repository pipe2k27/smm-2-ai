import { Stack, Typography, useTheme } from '@mui/material';
import { DipButton } from 'dipcore-react-lib';

interface Props {
  label?: string;
  buttonNumber: string;
  disabled?: boolean;
}

const FooterButton: React.FC<Props> = ({ label, buttonNumber, disabled = false }) => {
  return (
    <Stack alignItems="center" justifyContent="center" flex={1} gap={1}>
      {label ? (
        <DipButton
          label={label}
          color="inherit"
          sx={{ borderRadius: '1px', width: '76px', height: '36px' }}
          disabled={disabled}
        />
      ) : (
        <Stack sx={{ width: '76px', height: '36px' }} />
      )}
      <Typography>{buttonNumber}</Typography>
    </Stack>
  );
};

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
        <FooterButton label="終了" buttonNumber="F1" />
        <FooterButton label="画面印刷" buttonNumber="F2" />
        <FooterButton label="強制入力" buttonNumber="F3" disabled />
        <FooterButton label="合計入力" buttonNumber="F4" />
        <FooterButton buttonNumber="F5" />
        <FooterButton label="確認" buttonNumber="F6" />
        <FooterButton label="登録" buttonNumber="F7" disabled />
        <FooterButton buttonNumber="F8" />
        <FooterButton buttonNumber="F9" />
        <FooterButton label="戻る" buttonNumber="F10" />
        <FooterButton buttonNumber="F11" />
        <FooterButton buttonNumber="F12" />
      </Stack>
    </Stack>
  );
};
