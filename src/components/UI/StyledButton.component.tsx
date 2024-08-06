import { Stack, Typography } from '@mui/material';
import { DipButton } from 'dipcore-react-lib';

interface Props {
  label?: string;
  buttonNumber?: string;
  disabled?: boolean;
}

export const StyledButton: React.FC<Props> = ({ label, buttonNumber, disabled = false }) => {
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
      {buttonNumber && <Typography>{buttonNumber}</Typography>}
    </Stack>
  );
};
