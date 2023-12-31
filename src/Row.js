// import React, { useEffect, useState } from "react";
// import axios from "./axios";
// import "./Row.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

// const base_url = "https://image.tmdb.org/t/p/original/";

// function Row({ title, fetchUrl, isLargeRow }) {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       console.log(request.data.results);
//       setMovies(request.data.results);
//       return request;
//     }
//     fetchData();
//   }, [fetchUrl]);
//   // console.log(movies);
//   const opts = {
//     height: "390px",
//     width: "300px",
//     playerVars: {
//       autoplay: 1,
//     },
//   };
//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.original_name || movie?.title || "")
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row__posters">
//         {movies.map((movie) => (
//           <img
//             key={movie.id}
//             onClick={() => handleClick(movie)}
//             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name}
//           />
//         ))}

//         <div className="row__youtube">
//           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Row;
// import React from "react";
// import { useState, useEffect } from "react";

// import "./Row.css";
// import axios from "./axios";
// // import youtube from "react-youtube";
// import movieTrailer from "movie-trailer";
// import YouTube from "react-youtube";

// const base_url = "https://image.tmdb.org/t/p/original/";

// function Row({ title, fetchUrl, largeRow }) {
//   const [movies, setmovies] = useState([]);
//   const [traileUrl, setTraileUrl] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       // console.log(request)
//       setmovies(request.data.results);
//       // console.log(request.data.results);
//       return request;
//     }
//     fetchData();
//   }, [fetchUrl]);
//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   const handleClick = (movie) => {
//     if (traileUrl) {
//       setTraileUrl("");
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie.original_name)
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTraileUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   // console.log(movies)

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row__posters">
//         {movies.map((movie) => (
//           <img
//             onClick={() => handleClick(movie)}
//             className={`row_poster ${largeRow && "row_posterLarge"}`}
//             src={`${base_url}${
//               largeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name}
//           />
//         ))}
//       </div>
//       <div style={{ padding: "40px" }}>
//         {traileUrl && <YouTube videoId={traileUrl} opts={opts} />}
//       </div>
//     </div>
//   );
// }

// export default Row;
import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      <div className="row__youtube">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
