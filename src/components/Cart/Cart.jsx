import React from 'react'
import { Container, Typography,  Button, Grid } from '@material-ui/core';


const Cart = ({ cart }) => {

    const isEmpty = !cart.line_items.length;

    const EmptyCart = () => (
        <Typography variant='subtitle'>
            You have no items in your shopping cart, start adding some
        </Typography>
    )

    const filledCart = () =>(
        <>
            <Grid container spacing={3}>
                { cart.line_items.map(() => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem />
                    </Grid>
                ))}

            </Grid>
        </>
    )



    return (
        <Container>
            <div classname={classes.tollbar} />
            <Typography className={classes.title} variant="h3">
                Your shopping card
            </Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
