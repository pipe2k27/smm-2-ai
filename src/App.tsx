import { Container } from '@mui/material';
import { Header } from './components/layout/Header.component';
import './App.css';
import { LoadingSpinner } from './components/UI';
import { SJ210000 } from './pages/index';

export const App = (): React.ReactElement => (
  <Container maxWidth={false} sx={{ maxWidth: '1024px' }} disableGutters>
    <Header />
    <LoadingSpinner />
    <SJ210000 />
  </Container>
);
