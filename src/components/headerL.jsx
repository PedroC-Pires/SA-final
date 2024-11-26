import React from 'react'
import Logo from '../assets/logo/svg/fixit_logo.svg'
import './header.css'
import { Link } from 'react-router-dom'

const HeaderL = () => {
  return (
    <div className='headerN'>
      <div className='divLogo'>
        <img src={Logo} alt="Logo da FixIt" />
        <span>FixIt</span>
      </div>
      <div></div>
      <div className='divBotoes'>
        <Link to="/" className='botaoRegister'>Deslogar</Link>
      </div>
    </div>
  )
}

export default HeaderL