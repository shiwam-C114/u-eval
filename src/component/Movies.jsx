import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Movies({ img, title , id }) {
    const n = useNavigate()

    function moreDetail() {
        localStorage.setItem("id",JSON.stringify({id:id}))
        n(`/movie`)
    }
    function bookNow() {
        let M = localStorage.getItem("movies")
        if(M){
            M = JSON.parse(M)
            console.log(M);
            M = M.movies.push(id)
            localStorage.setItem("movies", JSON.stringify(M))
        }
        else{
            localStorage.setItem("movies", JSON.stringify({movies:[id]}))
            
        }
        n('/booking')
    }

  return (
    <>
      <Box
      fontFamily="monospace"
        margin={"10px"}
        padding={"10px"}
        borderRadius="10px"
        border="5px solid"
        borderColor="blue.200"
      >
        <center>
          <Image src={img} width="350px" borderRadius="5px" />
          <Text  fontSize="xl" fontWeight={400}>
           Title: {title}
          </Text>
          <Button onClick={moreDetail} colorScheme='red'> More Details</Button>
         
            <Button onClick={bookNow} margin={2} colorScheme='red'>Book</Button>
          
        </center>
      </Box>
    </>
  );
}

export default Movies;
