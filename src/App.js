import './App.css';
import Header from './components/header';
import SubHeader from './components/subHeader';
import Sliders from './components/sliders';
import { ThemeProvider } from '@mui/material/styles';
import theme from './customThemes/themes';
import Footer from './components/footer';


const App = () => {
  return (

    <ThemeProvider theme={theme.mainTheme}>
      <Header />
      <SubHeader />
      <Sliders />
      <Footer />
    </ThemeProvider>

  );
}

export default App;
