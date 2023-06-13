import React from 'react';
import './GridItems.css'
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { dashboard } from '../constant';

const GridItems = ({ num, desc, img,color }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card sx={{ width: '200px', height: '200px', display: 'flex', margin: 2 }}>
        <CardActionArea>
          <CardContent>
            <CardMedia component="img" src={img} sx={{ height: '30px', width: '30px', marginTop: '-20px', marginLeft: '145px' }} className='img-align' />
            <Typography className='text1' sx={{ fontSize: '35px', fontFamily: 'IBM Plex Sans', marginTop: '-35px',color:color }}>{num}</Typography>
            <Typography variant="body2" className='body2' sx={{ fontSize: '25px', fontFamily: 'IBM Plex Sans', marginTop: '25px' }}>{desc}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};



export const GridRequestStatus = ({ head, para, para_sec, img }) => {

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', top: '20px' }}>
      <Card sx={{ width: '430px', height: '200px', display: 'flex', marginTop: '-120px' }}>
        <CardActionArea>
          <CardContent>
            <Typography className='my-request-status' sx={{ position: 'absolute', fontFamily: 'IBM Plex Sans', fontSize: '30px', marginTop: '-40px', fontWeight: '5px' }}>{head}</Typography>
            <CardMedia component="img" src={img[0]} sx={{ height: '25px', width: '25px', marginLeft: '347px', marginTop: '35px' }} className='img-align' />
            <Typography variant="body2" className='body2' sx={{ position: 'absolute', fontFamily: 'IBM Plex Sans', fontSize: '20px', marginTop: '-25px' }}>{para}</Typography>
            <Typography variant="body2" className='body2' sx={{ position: 'absolute', fontFamily: 'IBM Plex Sans', fontSize: '20px', marginTop: '25px' }}>{para_sec}</Typography>
            <CardMedia component="img" src={img[1]} sx={{ height: '25px', width: '27px', marginLeft: '344px', marginTop: '30px',objectFit: 'contain' }} className='img-align' />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
};

export const GridTimer = ({ time, desc, img,color }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', top: '20px' }}>
      <Card sx={{ width: '250px', height: '468px', display: 'flex'}}>
        
          <CardContent>

            <Typography className='text1' sx={{ position:'absolute', fontSize: '40px', fontFamily: 'IBM Plex Sans', marginTop: '20px', marginLeft: '20px', color:color }}>{time}</Typography>
            <CardMedia component="img" src={img[0]} sx={{ height: '20px', width: '20px', marginTop: '100px' }} className='img-align' />
            <Typography variant="body2" className='body2' sx={{fontFamily: 'IBM Plex Sans', fontSize: '20px', marginTop: '-24px', marginLeft: '30px' }}>{desc}</Typography>

            <button className='btn-cancel-request'>
              {/* <img src={img[1]} className='cancel_request_img'></img> */}
              {dashboard[1].btn_cancel_request}
            </button>

            <button className='btn-extend-request'>
            {/* <img src={img[2]} className='extend_request_img'></img> */}
            {dashboard[1].btn_extend_request}
            </button>
      
          </CardContent>
        
      </Card>
    </Box>
  )
}

export default GridItems;