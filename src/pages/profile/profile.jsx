import React from 'react'

const profile = () => {
  return (
    <>
        <h2>Perfil</h2>
            <p>Nome: {name}</p>
            <input
              type="Rua"
              name="Rua"
              id="Rua"
              placeholder="Rua"
              className="Rua"
            />
            <input
              type="Numero"
              name="Numero"
              id="Numero"
              placeholder="Numero"
              className="Numero"
            />
            <input
              type="Complemento"
              name="Complemento"
              id="Complemento"
              placeholder="Complemento"
              className="Complemento"
            />
    </>
  )
}

export default profile