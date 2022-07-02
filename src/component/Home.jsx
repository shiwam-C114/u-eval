import React, { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Movies from "./Movies";
import Movie from "./Movie";

function Home() {

    const [D, setD] = useState([1,2,3])

    useEffect(() => {
      fetch("http://localhost:8080/movies").then(res=>res.json()).then(data=>{
        // console.log(data)
            setD(data)
      })
    }, [])
    
  return (
    <div>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {
            D.map((movie)=>
                <Movies key={movie.id} img={movie.poster_path} title={movie.title} id={movie.id} />
            )
        }
        </Grid>
    </div>
  );
}

export default Home;
