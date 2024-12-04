import React, { useState } from 'react';
import './login.css';
import back from '../../assets/icons/Back.svg';
import axios from 'axios';  // Importa o axios para fazer a requisição HTTP
import { useNavigate } from 'react-router-dom'; // Usado para redirecionar o usuário

const Login = () => {
  // Estados para armazenar os valores dos inputs
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(''); // Para armazenar erros de login

  const navigate = useNavigate(); // Hook para redirecionar o usuário após login

  const voltar = () => {
    window.location.href = '/';
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  // Função handleLogin que será chamada no submit do formulário
  const handleLogin = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão de submit do formulário

    try {
      // Faz a requisição para o backend para buscar o cliente pelo e-mail
      const response = await axios.get(`http://localhost:3000/clientes?email=${email}`);
      
      // Verifica se o cliente foi encontrado e se a senha está correta
      const cliente = response.data;

      if (cliente && cliente.senha === senha) {
        // Se o login for bem-sucedido, redireciona para a página inicial ou outra página
        navigate('/feed'); // Altere '/feed' para a página desejada
      } else {
        setErro('E-mail ou senha incorretos. Verifique se os campos estão preenchidos corretamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErro('E-mail não encontrado, deseja criar uma conta?');
    }
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

            {erro && <div className="erro">{erro}</div>}

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
