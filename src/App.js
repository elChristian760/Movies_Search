import React from 'react';
import './App.css';
// get our fontawesome imports
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App bg-gray-600">
      <div class="flex mb-4">
        <div class="w-4/5 bg-gray-400 h-12"></div>
        <div class="w-1/5 bg-gray-500 h-12">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button<FontAwesomeIcon icon={faFilm} />
            </button>
          </div>
      </div>

    </div>
  );
}

export default App;
