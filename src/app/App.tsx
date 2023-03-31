import './App.css';
import useChangeTitle from '../hooks/useChangeTitle';
import Router from '../router/Router';

const App = () => {
  useChangeTitle();
  return (
    <main className="App">
      <Router />
    </main>
  );
};

export default App;
