import React from 'react'
import PasswordInput from './PasswordInput'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      q: '',
      currentView: 'list',
      currMovieIndex: null
    }
  }

  handleQueryChange = (e) => {
    this.setState({
      q: e.target.value
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    const url = `http://omdbapi.com/?s=${this.state.q}&apikey=2f6435d9`
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res.Search
      })
    })
  }

  renderMovieItem = (movie, index) => {
    return <p onClick={
      (e) => this.setState({
        currMovieIndex: e.target.dataset.index
      })
    } key={index} data-index={index}>{movie.Title}</p>
  }

  render() {
    const {movies, currMovieIndex} = this.state


    return <div>
      <h1>React Movies</h1>
      <form>
        <input type="text" onChange={this.handleQueryChange} />
        <button onClick={this.handleSearch}>Search</button>
      </form>
      {movies.map(this.renderMovieItem)}
      <span>{currMovieIndex != null && <img src={movies[currMovieIndex].Poster} /> } </span>
    </div>
  }

}
