import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, iconButton, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import classes from '*.module.css';
import useStyles from './Styles';


const Product = ({ product }) => {
    const classes = useStyles();
    return (
        <Card classname={classes.root}>
            <CardMedia className={classes.media} image='' title={Product.name} />
            <CardContent className={classes.cardContent}>
              <div>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5">
                    {product.price}
                </Typography>
              </div>
              <Typography variant="h2" color="textSecondary">
                  {product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart />
                    </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
