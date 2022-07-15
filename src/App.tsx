import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './assets/ThemeProvider';
import { GlobalStyle } from './assets/styles';
import { Home, About, Contact, Organizations } from './pages';
import { Pages } from './constants/routes';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={Pages.About} element={<About />} />
          <Route path={Pages.Contact} element={<Contact />} />
          <Route path={Pages.Organizations} element={<Organizations />} />
        </Routes>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
