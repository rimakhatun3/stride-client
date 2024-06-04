import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ProductDetailsCard = () => {

    const productInfo = useLoaderData()
    console.log(productInfo)

    return (
        <div>
          <Card className='justify-evenly mt-10 h-[60vh] items-center' sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {productInfo?.brand}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {productInfo?.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {productInfo?.description}
          </Typography>
          
         <div>
         <Typography variant="subtitle1" color="text.secondary" component="div">
         <span className='font-serif'>Price</span> ${productInfo?.price}
          </Typography>
         <Typography variant="subtitle1" color="text.secondary" component="div">
         <span className='font-serif'>Quantity</span>  {productInfo?.quantity
}
          </Typography>
         </div>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={productInfo?.image_url}
        alt="Live from space album cover"
      />
    </Card>
        </div>
    );
};

export default ProductDetailsCard;