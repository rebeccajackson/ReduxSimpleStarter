import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      term: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input 
        className="form-control"
        placeholder="Get a five-day forcast for your favourite cities"
        onChange={this.handleChange} 
        value={this.state.term}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
//connect is passing a null state to props