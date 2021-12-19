import React from 'react';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StarRateIcon from '@material-ui/icons/StarRate';
import Card from '@material-ui/core/Card';


// import Carousel from 'react-material-ui-carousel'


const useStyles = makeStyles({
  all_product: {
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
    gridColumnGap:'20px',
    gridRowgap:'20px',
    /* flex-wrap:wrap ; */
    /* flex-direction: column; */
    // marginTop: '6rem'
  },
  image:{
    height: '250px',
    width:"250px"
  },
  product:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width:'250px',
    marginTop:'20px'
  },
});


export function SnapDeal() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  fetch("https://web-scrapping--ecommerce.herokuapp.com/snapdeal")
    .then((data) => data.json())
    .then((data) => { console.log(data); setProducts(data); });
  return (
    <div className={classes.all_product}>
      {products.map((product) => {
        return (
          <Card className={classes.product}>
            <div>
              <img src={product.image} alt={product.Title} className={classes.image}></img>
            </div>
            <Typography >{product.Title}</Typography>
            <div style={{display: 'flex',color:'#FFD700'}}>
              <StarRateIcon />
              <Typography className="product_rating">{product.Rating}</Typography>
            </div>
            <Typography >₹{product.finalPrice}</Typography>
          </Card>
        );
      })}
    </div>
  );
}
