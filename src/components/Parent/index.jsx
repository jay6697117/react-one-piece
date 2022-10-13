import './index.css';

export default function Parent({ children }) {
  return (
    <div className='parent'>
      <h2 style={{ borderBottom: '2px solid green', padding: '10px 0', marginBottom: '10px' }}> 我是Parent</h2>
      {children}
    </div>
  );
}
