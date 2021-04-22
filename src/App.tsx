import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Board rows={5} cols={10} mineCount={10} />
    </div>
  );
}

export default App;
