import React, { useState } from 'react';

// class Hook extends React.Component {
//     render(i) {
//         return (<div>mine</div>)
//     }
// }

// export default Hook

function Hook() {
    // 声明一个叫 “count” 的 state 变量。
    const [count, setCount] = useState(0);

    const aaa = useState(false)
    console.log(aaa)

    
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  export default Hook