const Istate={
    name:"App Name"
}
export default (state=Istate,action)=>{
    console.log(action.type+action.data);
    switch (action.type) {
        case "setdata":
            return({
                ...state,
                name:action.data
            })
            
            break;
    
        default:
            break;
    }
    return state;
}