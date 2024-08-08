import { Container } from '@mui/material';
import { useAtom } from 'jotai';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Header, LoadingSpinner, StyledModal } from './components';
import { SJ210000Copy } from './pages/SJ210000/SJ210000.page-copy';
import { ModalAtom } from './store';

const queryClient = new QueryClient();

export const App = (): React.ReactElement => {
  const [modalState, setModalState] = useAtom(ModalAtom);

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth={false} sx={{ maxWidth: '1024px' }} disableGutters>
        <Header />
        <LoadingSpinner />
        {/* <SJ210000 /> */}
        <SJ210000Copy />
        <StyledModal
          title={modalState.title}
          text={modalState.text}
          firstButtonLabel={modalState.fistButtonLabel}
          isOpen={modalState.isOpen}
          variant={modalState.variant}
          setIsOpen={() => setModalState((prev) => ({ ...prev, isOpen: !prev.isOpen }))}
          onSubmitFirstButton={modalState.onSubmitFirstButton}
        />
      </Container>
    </QueryClientProvider>
  );
};
