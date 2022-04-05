import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useCart } from 'react-use-cart'

interface CardProps {
    Image: string,
    ProductName: string,
    Description: string,
    Price: number,
    ProductId: number,
    Item: any,
}

const CardProduct: React.FC<CardProps> = (props: CardProps) => {

    const { addItem } = useCart();

    function getText(text: string)
    {
        return {
            __html: text
        }
    }
    return(
        <>
            <Card sx={{ maxWidth: 345, width: '100%' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.Image}
                    alt={props.ProductName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.ProductName}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="text.secondary"
                        dangerouslySetInnerHTML={getText(props.Description)}
                    >
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                        <strong>$ {props.Price}</strong>
                    </Typography>
                </CardContent>
                <hr />
                <CardActions>
                    <Button size="small">Buy</Button>
                    <Button size="small" onClick={()=>addItem(props.Item)}>Add to Cart</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CardProduct