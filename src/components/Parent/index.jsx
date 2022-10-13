// import React, { Component } from 'react';
import './index.css';

// export default class Parent extends Component {
//   render() {
//     console.log('Parent render this.props:', this.props);
//     const { children } = this.props;
//     return (
//       <div className='parent'>
//         <h2 style={{ borderBottom: '2px solid green', padding: '10px 0', marginBottom: '10px' }}> 我是Parent</h2>
//         {children}
//       </div>
//     );
//   }
// }

// export default function Parent(props) {
export default function Parent({ children }) {
  // console.log('Parent props:', props);
  // const { children } = props;
  console.log(children);
  return (
    <div className='parent'>
      <h2 style={{ borderBottom: '2px solid green', padding: '10px 0', marginBottom: '10px' }}> 我是Parent</h2>
      {children}
    </div>
  );
}
