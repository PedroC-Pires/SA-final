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

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !senha) {
      alert("Por favor, preencha o e-mail e a senha.");
      return;
    }
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha);
    if (usuarioEncontrado) {
      window.location.href = "/feed";
    } else {
      alert("E-mail ou senha incorretos. Tente novamente.");
    }
    setEmail("");
    setSenha("");
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
          <form onSubmit={handleLogin}>
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
