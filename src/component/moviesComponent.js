import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import '../css/moviesComponent.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Progressbar from './progressbar';
import Button from '@mui/material/Button';

const MoviesComponent = ({data, category}) => {

  const handleDeleteMovie = async(id) => {
    const newMovieList = data && await data.filter(movie => movie.id !== id)
    localStorage.setItem("currentMovies", JSON.stringify(newMovieList))
    return window.location.reload()
  }

  const movieList = category ? data.filter(movie => movie.category === category) : data

  return (
    <div className="main-container">
      {movieList.map((data) => {
    return (
      <Card className="card-container" key={data.id}>
        <CardMedia
          component="img"
          height="400"
          image={data.img}
          alt="green iguana"
        />
        <CardContent style={{padding: "0"}}>
          <Typography gutterBottom component="div">
            <div className="card-header">
                <div className="card-header-title">
                  <text><b>{data.title}</b></text>
                  <text style={{fontSize: "0.8rem"}}>{data.category}</text>
                </div>
              <div style={{display: "flex", flexFlow: "row"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}><ThumbUpIcon /> {data.likes}</div>
                <div style={{display: "flex", justifyContent: "space-between"}}><ThumbDownAltIcon /> {data.dislikes}</div>
              </div>
              <Progressbar  />
            </div>
          </Typography>
          <Divider />
          <Typography variant="body2">
            <div style={{paddingTop: "2%", paddingBottom: "2%"}}>
              <Button variant="contained" color="error" onClick={() => handleDeleteMovie(data.id)}>Supprimer</Button>
            </div>
          </Typography>
        </CardContent>
      </Card>
    );
  })}
    </div>
  )
}

export default MoviesComponent