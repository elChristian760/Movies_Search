import React from 'react'

class MovieRow extends React.Component {
    render(){
        return <div key={this.props.movie.id} className="md:flex border-solid border-2 border-black-300 py-3">
        <div className="md:flex-shrink-0">
            <img className="md:w-56 " src={this.props.movie.poster_src} alt={this.props.movie.title} />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
            <a href="/" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{this.props.movie.title}</a>
            <p className="uppercase tracking-wide text-sm text-teal-600 font-bold py-1">{this.props.movie.genres}</p>
            <p className="mt-2 text-gray-600">{this.props.movie.overview}</p>
            <div className="flex items-cente py-10">
                <img className="w-10 h-10 rounded-full mr-4" src={this.props.movie.poster_src} alt={this.props.movie.title} />
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                </div>
            </div>
        </div>
      </div>
    }
}

export default MovieRow