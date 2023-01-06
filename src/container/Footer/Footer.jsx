import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>El3omda St, alasklany mosque, assiut, EGY </p>
        <p className='p__opensans'>+0200102635523 </p>
        <p className='p__opensans'>+0200103641256</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={ images.gericht } alt="footer logo" />
        <p className='p__opensans'>&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={ images.spoon } alt="spoon" className='spoon__img' style={ { marginTop: '15px' } } />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__foter-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>All days:</p>
        <p className='p__opensans'>All days available</p>
        <p className='p__opensans'>08:00am - 02:00pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Greicht, All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
