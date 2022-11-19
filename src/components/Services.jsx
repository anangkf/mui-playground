import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import AngularImg from '../assets/img/angular.png'
import React from 'react'

const Services = () => {
  return (
    <Stack spacing={2}>
      <Typography variant='h4' fontWeight={'bold'}>Services We Provide</Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexBasis: '33%',
          justifyContent: 'start',
          gap: 5,
        }}
      >
        {[1,2,3,4,5,6,7,8].map(item =>{
          return(
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="60"
                sx={{width: 60, p:2}}
                image={AngularImg}
                alt="angular"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Angular Development
                </Typography>
                <Typography variant="body2" color="#9fa9ad">
                  Starting from ecommerce to healthcare - our extensive Angular development services can bring out the best through our enterprise-grade web development approach. If you are looking for an Angular development company with highly...
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" endIcon={<KeyboardArrowDownRoundedIcon />}>Read More</Button>
              </CardActions>
            </Card>
          )
        })}
      </Box>
    </Stack>
  )
}

export default Services