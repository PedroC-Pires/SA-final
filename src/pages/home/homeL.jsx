import React from 'react'
import './homeL.css'
import HeaderN from '../../components/headerN'
import { Link } from 'react-router-dom'
import homeIcon from '../../assets/icons/Home Page.svg'
import searchIcon from '../../assets/icons/Search.svg'
import emailIcon from '../../assets/icons/Email.svg'
import paperPlaneIcon from '../../assets/icons/Paper Plane.svg'
import peopleIcon from '../../assets/icons/People.svg'
import bookMarkIcon from '../../assets/icons/Bookmark.svg'
import moreIcon from '../../assets/icons/View More.svg'
import star from '../../assets/icons/star.svg'

const homeL = () => {
  return (
    <>
      <HeaderN></HeaderN>
      <div className='backgroundhomeL'>
        <div className='menu'>
          <Link><img src={homeIcon} /><span>Página Inicial</span></Link>
          <Link><img src={searchIcon} className='a' /><span>Explorar</span></Link>
          <Link><img src={emailIcon} className='a' /><span>Pedidos</span></Link>
          <Link><img src={paperPlaneIcon} /><span>Ofertas</span></Link>
          <Link><img src={peopleIcon} /><span>Prestadores</span></Link>
          <Link><img src={bookMarkIcon} /><span>Salvos</span></Link>
          <Link><img src={moreIcon} /><span>Mais</span></Link>
          <Link className='postar'>Postar</Link>
        </div>
        <div className='feed'>

        </div>
        <div className='cardslaterais'>
          <div>
              <img src="https://www.meyerengenharia.com.br/imagens/informacoes/obras-construcao-civil-03.jpg" alt="" />
              <div>
                <img src="https://pedreiroriodejaneiro.com.br/wp-content/uploads/2024/05/Diaria-de-um-pedreiro-na-barra-da-Tijuca-RJ.jpg" alt="" />
                <span>Jorge | <i><strong>Pedreiro</strong></i></span>
                <div>
                  <img src={star} />
                  <span>6.0</span>
                </div>
              </div>
              <span>Faço quase qualquer serviço, só pedir e eu vou.</span>
              <span><strong>R$500,00 - R$2500,00</strong></span>
            </div>
            <div>
              <img src="https://insp-therm.com.br/wp-content/uploads/2021/07/laudo-das-instalacoes-eletricas.jpg" alt="" />
              <div>
                <img src="https://www.guiadoconstrutor.com.br/assets/uploads/articles/eletricista-o-que-faz-o-profissional-dessa-profissao-22.png" alt="" />
                <span>Sérgio | <i><strong>Eletricista</strong></i></span>
                <div>
                  <img src={star} />
                  <span>2.0</span>
                </div>
              </div>
              <span>Resolvo circuitos e chuveiros queimados</span>
              <span><strong>R$100,00 - R$500,00</strong></span>
            </div>
            <div>
              <img src="https://www.tendaatacado.com.br/dicas/wp-content/uploads/2022/09/Topo-como-limpar-vidro-ok.jpg" alt="" />
              <div>
                <img src="https://portalvidrosam.com.br/wp-content/uploads/2023/02/como-limpar-vidros.jpg" alt="" />
                <span>Sandra | <i><strong>Faxineira</strong></i></span>
                <div>
                  <img src={star} />
                  <span>5.0</span>
                </div>
              </div>
              <span>Faço desde faxinas pequenas (1-2 cômodos) até faxinas grandes (5...</span>
              <span><strong>R$40,00 - R$250,00</strong></span>
            </div>
        </div>
      </div>
    </>
  )
}

export default homeL