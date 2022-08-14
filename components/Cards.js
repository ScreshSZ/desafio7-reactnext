import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

const Cards = ({titulo, precio, descripcion, categoria, imagen, id }) => {

    const router = useRouter()

    return (
        <>
            <Card sx={{ maxWidth: 345, height: '400px', overflow: 'auto', padding: '10px', margin: '10px' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    
                    image={imagen}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {titulo} -   <span className='precioVerde'>${precio}</span>
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    Category: {categoria}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descripcion} 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                    variant="contained" 
                    color="success"
                    onClick={()=> router.push(`/${id}`)}
                    >Purschase</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Cards