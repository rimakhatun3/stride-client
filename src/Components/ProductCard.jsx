import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';


const ProductCard = ({product}) => {
const {_id, brand,title,category,description,image_url,price,quantity} = product || {}

    return (
        <div>
             <Card className='px-5 py-4 border rounded-lg' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {brand}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description
}
        </Typography>
      </CardContent>
      <CardActions className='flex flex-row justify-between'>
        <p><span className='font-semibold'>Price: </span>  $ {price}</p>
       <Link to={`details/${_id}`}> <Button size="small">View Details</Button></Link>
        
      </CardActions>
    </Card>
        </div>
    );
};

export default ProductCard;