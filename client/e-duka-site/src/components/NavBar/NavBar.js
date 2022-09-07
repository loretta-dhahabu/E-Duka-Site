import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter} from "react-icons/fa";

function NavBar () {
  return (
    // <div><h1>NavBar</h1></div>
    <header className="header-sec">
      <div className="media-contacts">
        <div className="phonecall">
          <FaPhoneAlt />: +2547100000
        </div>
        <div className="mail">
          <FaEnvelope />: e-duka-site_app@site.com
        </div>
        <div className="media-handles">
          <ul>
            <a>
              <li>
                <FaTwitter />
              </li>
            </a>
            <a>
              <li>
                <FaInstagram />
              </li>
            </a>
            <a>
              <li>
                <FaFacebook />
              </li>
            </a>
            <a>
              <li>
                <FaLinkedin />
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="nav_bar">
        <div className="logo">
          <h1>
            E-Duka-Site
          </h1>
        </div>
        <div className="routes">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="registeruser">Register_Users</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <button >Logout</button>
      </div>
    </header>
  );
}
export default NavBar;
