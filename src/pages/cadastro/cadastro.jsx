import React, { useState } from "react";
import axios from "axios";
import "./cadastro.css";
import back from "../../assets/icons/Back.svg";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [bairro, setBairro] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Função para aplicar máscara no CPF
  const mascaraCPF = (event) => {
    let valor = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (valor.length <= 3) {
      setCpf(valor);
    } else if (valor.length <= 6) {
      setCpf(valor.replace(/(\d{3})(\d{1,})/, "$1.$2"));
    } else if (valor.length <= 9) {
      setCpf(valor.replace(/(\d{3})(\d{3})(\d{1,})/, "$1.$2.$3"));
    } else {
      setCpf(valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, "$1.$2.$3-$4"));
    }
  };

  // Função para aplicar máscara no CEP
  const mascaraCEP = (valor) => {
    const somenteNumeros = valor.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (somenteNumeros.length <= 5) return somenteNumeros;
    return somenteNumeros.replace(/(\d{5})(\d{1,})/, "$1-$2");
  };

  // Função para lidar com mudanças no campo de CEP
  const handleCepChange = async (event) => {
    const valorFormatado = mascaraCEP(event.target.value);
    setCep(valorFormatado); // Atualiza o estado com o CEP formatado

    // Verifica se o CEP possui 8 dígitos para buscar informações
    if (valorFormatado.replace(/\D/g, "").length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${valorFormatado.replace(/\D/g, "")}/json/`
        );

        if (response.data && !response.data.erro) {
          setMunicipio(response.data.localidade || "");
          setBairro(response.data.bairro || "");
        } else {
          setMunicipio("");
          setBairro("");
          alert("CEP não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        alert("Erro ao buscar informações do CEP.");
      }
    } else {
      // Limpa os campos se o CEP for inválido
      setMunicipio("");
      setBairro("");
    }
  };

  const voltar = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="background">
        <div className="containerc">
          <div className="voltar" onClick={voltar}>
            <img src={back} alt="voltar" />
            <p>Voltar</p>
          </div>

          <h1>Cadastro</h1>
          <form action="/home">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              className="inputCadastro"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="inputCadastro"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              className="inputCadastro"
              value={cpf}
              onChange={mascaraCPF}
              maxLength="14"
              inputmode="numeric"
            />
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              className="inputCadastro"
              value={cep}
              onChange={handleCepChange}
              maxLength="9"
              inputmode="numeric"
            />
            <div className="dividirWidth">
              <input
                type="text"
                name="municipio"
                placeholder="Município"
                className="inputCadastro"
                value={municipio}
                readOnly
              />
              <input
                type="text"
                name="bairro"
                placeholder="Bairro"
                className="inputCadastro"
                value={bairro}
                readOnly
              />
            </div>
            <div className="dividirWidth">
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                className="inputCadastro"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <input
                type="password"
                name="confirmarSenha"
                placeholder="Confirmar senha"
                className="inputCadastro"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </div>
            <button type="submit" className="botaoCadastro">
              Entrar
            </button>
          </form>
          <p class="textoCinza">Já tem sua conta? Entre <a href="/login"><strong><u>aqui</u></strong></a></p>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
