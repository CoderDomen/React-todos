import React, { Component } from 'react'

class parnet extends Component {
 render(){
   console.log(this.props);
   
   return (
     <div>
       ...parent
       {this.props.children}
     </div>
   )
 }
}

export default parnet