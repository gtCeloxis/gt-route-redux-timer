import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'
import { useHistory } from "react-router-dom";

let time = 1;

const Counter = (props) => {
//     const [time, setTime] = useState(0);
//     //console.log(time);
//     let timer = () => setInterval(() => {
//         setTime(time + 1)
//     }, 1000);

// useEffect(() => {
    
//         console.log(time);
//         timer();
    
//     return () => {
//         clearInterval(timer);
//       };
// })

let intervalId = useRef(null);

const history = useHistory();
    const path = props.running ? "Stop" : "Start";

  const routeChange = () =>{ 
    console.log(path);

    if(path === 'Start'){
        intervalId.current = setInterval(() => {
            console.log(time);
            props.increment();
        }, 1000);
        //props.increment();
    } else if(path === 'Stop'){
        console.log('stop timer');
        clearInterval(intervalId.current);
        props.decrement();
    }
    history.push(path);
  }

  

  console.log('props ' + props.running);


return(

  <div>
    <h1>Counter component</h1>
    Counter: {props.count + ' '}
    <button onClick={routeChange}>{path}</button>
  </div>
    )
}

const mapStateToProps = state => ({
  count: state.count.count,
  running: state.count.isRunning
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment(time)),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);