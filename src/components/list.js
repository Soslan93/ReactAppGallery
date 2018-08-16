import React, { Components } from 'react';
import Item from './item';
import { SortableContainer } from 'react-sortable-hoc';

const Pict_List = SortableContainer((props) => {
    return (
        <ul className="col-md-4 list-group">
            {props.images.map((image, index={index}) => (
                <Item key={image.id} image={image} index={index} openForm={props.openForm} onDeleteImg={props.onDeleteImg} />
            ))}
        </ul>
    );
});

export default Pict_List;
