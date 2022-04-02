import './App.css';
import Header from './components/header/Header';
import PersonList from './components/personList/PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <PersonList />
      </main>
    </div>
  );
}

export default App;
