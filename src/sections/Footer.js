import React from 'react';
import {  getNetworks } from 'helpers/networkHelper';

const Footer = props => {

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{getNetworks(props.data)}</ul>

          <ul className="copyright">
            <li>&copy; Copyright 2017 Tim Baker</li>
            <li>
              Design by{' '}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
