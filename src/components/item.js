import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

const Item = SortableElement(({ image, onDeleteImg, openForm }) => {
    const imageUrl = image.src;
    const DragHandle = SortableHandle(() => <span className="sort-note note">о</span>);
    return (
        <li className="list-group-item">
            <div col-2 d-flex>
                <span className="delete-note note" onClick={() => onDeleteImg(image)}> x </span>
                <DragHandle />
            </div>
            <div className="media">
                <div className="media-left">
                    <img className="media-object" onClick={() => openForm(imageUrl)} src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{image.desc}</div>
                </div>
            </div>
        </li>
    );
});


export default Item;


