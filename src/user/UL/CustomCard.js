import React from 'react';

import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CustomCard({ value }) {

    const handleclick = () => {
        console.log("abc");
    }
    
    return (
        <>

            <Card
                style={{
                    width: '18rem',
                    padding: "5px",
                    margin: '20px'

                }}
            >
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {value.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {value.besingations}
                    </CardSubtitle>
                    <CardText>
                        {value.description}

                    </CardText>
                </CardBody>
                <Button onClick={handleclick()}>
                    Button
                </Button>
            </Card>
        </>
    );
}

export default CustomCard;