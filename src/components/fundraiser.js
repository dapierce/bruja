import React from 'react';

// import Gallery from './gallery'
import fundraiserStyles from "./fundraiser.module.css";
import layoutStyles from "./layout.module.css";

import franciosInk from "../images/art-auction/franciosink.jpg";
import franciosInkThumb from "../images/art-auction/franciosink-thumb.jpg";
import franciosOld from "../images/art-auction/franciosold.jpg";
import franciosOldThumb from "../images/art-auction/franciosold-thumb.jpg";
import nicholas from "../images/art-auction/nicholas.jpg";
import nicholasThumb from "../images/art-auction/nicholas-thumb.jpg";
import deatonDoe from "../images/art-auction/deatonthedoe.jpg";
import deatonDoeThumb from "../images/art-auction/deatonthedoe-thumb.jpg";
import mystic from "../images/art-auction/mystic.jpg";
import mysticThumb from "../images/art-auction/mystic-thumb.jpg";
import lana from "../images/art-auction/lana.jpg";
import lanaThumb from "../images/art-auction/lana-thumb.jpg";

// const DEFAULT_IMAGES = [
//   { id: '1', src: franciosInk, thumbnail: franciosInkThumb, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//   { id: '2', src: franciosOld, thumbnail: franciosOldThumb, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//   { id: '3', src: nicholas, thumbnail: nicholasThumb, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//   { id: '4', src: deatonDoe, thumbnail: deatonDoeThumb, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//   { id: '5', src: mystic, thumbnail: mysticThumb, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//   { id: '6', src: lana, thumbnail: lanaThumb, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
// ];

export default ({ children }) => (
  <div>
    <div id="fundraiser" className={layoutStyles.anchor}></div>
    <div className={fundraiserStyles.container}>
    <div className={fundraiserStyles.header}>
      <h2>
        Bruja Salon Fundraiser<br/>
        <span className={layoutStyles.swirlDecor}>~</span><br/>
        <span className={layoutStyles.goldType}>Art Auction</span>
      </h2>
    </div>
    <div className={fundraiserStyles.artGallery}>
      <div className={fundraiserStyles.artGalleryPiece}>
        <a className={fundraiserStyles.pieceLink} href={franciosInk}><img className={fundraiserStyles.pieceImg} src={franciosInkThumb} alt="Francios"/></a>
        <div className={fundraiserStyles.pieceDesc}>
          <h3>
            <span className={layoutStyles.goldType}>#1 </span>
            Francois
          </h3>
          <p>
            Francois Noir Battilion digital watercolor 8x10 print and framed.<br/>
            Initial bid: $25
          </p>
        </div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="Q4RVWUPHK5XMN" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <div className={fundraiserStyles.artGalleryPiece}>
        <a className={fundraiserStyles.pieceLink} href={franciosOld}><img className={fundraiserStyles.pieceImg} src={franciosOldThumb} alt="Old Francios"/></a>
        <div className={fundraiserStyles.pieceDesc}>
          <h3>
            <span className={layoutStyles.goldType}>#2 </span>
            Old Francois
          </h3>
          <p>
            Old Francois in oil paint on canvas 24x34<br/>
            Initial bid: $300
          </p>
        </div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="P4XZNXRXTV48A" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <div className={fundraiserStyles.artGalleryPiece}>
        <a className={fundraiserStyles.pieceLink} href={nicholas}><img className={fundraiserStyles.pieceImg} src={nicholasThumb} alt="Nicholas Grant"/></a>
        <div className={fundraiserStyles.pieceDesc}>
          <h3>
            <span className={layoutStyles.goldType}>#3 </span>
            Nicholas Grant
          </h3>
          <p>
            Nicholas in watercolor and ink 8x10 in 11x14 frame, matted<br/>
            Initial bid: $75
          </p>
        </div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="LD3GZHJNPRD8U" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <div className={fundraiserStyles.artGalleryPiece}>
      <a className={fundraiserStyles.pieceLink} href={deatonDoe}><img className={fundraiserStyles.pieceImg} src={deatonDoeThumb} alt="Deaton the Doe"/></a>
        <div className={fundraiserStyles.pieceDesc}>
          <h3>
            <span className={layoutStyles.goldType}>#4 </span>
            Deaton the Doe
          </h3>
          <p>
            Deaton the Doe, oil on canvas 30x40.<br/>
            Initial bid: $500
          </p>
        </div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="6EFEKZLMEJ7US" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <div className={fundraiserStyles.artGalleryPiece}>
      <a className={fundraiserStyles.pieceLink} href={mystic}><img className={fundraiserStyles.wide} src={mysticThumb} alt="Mystic in Water"/></a>
        <div className={fundraiserStyles.pieceDesc}>
          <h3>
            <span className={layoutStyles.goldType}>#5 </span>
            Mystic in Water
          </h3>
          <p>
            Mystic in Water, arcylic, 34x24<br/>
            Initial bid: $200
          </p>
        </div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="US43CR4LFZ5QU" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <div className={fundraiserStyles.artGalleryPiece}>
      <a className={fundraiserStyles.pieceLink} href={lana}><img className={fundraiserStyles.pieceImg} src={lanaThumb} alt="Lana del Bae"/></a>
        <div className={fundraiserStyles.pieceDesc}>
          <h3>
            <span className={layoutStyles.goldType}>#6 </span>
            Lana del Bae
          </h3>
          <p>
            Lana del Bae, oil on canvas, 18x36 (unfinished)<br/>
            Initial bid: $175
          </p>
        </div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="B8SA4UFLDDTMN" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>

    </div>

    {/* <form name="auction" netlify>
      <h3>Make a bid!</h3>
      <p><label>Name <input type="text" required /></label></p>
      <p><label>Email <input type="email" required /></label></p>
      <p><label className={fundraiserStyles.artworkNum}>Artwork number <input type="number" min="1" max="7" required /></label></p>
      <p><label className={fundraiserStyles.priceInput}>Price <span>$</span><input type="number" min="0" required /></label></p>
      <p><button className={fundraiserStyles.button}>Place bid!</button></p>
    </form> */}
  </div>
  </div>
)