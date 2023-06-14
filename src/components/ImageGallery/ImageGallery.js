
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import Searchbar from "components/Searchbar/Searchbar";
import css from './ImageGallery.module.css'
// import PropTypes from 'prop-types';


export const ImageGallery = ({ onSubmit, images }) => {
    return (
        <>
            <Searchbar onSubmit={onSubmit} />
            <ul className={css.gallery}>
                {images.map(({ id, webformatURL, tags, largeImageURL }) => (
                    <ImageGalleryItem
                        key={id}
                        url={webformatURL}
                        alt={tags}
                        largeImageURL={largeImageURL}
                    />
                ))}
            </ul>
        </>
    );
}