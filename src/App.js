import './App.css';
import Background from './components/Background/Background';
import Result from './components/Result/Result';
import Search from './components/Search/Search';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <section className='uygulama'>
        <Background />
        <div id='baslik'> Weather </div>
        <Search />
        <Result />
      </section>
    </WeatherProvider>
  );
}

export default App;
