import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import {reset} from '../actions/counter';

const Home = (props) => {
    const history = useHistory();
    const path = props.running ? "Stop" : "Start"

    useEffect(() => {
        props.reset();
    })

  const routeChange = () =>{ 
    console.log(path); 
    history.push(path);
  }
    return(
  <div>
    <h1>Home component</h1>
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
    reset: () => dispatch(reset())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Home);