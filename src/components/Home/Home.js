import React, {useEffect} from 'react';
import MovieListing from '../MovieDetail/MovieDetail'
import {APIKey} from '../../common/apis/MovieApiKey'
import movieApi from '../../common/apis/movieApi';

const Home = () => {

    // useEffect(() => {
    //     const movieText = 'spider';

    //     const fetchMovies = async () => {
    //         const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
    //         .catch(error=>{
    //             console.log("error", error);
    //         })
    //         console.log(response);
    //     }
    //     fetchMovies();
    // },[])

    return (
        <div>
            <div className="movie__banner_img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;