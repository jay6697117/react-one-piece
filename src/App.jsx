import Parent from './components/Parent';
import Child from './components/Child';
import './assets/style/App.css';

function App() {
  const obj = { name: '奶茶', age: 20 };
  return (
    <div className='App'>
      <Parent>
        <Child {...obj} />
      </Parent>
    </div>
  );
}

export default App;
