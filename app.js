const axios = require('axios');
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/:movieTitle', async (req, res) => {

  const API_KEY = 'd2665a5b';
  const movieTitle = req.params.movieTitle;

  try{
    const apiUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(movieTitle)}`;
    const response = await axios.get(apiUrl);
    
    const movie = response.data;
    const movieDetails= {
        Director: movie.Director,
        Year: movie.Year
    };

    res.json(movieDetails);

  } catch (error) {
    res.status(500).json({ error: 'That movie is not on this Database' });
  }
});

app.listen(PORT,()=>{
  console.log(`server is running on http://localhost:${PORT}`);
});