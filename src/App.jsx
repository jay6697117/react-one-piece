import Parent from './components/Parent';
import Child from './components/Child';
import './assets/style/App.css';

function App() {
  const obj = { name: '奶茶', age: 20 };
  const users = ['章三', '李四', '王五'];
  return (
    <div className='App'>
      <Parent>
        <Child {...obj} />
      </Parent>
      <div style={{ padding: '10px', backgroundColor: '#ccc' }}>
        {users.map((item, index) => (
          <div style={{ margin: '10px 0', backgroundColor: 'green' }} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
