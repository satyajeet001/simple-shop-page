import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function categories(props){
    return(
        <div className="category">
            <div className="top" >
                 <img 
                src={props.image}
                alt="image" />
            </div>
            <div className="bottom" >
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" size="medium">Buy</Button>
                            <Button variant="text" size="medium">Category</Button>
                        </Stack>
                    </div>
        </div>
    )
}

export default categories;