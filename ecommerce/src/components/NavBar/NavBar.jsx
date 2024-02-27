import React, { useState } from 'react';

import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';
import "./NavBar.css";
import sticker from "./assets/FromDaHood.jpeg"

import { SlLocationPin } from "react-icons/sl"



const NavBar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <>
            <nav>
                <div className='sticker'>
                    <img src={sticker} alt="sticker" />
                </div>

                <div className='navContainer-1'>
                    <div className='navLocation'>
                        <p> <SlLocationPin className='iconLocation' /> Catamarca 583 - Río Segundo, Córdoba</p>
                    </div>

                    <div className={` links ${clicked ? 'active' : ''}`}>
                        <ul>
                            <li>
                                <a className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Shampoo</a>
                                <a className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Acondicionador</a>
                                <a className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Nutricion</a>
                                <a className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Promos</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='burger-menu'>
                    <BurgerMenu clicked={clicked} handleClick={handleClick} />
                </div>

                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </nav>
        </>
    )
}

export default NavBar;

const BgDiv = styled.div`
  background-color: #000;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    margin-top: 120px;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;

  }
`