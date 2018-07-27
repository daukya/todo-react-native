const Statusreduce = (state = 'todo',action) =>{
    if(action.type === 'todo') return 'todo';
    if(action.type === 'done') return 'done';
    return state;
}
export default Statusreduce