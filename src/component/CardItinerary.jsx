import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import '../styles/CardItinerary.css'
import Button from '@mui/material/Button';
import { Link as LinkRouter } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

function CardItinerary(prop) {

  let itinerary = prop.itinerary
  const isSmallScreen = useMediaQuery('(max-width: 760px)');

  return (
    <>

      <div className='overlayCard'>
        <Card
          sx={{
            width: isSmallScreen ? '300px' : '600px',
            height: isSmallScreen ? '330px' : '300px',
            display: 'flex',
            backgroundImage: `url(${itinerary.imageItineraryA})`,
            backgroundPosition: '100% 100%',
            backgroundSize: 'cover',
            color: 'white',
          }}
        >
          <div className='overlayCard'>
            <Avatar
              sx={{
                width: 60,
                height: 60,
                marginRight: 2,
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
              }}
              alt="Avatar"
              src={itinerary.profileImage}
            />
            <CardHeader
              title={itinerary.collaborator}
              sx={{
                paddingTop: 1,
                paddingBottom: 0,
                fontSize: '1rem',
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontSize: '1rem' }}>{itinerary.titleActivity}</Typography>
              <Typography variant="subtitle1" sx={{ fontSize: '0.9rem' }}>
                <AccessTimeIcon sx={{ marginRight: 1 }} />
                {itinerary.time}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: '0.9rem' }}>
                <AttachMoneyIcon sx={{ marginRight: 1 }} />
                {itinerary.price}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>{itinerary.hashtag}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
              <label htmlFor="">
                <Checkbox
                  icon={<FavoriteBorderIcon sx={{ color: 'red' }} />}
                  checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
                />
                {itinerary.likes}
              </label>
              <LinkRouter to={"/Itineraries/" + itinerary._id}>
                <Button variant="contained" sx={{ color: 'yellow', backgroundColor: '#500892', fontWeight:'bold' }}>
                  Details
                </Button>
              </LinkRouter>
            </CardActions>
          </div>
          <div
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: '#0000009f',
            }}
          ></div>
        </Card >
      </div>

    </>
  );
}

export default CardItinerary;
