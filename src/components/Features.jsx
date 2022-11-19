import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Features = () => {
  return (
    <Stack direction={'row'} spacing={2} sx={{py: 14, px: 6}}>
      <Stack spacing={2}>
        <Typography gutterBottom variant="h6" fontWeight={'bold'} component="div">
          Project Management Process
        </Typography>
        <Typography variant="body2" color="#9fa9ad">
          Agility is the heart and soul of the software development life cycle at Third Rock Techkno. We follow a goal-driven approach...
        </Typography>
        <Button variant='contained' sx={{width: 'max-content'}}>See More</Button>
      </Stack>
      <Stack spacing={2}>
        <Typography gutterBottom variant="h6" fontWeight={'bold'} component="div">
          Project Management Process
        </Typography>
        <Typography variant="body2" color="#9fa9ad">
          Agility is the heart and soul of the software development life cycle at Third Rock Techkno. We follow a goal-driven approach...
        </Typography>
        <Button variant='contained' sx={{width: 'max-content'}}>See More</Button>
      </Stack>
      <Stack spacing={2}>
        <Typography gutterBottom variant="h6" fontWeight={'bold'} component="div">
          Project Management Process
        </Typography>
        <Typography variant="body2" color="#9fa9ad">
          Agility is the heart and soul of the software development life cycle at Third Rock Techkno. We follow a goal-driven approach...
        </Typography>
        <Button variant='contained' sx={{width: 'max-content'}}>See More</Button>
      </Stack>
    </Stack>
  )
}

export default Features