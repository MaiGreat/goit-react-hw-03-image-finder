import React, { Component } from "react";
import Searchbar from "components/Searchbar/Searchbar";

export class ImageGallery extends Component {




    render() {

        return (
        <>
                <Searchbar onSubmit={ this.onSubmit} />
                <ul className="gallery">
                    
                </ul>
        </>

        )
    }
}