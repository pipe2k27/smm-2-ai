import { Container } from '@mui/material';
import { Header } from './components/common/modules/Header.component';
import { NewPage } from './components/pages/newPage/NewPage';
import './App.css';

export const App = (): React.ReactElement => (
  <Container maxWidth={false} sx={{ maxWidth: '1024px' }} disableGutters>
    <Header />
    <NewPage />
  </Container>
);
