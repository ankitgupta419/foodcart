import React, { Component } from 'react'
import './App.css'
import Card from './components/card'
import {dummyData} from './components/data'
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      popUp: false,
      cardImg: null,
      cardData: []
    };
    this.clickCard = this.clickCard.bind(this);
    this.cancelPopup = this.cancelPopup.bind(this);

  }
  componentDidMount() {
    this.setState({
      cardData: dummyData
    })
  }
  clickCard(img) {
    this.setState({
      popUp: true,
      cardImg: img
    })
  }
  cancelPopup() {
    this.setState({
      popUp: false,
      cardImg: null
    })
  }
  render () {
    let popUpContent = <div className="popUpcontainer">
      <div className="popUpContent">
        <div className="popupClose" onClick={() => this.cancelPopup()}>X</div>
        <div className="popUpImage"><img src={this.state.cardImg} /></div>
      </div>
    </div>
    return (
      <div className='App'>
        {this.state.popUp ? popUpContent : null}
        <div className="container">
          <Card cardData={this.state.cardData} clickCard={this.clickCard} />
        </div>
      </div>
    )
  }
}

export default App
