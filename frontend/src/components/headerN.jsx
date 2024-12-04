import React from 'react'
import Logo from '../assets/logo/svg/fixit_logo.svg'
import './header.css'
import { Link } from 'react-router-dom'

const HeaderN = () => {
  return (
    <div className='headerN'>
      <div className='divLogo'>
        <img src={Logo} alt="Logo da FixIt" />
        <span>FixIt</span>
      </div>
      <div></div>
      <div className='divBotoes'>
        <Link to="/cadastro" className='botaoRegister'>Cadastro</Link>
        <span>ou</span>
        <Link to="/login" className='botaoLogin'>Login</Link>
      </div>
    </div>
  )
}

export default HeaderN