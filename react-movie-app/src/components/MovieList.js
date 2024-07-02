import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    const movieListStyle = {
        // Hide scroll bars but allow scrolling
        overflow: 'auto',
        scrollbarWidth: 'none',  // Firefox
        '-ms-overflow-style': 'none',  // IE and Edge

        // Optional: Add padding or margin to adjust spacing
        padding: '10px',
    };

    return (
        <div className="row" style={movieListStyle}>
            {props.movies.map((movie, index) => (
                <div key={index} className='col-10 col-sm-6 col-md-4 col-lg-2 image-container m-3'>
                    <img src={movie.Poster} alt='movie' className='img-fluid'></img>
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'
                    >
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
