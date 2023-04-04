// import React from "react";
import './booking.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import { MdFeedback } from 'react-icons/md';
import { AiOutlineHistory } from 'react-icons/ai';
import data from '../../data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// let arr = localStorage.getItem("booking");


// function getBookingDetails() {
//   arr = JSON.parse(localStorage.getItem("booking"));
//   console.log(array);
// }


function BookingHistory() {
  const navigate = useNavigate();
  function navToFeedback() {
    navigate("/feedback");
  }

  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("booking")))

  if (arr) {
    while (arr.length > 3) {
      setArr(arr.splice(0, 1));
    }
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (<>
    {/* {getBookingDetails()} */}
    < div id="booking" >
      <h1 className="bookingHeading"> <AiOutlineHistory />
        <span className="bookingName">Booking History</span> </h1>

      <div className="bookingData" >
        {arr && arr.map((obj) => {
          return (
            <div>
              <Card sx={{ maxWidth: 345 }} className="bookingCard">
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
                      U
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={`${data[obj.city].resto_details[obj.id].name}, ${data[obj.city].resto_details[obj.id].city}`}
                  subheader={obj.date}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={data[obj.city].resto_details[obj.id].url}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {data[obj.city].resto_details[obj.id].description}
                  </Typography>
                </CardContent>
                {/* <IconButton aria-label="add to favorites">
  
</IconButton>
<IconButton aria-label="share">
  <ShareIcon />
</IconButton> */}
                <button type="button" className="btn btn-outline-dark btn-lg btn3" onClick={navToFeedback}> <MdFeedback /> <span className="bookingName">Feedback</span></button>
              </Card>
            </div>
          )
        })}
      </div>
    </div >
  </>
  )
}
export default BookingHistory;