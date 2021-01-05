const setData=(data)=>{
    return (dispatch)=>{
        dispatch({type:"setdata",data:data})
    }
   
}
export {
    setData
}