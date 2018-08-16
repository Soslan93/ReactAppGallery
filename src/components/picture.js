import React from 'react';

const Picture = ({ imageUrl }) => {
    return (
        <div className="form-picture">
            <img src={imageUrl} />
        </div>
    );
}

export default Picture;