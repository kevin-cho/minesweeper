import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Board from './components/Board';
import { useTheme } from './hooks/useTheme';

const ToggleButton = styled.button`
  position: absolute;
  top: 1px;
  right: 1px;
  background: none;
  border: none;
  cursor: pointer;

  > * {
    color: ${({ theme }) => theme.text};
    font-size: 3rem;
  }
`;

function App() {
  const [theme, toggleTheme, componentMounted] = useTheme();

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <ToggleButton onClick={toggleTheme}>
          <span className={theme === 'light' ? 'material-icons-outlined' : 'material-icons'}>
            dark_mode
          </span>
        </ToggleButton>
        <Board rows={10} cols={10} mineCount={10} />
      </>
    </ThemeProvider>
  );
}

export default App;
