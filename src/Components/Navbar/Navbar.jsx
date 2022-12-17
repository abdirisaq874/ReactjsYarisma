import React from 'react';
import './Navbar.css';
// import { images } from '../../Constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Navbar() {
  const [Toggle, SetToggle] = useState(false);
  const [active, setactive] = useState('home');

  const ToggleTrigger = () => SetToggle(!Toggle);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img
          src="https://st2.depositphotos.com/3687485/9010/v/600/depositphotos_90102796-stock-illustration-cinema-film-clapper-board-vector.jpg"
          alt="logo"
        />
      </div>

      <ul className="app__navbar-links">
        {['home', 'Search', 'watchList'].map((item) => {
          return (
            <li className="app__flex p-text" key={item}>
              <div />
              <a
                href={`#${item}`}
                style={active === item ? { color: '#313BAC' } : {}}
                onClick={() => {
                  setactive(item);
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => ToggleTrigger()} />
        {Toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => ToggleTrigger()} />
            <ul className="">
              {['home', 'Search', 'watchList'].map((item) => {
                return (
                  <li className="" key={item}>
                    <a
                      href={`#${item}`}
                      style={active === item ? { color: '#313BAC' } : {}}
                      onClick={() => {
                        setactive(item);
                      }}
                    >
                      {item}{' '}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

// style={active === item ? { backgroundColor: '#313BAC' } : {}
