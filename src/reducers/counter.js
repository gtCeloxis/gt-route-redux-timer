const initialState = {
    count: 0,
    isRunning: false
}

const counterReducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT') {
        return {
            count: state.count + 1,
            isRunning: true
        }
    }
    if(action.type === 'DECREMENT') {
        return {
            count: state.count,
            isRunning: action.payload
        }
    }
    if(action.type === 'RESET') {
        return {
            count: 0,
            isRunning: action.payload
        }
    }
    
    return state
}
  
  export default counterReducer