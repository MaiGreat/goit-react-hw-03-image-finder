// import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'


export const ImageGalleryItem = ({ url, alt }) => {
    return (
        <li className={css["gallery-item"]}>
            <img
            className={css['img-item']}
            src={url}
            alt={alt} />
        </li>
    )
}