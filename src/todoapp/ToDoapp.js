import React, { Component } from 'react'
import './ToDo.css'
let skillInputs=[];
export default class ToDoapp extends Component {

    state={
    input:"",
    skillList:[],
     }

     

     handlechange=(event)=>{
        this.setState(
            {
                input:event.target.value})
    }
    onsubmit=()=>{
        console.log(this.state)
        let inputSkill=this.state.input;
        console.log("inputskill",inputSkill)
        skillInputs.push(inputSkill)
        console.log("skillinputs",skillInputs)
        this.setState(
            {
                skillList:skillInputs,
                input:" "
            }
        )

    }

    removeItem=(index)=>{
        let value=this.state.skillList[index];
        let spliced=this.state.skillList.splice(index,1);
        console.log(value,spliced)
        this.setState({
            skillList:this.state.skillList
        })
        }

editItem = (index) => {
  const newValue = prompt("Edit the task:", this.state.skillList[index]);
  if (newValue !== null) {
    skillInputs[index] = newValue;                 // update global array
    this.setState({ skillList: skillInputs });    // update state
  }
}


    render(){
    return (
      <div>
        <input type="text"   value={this.state.input}   onChange={this.handlechange} /> 
        <button onClick={this.onsubmit}>ADDTASK</button>

<ul>
  {this.state.skillList.map((item, index) => (
    <li key={index}>
      
      <span>{item}</span>
      <div>
        <button onClick={() => this.editItem(index)}>Edit</button>
        <button onClick={() => this.removeItem(index)}>Delete</button>
      </div>
    </li>
  ))}
</ul>

      </div>
    )
}
}