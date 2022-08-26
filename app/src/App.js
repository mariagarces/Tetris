import './App.css';
import Tetris from './components/Tetris';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1 {
    font-family: 'Dangrek', cursive;
  }
  p {
    font-family: 'JetBrains Mono', monospace;
  }
  button {
    font-family: 'Dangrek', cursive;
  }
`

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Tetris />
    </div>
  )
}

export default App;
