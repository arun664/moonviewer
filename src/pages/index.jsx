import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import starrysky from "../../public/img/starrysky.jpg"
import Image from 'next/image';
import BabylonViewer from '@/components/babylon';
import MoonLoader from '@/components/moonloader';
import MoonInfo from '@/components/mooninfo';
function Homepage() {
  return (
    <Box sx={{ flexGrow: 1,width:1,height:1}}>
      <Image
      src={starrysky}
      alt="Picture of the author"
      className='bg-img'
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    <Container maxWidth="xxl" sx={{height:1}}>
        <Grid container spacing={2} sx={{height:1}}>
        <Grid xs={8} className={"moon-grid"} >
        <BabylonViewer>
          <MoonLoader />
          </BabylonViewer>
        </Grid>
        <Grid xs={4}>
          <MoonInfo />
        </Grid>
        </Grid>
      </Container>
      </Box>
  )
}

export default Homepage