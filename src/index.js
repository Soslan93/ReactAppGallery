import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Pict_List from './components/list';
import UrlText from './components/url_description';


class App extends Component{
    constructor(props){
        super(props);
        
        this.state ={ images: [{ id: 0, src: "http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg", desc: 'панда' }, { id: 1, src: "http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg", desc: 'панда' }] };
        
    }
    //сохраняем наш массив объектов +
    _updateLocalStorage() {
        const images = JSON.stringify(this.state.images);
        localStorage.setItem('images', images);
    }
    componentDidMount() {
    var localImages = JSON.parse(localStorage.getItem('images'));
    if (localImages) {
        this.setState({ images: localImages });
        }
    }
    componentDidUpdate() {
        this._updateLocalStorage();
    }
    //-
    addImage(img){
        
        const newImages = this.state.images.slice();
        newImages.push(img);
        this.setState({images: newImages});
        
    }
    
    deleteImg(img){
        console.log(img);
        const imageId = img.id;
        const newImages = this.state.images.filter(img=>img.id!==imageId);
        this.setState({images: newImages});
    }
   
    render(){
        return (
            <div className="gallery">
                <UrlText onClickAdd={this.addImage.bind(this)} />
                <Pict_List images={this.state.images} onDeleteImg={this.deleteImg.bind(this)} />
            </div>
        );
    }
}

ReactDom.render(
<App />, 
document.querySelector('.container')
);

