import React, {Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import logo from './primary-green.svg';
// get our fontawesome imports
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    

    // const movies = [
    //   {id: 0, poster_src: "https://www.placecage.com/500/500", title: "Training Day", overview: "Some text to explain plot", genres: "Drama, Comedy, Action"},
    //   {id: 1, poster_src: "https://www.placecage.com/500/500", title: "Not Training Day", overview: "Some more text to explain plot", genres: "Drama, Comedy, Action"}
    // ]
    // var movieRows = []
    // movies.forEach((movie) => {
    //   const movieRow = <MovieRow movie={movie}/>
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}

    this.performSearch()
  }
  performSearch() {
    console.log("Perform search using mobieDB")
    const urlString = "https://api.themoviedb.org/3/search/movie?query=training&api_key=9c240d94eabedb87dd2927a410668cb0&language=en-US"
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched Data successfully")

      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch Data")
      }

    })
  }
  render(){
    return (
    <div className="App">
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/">
            <img src={logo} className="h-12 pr-5" alt="logo" />
          </a>
          <span className="font-semibold text-xl tracking-tight font-bold">Movie Search</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-grey-300 hover:text-teal-400 hover:border-teal-400">
            <FontAwesomeIcon icon={faFilm} />
          </button>
        </div>
        <div className="w-full block lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow lg:text-right">

          </div>
        </div>
      </nav>
      <div className="p-2 bg-gray-700">
        <form className="w-full block lg:items-center lg:w-auto">
          <div className="flex flex-wrap mx-1">
            <div className="w-full px-1">
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-movie-search" type="text" placeholder="Training Day" />
            </div>
          </div>
        </form>
      </div>
      {this.state.rows}
    </div>
    );
  }
}
export default App;
