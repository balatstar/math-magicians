import Calculator from './components/Calculator';
import QuoteDisplay from './components/Quote';

function App() {
  return (
    <div className="App">
      <Calculator />
      <QuoteDisplay category="education" />
    </div>
  );
}

export default App;
