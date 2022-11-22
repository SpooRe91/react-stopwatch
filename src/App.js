import './css/style.css'
import './css/ResetCSS.css'

import { StopWatchComp } from "./components/Stopwatch/stopwatchComp";
import { TimerComponent } from './components/Timer/timerComponent';

function App() {

  return (
    <main>
      <StopWatchComp />
      <TimerComponent />
    </main>
  );
}

export default App;
