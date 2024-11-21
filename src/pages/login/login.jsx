import React from 'react'

const login = () => {
  return (
    <>
      <div className="row justcenter wrap">
        <div className="col nowrap justcenter aligncenter">
          <img src={logo} className="logo1" />
          <h4>Login</h4>
          <div className="col wrap" id="form-register">
            <input
              type="email"
              name="registerEmail"
              id="registerEmail"
              placeholder="E-mail"
              className="input_white"
            />
            <input
              type="password"
              name="registerSenha"
              id="registerSenha"
              placeholder="Senha"
              className="input_white"
            />
            <a href="/home"><button className="btn_cyan">Logar</button></a>
            <a href="/home"><button className="btn_cyan">Criar uma conta</button></a>
            <a href="/">Voltar</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default login