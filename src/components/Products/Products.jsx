imnport React from 'react';
import Grid from '@material-ui/core';


const Products =[
    {id: 1, name: 'Shoes', description: "Running Shoes.", price:'$5' },
    {id: 2, name: 'MacBook', description: "Apple macbook.", price:'$10' },
]

const Products = () => {
        <main>
            <Grid container justify="center" spacing={4} >
                {Products.map(product = (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        {/* <Product /> */}
                        <Product product={product}/>
                   </Grid>
                ))}
            </Grid>
        </main>
}

export default Products;