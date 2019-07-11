import React from 'react';
import './App.css';
import logo from './primary-green.svg';
// get our fontawesome imports
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} className="h-12 pr-5" alt="logo" /> 
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
      <form className="w-full block lg:items-center">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-movie-search" type="text" placeholder="Training Day" />
        </div>
      </div>
      </form>
    </div>
  );
}

export default App;
