import React from 'react';
import './App.css';

import {connect} from 'react-redux';
import {setData} from './store/action'
import { nativeTouchData } from 'react-dom/test-utils';
class App extends React.Component{
  render(){
    console.log(this.props);
    return(
    <div>
<h1> Welcome back</h1>
<button onClick={()=>this.props.sdata("data through function")}>hello</button>
    </div>
    )
  }
}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    appname: state.app.name,
    name: state.auth.name,
    email: state.auth.email
    
  }
}
const mapDispatchToProps = (dispatch)=>({
  sdata: (data)=>dispatch(setData(data))
})
export default connect(mapStateToProps,mapDispatchToProps) (App);
