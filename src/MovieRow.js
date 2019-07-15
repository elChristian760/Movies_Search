import React from 'react'

class MovieRow extends React.Component {
    viewMovie(){
        //console.log("Trying to view movie")
        //console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render(){
        return <div key={this.props.movie.id} className="md:flex border-solid border-2 border-black-300 py-3">
        <div className="md:flex-shrink-0">
            <img className="md:w-56 " src={this.props.movie.poster_src} alt={this.props.movie.title} />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
            <a href="/" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{this.props.movie.title}</a>
            <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900">Rating: {this.props.movie.vote_average}</p>
            <p className="uppercase tracking-wide text-sm text-teal-600 font-bold py-1">{this.props.movie.genre_ids}</p>
            <p className="uppercase tracking-wide text-sm text-teal-600 font-bold py-1">{this.props.movie.release_date}</p>
            <p className="py-2 mt-2 text-gray-600">{this.props.movie.overview}</p>
            <input type="button" value="View" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.viewMovie.bind(this)} />
        </div>
      </div>
    }
}

export default MovieRow