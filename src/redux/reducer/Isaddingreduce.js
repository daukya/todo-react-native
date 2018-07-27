const Isaddingreduce = (state=false, action) => {
    if(action.type === 'hienForm') return !state;
    return state;
}
export default Isaddingreduce;