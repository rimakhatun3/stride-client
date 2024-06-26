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
        <div className='py-9 px-4'>
             <Card className='  border rounded-lg h-[80vh]' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image_url}
        title="green iguana"
        className='mt-8 mx-8'
      />
      <CardContent className='mx-3 mt-3'>
        <Typography gutterBottom variant="h5" component="div">
         {brand}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description.split(" ").slice(0,15).join(' ') + '...'}
        </Typography>
      </CardContent>
      <CardActions className='flex flex-row justify-between  mx-5'>
        <p><span className='font-semibold'>Price: </span>  $ {price}</p>
       <Link to={`details/${_id}`}> <Button size="small">View Details</Button></Link>
        
      </CardActions>
    </Card>
        </div>
    );
};

export default ProductCard;