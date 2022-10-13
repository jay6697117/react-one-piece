// import React, { Component } from 'react';
import './index.css';

// export default class Child extends Component {
//   render() {
//     console.log('Child render this.props', this.props);
//     const { name, age } = this.props;
//     return (
//       <div className='child'>
//         <h2>我是Child</h2>
//         <h3>{name}</h3>
//         <h4>{age}</h4>
//       </div>
//     );
//   }
// }

// export default function Child(props) {
export default function Child({ name, age }) {
  // console.log('Child props', props);
  // const { name, age } = props;
  console.log('Child props:', name, age);
  return (
    <div className='child'>
      <h2>我是Child</h2>
      <h3>{name}</h3>
      <h4>{age}</h4>
    </div>
  );
}
