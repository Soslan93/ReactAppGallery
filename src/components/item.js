import React from 'react';

const Item = ({image, onDeleteImg}) => {
    const imageUrl = image.src;
    return (
        <li className="list-group-item">
        <span className="delete-note" onClick={()=>onDeleteImg(image)}> x </span>
            <div className="media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{image.desc}</div>
                </div>
            </div>
        </li>
    );
};


export default Item;


