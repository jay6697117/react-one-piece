import './index.css';
export default function Child({ name, age }) {
  console.log('Child props:', name, age);
  return (
    <div className='child'>
      <h2>我是Child</h2>
      <h3>{name}</h3>
      <h4>{age}</h4>
    </div>
  );
}
