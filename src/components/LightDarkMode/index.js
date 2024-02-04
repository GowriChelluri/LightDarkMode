import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode'
    const modeText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`box-container ${modeClass}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.onChangeMode}>
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
