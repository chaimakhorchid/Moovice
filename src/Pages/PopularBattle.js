import React, { Component } from 'react'
// import Card from '../Components/Card'

export default class Popular extends Component {
    constructor (){
        super()
        this.state = {
            movies: [],
            currentBattle : 0,
            favorites: []
        }
        this.handleMovieChange = this.handleMovieChange.bind(this)
    }

    componentDidMount() {
    
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
            .then(response => response.json())
            .then(data => {
                this.setState({ movies: data.results })
               
            })
    }

    handleMovieChange(id){

        const {favorites, currentBattle} = this.state

        if(currentBattle === 18){
            alert("Vous avez parcouru tous les films !")
        }

        // console.log(id);
        this.setState({
            currentBattle : this.state.currentBattle += 2,
            favorites: [id,...favorites]

        })
        // this.setState({
        //     currentBattle : this.state.currentBattle += 2
        //     favoritesArray = [...favoritesArray,id]
        // })
        // const favoritesArray= localStorage.setItem("favorites")
        // if(!favoritesArray){
        //     favoritesArray = localStorage.setItem("favorites", JSON.stringify([id]))
        // } else {
        //     favoritesArray = JSON.parse(favoritesArray)
        //     favoritesArray = [...favoritesArray,id]
        //     favoritesArray = localStorage.setItem("favorites", JSON.stringify(favoritesArray))
        // }
    }

    render() {
        // console.log(this.state.movies);
        const filterMovies = this.state.movies.filter((movies, index) =>
         index === this.state.currentBattle || index === this.state.currentBattle + 1)
         localStorage.setItem("favorites",JSON.stringify(this.state.favorites))
        // console.log(this.state.favorites);
        console.log(this.state.currentBattle);
        
        return (
            <div >
                <h1>Popular Battle</h1>
                <div className="d-flex flex-wrap">
                    {filterMovies.map((movie) => {
                        return (
                            <div className="card m-3" style={{width: "18rem"}} onClick={() => this.handleMovieChange(movie.id)} key={movie.id}>
                                <div style={{height: "14rem", overflow: "hidden"}}>
                                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
                                </div>
                                <div className="card-body">
                                    <h1>{movie.title}</h1>
                                    <p>{movie.release_date}</p>
                                    <p>{movie.overview}</p>
                                
                                </div>
                            </div>
                                )
                    })}               
                </div>
            </div>
        )
    }
}
