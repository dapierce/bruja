import React from 'react';

import Gallery from './gallery'
import layoutStyles from "./layout.module.css";

import hair01 from "../images/hair/hair01.jpg";
import hair01Thumb from "../images/hair/hair01-thumb.jpg";
import hair02 from "../images/hair/hair02.jpg";
import hair02Thumb from "../images/hair/hair02-thumb.jpg";
import hair03 from "../images/hair/hair03.jpg";
import hair03Thumb from "../images/hair/hair03-thumb.jpg";
import hair04 from "../images/hair/hair04.jpg";
import hair04Thumb from "../images/hair/hair04-thumb.jpg";
import hair05 from "../images/hair/hair05.jpg";
import hair05Thumb from "../images/hair/hair05-thumb.jpg";
import hair06 from "../images/hair/hair06.jpg";
import hair06Thumb from "../images/hair/hair06-thumb.jpg";
import hair07 from "../images/hair/hair07.jpg";
import hair07Thumb from "../images/hair/hair07-thumb.jpg";
import hair08 from "../images/hair/hair08.jpg";
import hair08Thumb from "../images/hair/hair08-thumb.jpg";
import hair09 from "../images/hair/hair09.jpg";
import hair09Thumb from "../images/hair/hair09-thumb.jpg";
import hair10 from "../images/hair/hair10.jpg";
import hair10Thumb from "../images/hair/hair10-thumb.jpg";
import hair11 from "../images/hair/hair11.jpg";
import hair11Thumb from "../images/hair/hair11-thumb.jpg";
import hair12 from "../images/hair/hair12.jpg";
import hair12Thumb from "../images/hair/hair12-thumb.jpg";
import hair13 from "../images/hair/hair13.jpg";
import hair13Thumb from "../images/hair/hair13-thumb.jpg";
import hair14 from "../images/hair/hair14.jpg";
import hair14Thumb from "../images/hair/hair14-thumb.jpg";
import hair15 from "../images/hair/hair15.jpg";
import hair15Thumb from "../images/hair/hair15-thumb.jpg";

const DEFAULT_IMAGES = [
  { id: '1', src: hair01, thumbnail: hair01Thumb, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '2', src: hair02, thumbnail: hair02Thumb, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '3', src: hair03, thumbnail: hair03Thumb, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '4', src: hair04, thumbnail: hair04Thumb, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '5', src: hair05, thumbnail: hair05Thumb, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '6', src: hair06, thumbnail: hair06Thumb, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '7', src: hair07, thumbnail: hair07Thumb, caption: 'Photo 7', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '8', src: hair08, thumbnail: hair08Thumb, caption: 'Photo 8', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '9', src: hair09, thumbnail: hair09Thumb, caption: 'Photo 9', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '10', src: hair10, thumbnail: hair10Thumb, caption: 'Photo 10', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '11', src: hair11, thumbnail: hair11Thumb, caption: 'Photo 11', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '12', src: hair12, thumbnail: hair12Thumb, caption: 'Photo 12', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '13', src: hair13, thumbnail: hair13Thumb, caption: 'Photo 13', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '14', src: hair14, thumbnail: hair14Thumb, caption: 'Photo 14', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
  { id: '15', src: hair15, thumbnail: hair15Thumb, caption: 'Photo 15', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

export default ({ children }) => (
  <div>
    <Gallery></Gallery>
  </div>
)