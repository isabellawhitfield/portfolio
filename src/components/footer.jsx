import React from "react";
import Container from 'react-bootstrap/Container';
import { GitHub as GitHubIcon } from 'react-feather';

const Footer = () => {
  return (
    <div className="footer text-light py-3 py-md-5 mt-3">
      <Container>
        <div className="row">
          <div className="col-md-4 mb-3">
            Copyright &copy; {new Date().getFullYear()} Isabella Whitfield
          </div>
          <div className="col-md-8 mb-3">
            <div className="footer__item"><a className="footer__link" href="https://github.com/isabellawhitfield"><GitHubIcon/> isabellawhitfield</a></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
