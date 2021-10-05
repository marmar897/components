import React from 'react'

class Mood extends React.Component{
    constructor() {
        super()

        //intialize some state variables in our constructor
        this.state = { mood: 'unknown'}
      }
    
  render() {
      console.log(this.state.mood)
      return (
          <div> 
              <h1> this is a message for our user</h1>
              <div> 
                  <button> 
                      Feeling Good! 😊
                  </button>
                  <button>
                      Feeling eh!    😒              </button>
              </div>
          </div>

      )
  }
}

export default Mood;