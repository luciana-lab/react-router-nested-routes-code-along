import React from "react";

// We add 'mathc' to the arguments so we can access the path info in 'routerProps' that is passed from MoviesPage.js
// Match is inside, this is a destructive way of props (props.match and props.movies)

// Inside the h3 we access the `movieId` stored in match.params to render info about the selected movie
const MovieShow = ({ match, movies }) => {
    // debugger
    return (
        <div>
            <h3>{movies[match.params.movieId].title}</h3>
        </div>
    )
}

export default MovieShow;