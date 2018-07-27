//mang default
const arListDefault = [
    {id:1, topic: 'di uong ca phe', content: 'uong ca phe cung voi nguoi yeu', done: false},
    {id:2, topic: 'di xem phim', content: 'xem phim cung voi nguoi yeu', done: true},
    {id:3, topic: 'di choi', content: 'di dao cung voi nguoi yeu', done: true},
    {id:4, topic: 'di bui', content: 'phuot cung voi nguoi yeu', done: false},
]
//reduce

const Listreducer = (state = arListDefault, action) => {
    console.log('inside listredicer: ', state, action);
    
    if (action.type === 'setdone') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, done: !e.done };
        });
    }
    if(action.type === 'add'){
        return [{
            id: state.length +1,
            topic: action.topic,
            content: action.content,
            done: false
        }].concat(state);
    }
    return state;
}
export default Listreducer;