import { Container } from '@mui/material';
import { Header } from './components/layout/Header.component';
import './App.css';
import { SJ210000 } from './pages/index';

export const App = (): React.ReactElement => (
  <Container maxWidth={false} sx={{ maxWidth: '1024px' }} disableGutters>
    <Header />
    <SJ210000 />
  </Container>
);
