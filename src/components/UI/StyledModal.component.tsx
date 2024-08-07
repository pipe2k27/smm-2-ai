import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import HelpIcon from '@mui/icons-material/Help';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { DipButton, DipModal } from 'dipcore-react-lib';

type Props = {
  title: string;
  text: string;
  firstButtonLabel: string;
  secondButtonLabel?: string;
  isOpen: boolean;
  variant: 'error' | 'info';
  setIsOpen: (isOpen: boolean) => void;
  onSubmitFirstButton: () => void;
  onSubmitSecondButton?: () => void;
};

export const StyledModal: React.FC<Props> = ({
  title,
  text,
  firstButtonLabel,
  secondButtonLabel,
  isOpen,
  variant,
  setIsOpen,
  onSubmitFirstButton,
  onSubmitSecondButton,
}) => {
  if (!isOpen) return null;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClose = () => setIsOpen(false);

  return (
    <DipModal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          mb={1}
          p={2}
          border="1px solid"
          borderColor="divider"
        >
          <Typography id="modal-title" variant="h6" component="h2" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" p={4}>
          {variant === 'error' && <ErrorIcon sx={{ fontSize: 40, color: 'red' }} />}
          {variant === 'info' && <HelpIcon sx={{ fontSize: 40, color: 'blue' }} />}
          <Typography id="modal-description" fontSize={20}>
            {text}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-end"
          p={2}
          border="1px solid"
          borderColor="divider"
          gap={2}
        >
          {firstButtonLabel && (
            <DipButton
              variant="contained"
              color="primary"
              label={firstButtonLabel}
              onClick={() => {
                onSubmitFirstButton();
                handleClose();
              }}
            />
          )}

          {secondButtonLabel && (
            <DipButton
              variant="contained"
              color="inherit"
              label={secondButtonLabel}
              onClick={() => {
                if (onSubmitSecondButton) {
                  onSubmitSecondButton();
                }
                handleClose();
              }}
            />
          )}
        </Stack>
      </Box>
    </DipModal>
  );
};
