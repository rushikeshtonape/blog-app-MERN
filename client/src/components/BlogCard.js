import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';





export default function BlogCard({title,description,image,username,time}) {
  


  return (
    <Card sx={{ width:'40%' , margin:'auto' , mt:2 , padding:3 , boxShadow: '5px 5px 10px #ccc' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
          
        }
        
        title={username}
        subheader={time}

      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="unsuccessful to load image"
      />
      <CardContent>
      <Typography variant="h6" color="text.secondary">
          Title: {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Description: {description}
        </Typography>
      </CardContent>
      
    </Card>
  );
}