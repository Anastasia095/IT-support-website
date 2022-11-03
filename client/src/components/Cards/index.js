import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, mt: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="images/sampleImage.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Placeholder
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    
  );
}