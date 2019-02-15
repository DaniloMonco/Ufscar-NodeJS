
module.exports = function(){
    const movieApiProxy = require('request-promise')
    const apiKey='8625f75857d46212799d5bd21fb480b6'
    
    this.searchMovie = (query) => {
        const options = {
            method: 'GET',
            uri: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&include_adult=true&query=${query}`,
            headers: {
              'User-Agent': 'moviesCollector-Ufscar',
              'Content-Type': 'application/json;charset=utf-8'
            }
          }

        return movieApiProxy(options)
        
    }
    
    this.findMovieById = (movieId) =>{
        const options = {
            method: 'GET',
            uri: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`,
            headers: {
              'User-Agent': 'moviesCollector-Ufscar',
              'Content-Type': 'application/json;charset=utf-8'
            }
          }

        return movieApiProxy(options)

    }
}

