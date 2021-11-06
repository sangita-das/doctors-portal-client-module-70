import React from 'react';
import Grid from '@mui/material/Grid'
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';


const bannerBg = {
  background: `url(${bg})`,

}
const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 400,
  // border: '1px solid red'
}

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>

          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae voluptate harum. Porro quam ullam architecto quibusdam veniam, consectetur est?
            </Typography>
            <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }} >Get Appointment</Button>
          </Box>

        </Grid>

        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: '350px' }} src={chair} alt="" />
        </Grid>

      </Grid>
    </Container >
  );
};

export default Banner;