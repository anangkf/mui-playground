import React from 'react'
import logo from '../assets/img/netflix.png';
import { Box, Button, Container, List, ListItem } from '@mui/material';

const Navbar = () => {
  return (
    <Box
        sx={{
          
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2
          }}
        >
          <img src={logo} alt='logo' width={120}/>
          <Box>
            <List
              sx={{display: 'flex', width: 750}}
            >
              <ListItem>About Us</ListItem>
              <ListItem>Services</ListItem>
              <ListItem>Solutions</ListItem>
              <ListItem>Portfolio</ListItem>
              <ListItem>Hire Us</ListItem>
              <ListItem>Our Client</ListItem>
            </List>  
          </Box>
          <Button variant='contained'>Contact Us</Button>
        </Container>
      </Box>
  )
}

export default Navbar