import ImageGallery from 'react-image-gallery';
import picture01 from './pictures/t01.jpg';
import picture02 from "./pictures/t02.jpg";
import picture03 from "./pictures/t03.jpg";
import picture04 from "./pictures/t04.jpg";


const Pictures = () => {

    const galleryitems = [
        {
            original: picture01,
            thumbnail: picture01,
          },
          {
            original: picture02,
            thumbnail: picture02,
          },
          {
            original: picture03,
            thumbnail: picture03,
          },
          {
            original: picture04,
            thumbnail: picture04,
          },
    ];

    return ( 
        <div className="pictures gallery" showPlayButton = {false} showFullscreenButton = {false}>
            <ImageGallery items={galleryitems} />;
        </div>
     );
}
 
export default Pictures;