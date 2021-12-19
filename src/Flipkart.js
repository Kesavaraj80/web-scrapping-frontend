import React from 'react';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import StarRateIcon from '@material-ui/icons/StarRate';
// import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles({
  all_product: {
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
    gridColumnGap: '20px',
    gridRowgap: '20px',
    /* flex-wrap:wrap ; */
    /* flex-direction: column; */
    marginTop: '1rem'
  },
  image: {
    height: '200px',
    width: "auto"
  },
  product: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
  },
  name: {
    fontSize: '15px',
  }
});


export function Flipkart() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  fetch("https://web-scrapping--ecommerce.herokuapp.com/flipkart")
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
            <Typography className={classes.name}>{product.Title}</Typography>
            <div style={{display: 'flex',color:'#FFD700'}}>
              <StarRateIcon />
              <Typography className="product_rating">{product.Rating}</Typography>
            </div>
            <Typography className="product_price">{product.price}</Typography>
          </Card>
        );
      })}
    </div>
  );
}
