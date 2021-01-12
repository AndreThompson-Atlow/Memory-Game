import './index.css';
import PlayArea from './components/PlayArea'
import {GlobalProvider} from './components/GlobalContext';

function App() {
  let seed = Math.random();
  return (
    <div className="App">
      <GlobalProvider>
        <PlayArea seed={seed}/>
      </GlobalProvider>
    </div>
  );
}

export default App;
