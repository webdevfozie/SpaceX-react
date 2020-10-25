import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Features from './components/Features'
// import Details from './components/Details';
// import Calendar from './components/Calendar';
import Footer from './components/Footer'
import './style.css'

class App extends React.Component {
  state = {
    rocket: 'Falcon 1',
  }

  render() {
    return (
      <>
        <Header />
        <Main rocket={this.state.rocket} />
        <Features />
        <Footer />
      </>
    )
  }
}

export default App
