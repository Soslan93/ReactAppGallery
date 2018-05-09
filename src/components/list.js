import React, { Components } from 'react';
import Item from './item';

const Pict_List = (props)=>{
    const imgItems = props.images.map((image)=>{
        return (
            <Item key = {image.id} image={image} onDeleteImg={props.onDeleteImg}/>
        );
    })
    return (
        <ul className = "col-md-4 list-group">
            {imgItems}
        </ul>
    );
};

export default Pict_List;
