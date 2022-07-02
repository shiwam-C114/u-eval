import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <Flex p={5} margin="4px" borderRadius="md" border='4px' borderColor='red.400' justify={"space-around"}>

          <Link to="/" >HOME</Link>
          <Link to="/Login" >lOGIN</Link>
          <Link to="/Booking" >BOOKING</Link>
           
        </Flex>
        
    </nav>
  )
}

export default Nav