import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import HeroImg from '../assets/img/main-artwork.webp'

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 14
      }}
    >
      <Stack
        spacing= {3}
        sx={{
          width: 450,
        }}
      >
        <Typography variant='h4' fontWeight={'bold'}>Transforming Your Ideas Into Digital Reality</Typography>
        <Typography >
          We are one of its kind of product development company that offers competitive software solutions to unleash your business potential.
        </Typography>
        <Button variant='contained' sx={{width: 135}}>Contact Us</Button>
      </Stack>
      <img src={HeroImg} alt="hero-img" height={400} />
    </Box>
  )
}

export default Hero