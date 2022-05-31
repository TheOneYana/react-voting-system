import data from './data';
//without brackets - default(exports only one), with - not default
import React from 'react';
import './App.css';

class App extends React.Component{
  constructor() {
    super()
    // current state is an array of three objects containing team info
    this.state = {teams:data}
  }
  // function that adds one vote after button is clicked
  addOne(index) {
    const newState = [...this.state.teams]
    newState[index].votes +=1
    this.setState({teams:newState})
  
  }
  //I'd like to add "the winning team is:" and have the name of the team with larger number of votes there
  render() {
    const {teams} = this.state
    console.log(teams)
    return (
       <div className="App">
       <header className="App-header">
         <h1> The winning team is : {teams.name}</h1>
         <div className='container'>
           {

             //still struggling to understand .map() method
             teams.map((team, index) => {
               return (
                  <div className='container__image' key ={team.name}>
                    <img src ={team.img} alt={team.name} />
                    <h2>{team.name}</h2>
                    <button onClick = {()=>this.addOne(index)}>Vote</button>
                    <h3>Vote Count: {team.votes}</h3>
                  </div>

               )
             })
           }
         </div>
       </header>
       </div>
  )
  }
}


export default App;


