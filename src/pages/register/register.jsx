import logo from "../../assets/logo/svg/fixit_logo_text.svg";
import './register.css'
import { useCallback, useEffect } from "react";

const register = () => {

    useEffect(() => {
        if(window.innerWidth>window.innerHeight) {
            document.getElementById('form-register').style.height = '260px';
        } else{
            document.getElementById('form-register').style.height = 'fit-content';
        }
    })

  return (
    <>
      <div className="row justcenter wrap">
        <div className="col nowrap justcenter aligncenter">
          <img src={logo} width='100px' className="logo1" />
          <h2>Registro</h2>
          <div className="col wrap" id="form-register">
            <input
              type="text"
              name="registerName"
              id="Name"
              placeholder="Insira seu nome"
              className="input_white"
            />
            <input
              type="email"
              name="registerEmail"
              id="registerEmail"
              placeholder="Insira seu e-mail"
              className="input_white"
            />
            <input
              type="text"
              name="registerCpf"
              id="registerCpf"
              placeholder="Insira seu CPF"
              className="input_white"
            />
            <select name="estado" id="registerstado">
              <option value="null">Selecione um estado</option>
              <option value="ac">AC - Acre</option>
              <option value="al">AL - Alagoas</option>
              <option value="am">AM - Amazonas</option>
              <option value="ba">BA - Bahia</option>
              <option value="ce">CE - Ceará</option>
              <option value="df">DF - Distrito Federal</option>
              <option value="es">ES - Espírito Santo</option>
              <option value="go">GO - Goiás</option>
              <option value="ma">MA - Maranhão</option>
              <option value="mt">MT - Mato Grosso</option>
              <option value="ms">MS - Mato Grosso do Sul</option>
              <option value="mg">MG - Minas Gerais</option>
              <option value="pa">PA - Pará</option>
              <option value="pb">PB - Paraíba</option>
              <option value="pr">PR - Paraná</option>
              <option value="pe">PE - Pernambuco</option>
              <option value="pi">PI - Piauí</option>
              <option value="rj">RJ - Rio de Janeiro</option>
              <option value="rn">RN - Rio Grande do Norte</option>
              <option value="rs">RS - Rio Grande do Sul</option>
              <option value="ro">RO - Rondônia</option>
              <option value="rr">RR - Roraima</option>
              <option value="sc">SC - Santa Catarina</option>
              <option value="sp">SP - São Paulo</option>
              <option value="se">SE - Sergipe</option>
              <option value="to">TO - Tocantins</option>
            </select>
            <input
              type="password"
              name="registerSenha"
              id="registerSenha"
              placeholder="Insira sua senha"
              className="input_white"
            />
            <input
              type="password"
              name="repeatSenha"
              id="repeatSenha"
              placeholder="Repita sua senha"
              className="input_white"
            />
            <a href="/home"><button className="btn_cyan">Cadastrar-se</button></a>
            <a href="/" class="voltar">Voltar</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default register