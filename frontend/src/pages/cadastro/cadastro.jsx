import React, { useState } from "react";
import axios from "axios";
import "./cadastro.css";
import back from "../../assets/icons/Back.svg";

const Cadastro_cliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [dataNasc, setDataNasc] = useState(""); // Estado para data de nascimento

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
        } else {
          setMunicipio("");
          alert("CEP não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        alert("Erro ao buscar informações do CEP.");
      }
    } else {
      // Limpa os campos se o CEP for inválido
      setMunicipio("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário
  
    // Validações
    if (!nome || !email || !cpf || !cep || !municipio || !senha || !confirmarSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
  
    const clienteData = {
      nome,
      email,
      cpf,
      cep,
      municipio,
      senha
    };
  
    try {
      // Envia os dados para o backend utilizando axios
      const response = await axios.post("http://localhost:3000/clientes", clienteData);
  
      if (response.status === 201) {
        //alert("Cadastro realizado com sucesso!");
        window.location.href = "/login"; // Redireciona para a página de login
      }
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      alert("Erro ao cadastrar cliente. Tente novamente.");
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              className="inputCadastro"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="date"
              name="dataNasc"
              id="dataNasc"
              className="inputCadastro"
              value={dataNasc}
              onChange={(e) => setDataNasc(e.target.value)}
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              className="inputCadastro"
              value={cpf}
              onChange={mascaraCPF}
              maxLength="14"
              inputMode="numeric"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="inputCadastro"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="dividirWidth">
              <input
                type="text"
                name="cep"
                placeholder="CEP"
                className="inputCadastro"
                value={cep}
                onChange={handleCepChange}
                maxLength="9"
                inputMode="numeric"
              />
              <input
                type="text"
                name="municipio"
                placeholder="Município"
                className="inputCadastro"
                value={municipio}
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
              Cadastrar
            </button>
          </form>
          <p className="textoCinza">
            Já tem sua conta? Entre{" "}
            <a href="/login">
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

export default Cadastro_cliente;
