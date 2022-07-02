import { Box, Button, Center, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Movie() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    let id = localStorage.getItem("id");
    id = JSON.parse(id);
    console.log(id);
    fetch(`http://localhost:8080/movies/${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <>
      <Box
        fontFamily="monospace"
        margin={"40px"}
        padding={"40px"}
        borderRadius="10px"
        border="5px solid"
        borderColor="blue.200"
      >
        <center>
          <Text fontSize="5xl" fontWeight={400}>
            Title: {movie.title}
          </Text>
          <br />
        <Img src={movie.poster_path} borderRadius="10px" />
        <Box padding={"10px"}>
          <Text fontSize="3xl" fontWeight={400}>
            original_language: {movie.original_language}
          </Text>
          <Text fontSize="3xl" fontWeight={400}>
            original_title: {movie.original_title}
          </Text>
          <Text fontSize="xl" fontWeight={400}>
            overview: {movie.overview}
          </Text>
          <Text fontSize="3xl" fontWeight={400}>
            popularity: {movie.popularity}
          </Text>
          <Text fontSize="3xl" fontWeight={400}>
            poster_path: {movie.poster_path}
          </Text>
          <Text fontSize="3xl" fontWeight={400}>
            release_date: {movie.release_date}
          </Text>
          <Text fontSize="3xl" fontWeight={400}>
            vote_average: {movie.vote_average}
          </Text>
          <Text fontSize="3xl" fontWeight={400}>
            vote_count: {movie.vote_count}
          </Text>
        </Box>
        <Button colorScheme='red'>Book Now</Button>
        </center>
      </Box>
    </>
  );
}

export default Movie;
