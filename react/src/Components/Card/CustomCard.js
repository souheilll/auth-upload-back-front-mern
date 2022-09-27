import React from 'react';
import Card from 'react-bootstrap/Card';
import classes from './CustomCard.module.css';

function CustomCard({ item, operation }) {
    return (
        <Card className={classes.card} >
            {operation === 'getItems' &&
                <div>
                    <Card.Img variant="top" className={classes['card-img-top']} src={`${process.env.PUBLIC_URL}/productsImg/${item.selectedImage}`} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            Some quick example text .
                        </Card.Text>
                    </Card.Body>
                </div>
            }
            {operation === 'getUsers' && <div>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{item.userName}</Card.Title>
                    <Card.Text>
                        {item.email}
                    </Card.Text>
                </Card.Body>
            </div>}
        </Card>

    )
}
export default CustomCard