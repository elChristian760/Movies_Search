import React, {Component } from 'react';
import './App.css';
import logo from './primary-green.svg';
// get our fontawesome imports
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
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
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3">
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-movie-search" type="text" placeholder="Training Day" />
            </div>
          </div>
        </form>
      </div>
      <div className="p-2 bg-gray-200">
        <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg">
          <div className="bg-gray-900 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src="https://www.placecage.com/600/600" alt="Avatar of Jonathan Reinink" />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 bg-gray-200">
        <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg">
          <div className="bg-gray-900 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src="https://www.placecage.com/600/600" alt="Avatar of Jonathan Reinink" />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default App;
