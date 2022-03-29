import React from "react";

const Header = () => {
  return (
    <nav
      className='navbar is-four-fifths'
      role='navigation'
      aria-label='main navigation'>
      <div className='navbar-brand'>
        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' className='navbar-menu is-four-fifths'>
        <div className='navbar-end is-four-fifths'>
          <a className='navbar-item'>Home</a>

          <a className='navbar-item'>About Me</a>
          <a className='navbar-item'>Portfolio</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
