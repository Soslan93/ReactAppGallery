import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Pict_List from './components/list';
import UrlText from './components/url_description';
import { arrayMove } from 'react-sortable-hoc';
import Picture from './components/picture';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [{ id: 0, src: "http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg", desc: 'панда' }, { id: 1, src: "http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg", desc: 'панда' }],
            urlImage: ''
        };

    }

    _updateLocalStorage() {
        const images = JSON.stringify(this.state.images);
        localStorage.setItem('images', images);
    }
    componentDidMount() {
        const localImages = JSON.parse(localStorage.getItem('images'));
        if (localImages) {
            this.setState({ images: localImages });
        }
    }
    componentDidUpdate() {
        this._updateLocalStorage();
    }

    addImage(img) {

        const newImages = this.state.images.slice();
        newImages.push(img);
        this.setState({ images: newImages });

    }

    deleteImg(img) {
        const imageId = img.id;
        const newImages = this.state.images.filter(img => img.id !== imageId);
        this.setState({ images: newImages });
    }
    editDesc(img) {
        console.log(img);

    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState({
            images: arrayMove(this.state.images, oldIndex, newIndex)
        });
    }

    openForm = (urlImage) => {
        console.log(urlImage);
        this.setState({
            urlImage: `${urlImage}`
        });
    }

    render() {
        return (
            <div className="gallery">
                <UrlText onClickAdd={this.addImage.bind(this)} />
                <Pict_List images={this.state.images} onDeleteImg={this.deleteImg.bind(this)} openForm={this.openForm} useDragHandle={true} onSortEnd={this.onSortEnd} />
                <Picture imageUrl={this.state.urlImage} />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.querySelector('.container')
);

