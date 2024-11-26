import React, { useState } from 'react';
import './login.css';
import back from '../../assets/icons/Back.svg';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
  // Estados para armazenar os valores dos inputs
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const voltar = () => {
    window.location.href = '/';
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de redirecionamento
    console.log('Email:', email);
    console.log('Senha:', senha);
    // Aqui você pode adicionar lógica para validação ou envio dos dados
    window.location.href = '/home'; // Redireciona após a lógica
  };

  return (
    <>
      <div className="backgroundl">
        <div className="containerl">
          <div className="voltar" onClick={voltar}>
            <img src={back} alt="voltar" />
            <p>Voltar</p>
          </div>

          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="emailLogin"
              placeholder="E-mail"
              className="inputLogin"
              value={email} // Conecta o estado
              onChange={handleEmailChange} // Atualiza o estado
            />
            <input
              type="password"
              name="senha"
              id="senhaLogin"
              placeholder="Senha"
              className="inputLogin"
              value={senha} // Conecta o estado
              onChange={handleSenhaChange} // Atualiza o estado
            />
            <button type="submit" className="botaoLogin">Entrar</button>
          </form>
          <p className="textoCinza">
            Não tem uma conta? Faça seu cadastro{' '}
            <a href="/cadastro">
              <strong>
                <u>aqui</u>
              </strong>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
