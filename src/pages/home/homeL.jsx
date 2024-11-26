import React from 'react'
import './homeL.css'
import HeaderL from '../../components/headerL'
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
      <HeaderL></HeaderL>
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
          <div>
            <div>
              <img className='user' src="https://www.queennet.com.br/wp-content/uploads/2012/10/freddie-mercury-prateado.jpg" alt="" />
              <span>Fredi <img width='20px' src="https://s3-alpha-sig.figma.com/img/bf46/bf1d/8bd8bcec52422847193f7c361fc0135c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bNL~YeAL4eGcLhwZYMPrlapxAtjAF1vcAX53yQokun8pV3SNJhwqNXBGOamONbbBQCn1s6eue9rn8OaVm-V8~1pXeKXbP2MVix5XrQmp13p-4UJPPQxWCv83vYRGLcYgQBW0XPy6H4PgLOxaGHQiad7enQVsWz50aE2mZUhMoOrEaQi6xEk3uzVP8ccWL9~m~MyijmprhHX47J~I7l2eJIoBm6Z2EJgx9vXYeXwHvSt-cPQi79NsAL2ndDs6AJmp6T5iTB0BMFVk7jdOO8sKO9HUpYb9CHGuie7jC2x2qrkc5z~O2rkz0DYuyUJxekc434UjEsEocyePLKS7GkM2eg__" alt="" /></span>
            </div>
            <p>Faço serviços de reparo de Ar-condicionado e Geladeiras.</p>
            <img src="https://s3-alpha-sig.figma.com/img/c6d6/0221/8c59a8ba3353a35e54e15b2200c50088?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-ykFzDTX9jfPkw79Ei~avFZp6H9eCXdXtiJRTkPNWuEBQiayltu8B1rL3HvAsZ8R1QvnTbwk3EhWlRQfDxijkMiL47Mdg3Vt6Utbu4enIm7~e~~uukH1DSknYEgx7CECo~2WVCz1M-CBS54Z64cT0K2pIV1-1Q21qW-DuekrIWJ1agS5hiRFpFzAYjEAXsfm4HreoJOCu3eAC~oHK5AajGkFx9WMg6ulvjgT4Y4vgpK~mMfueKwCO~lU0bmlToRgU6BA7zJE2y-I9FpP78HFyIy62DGhMmm1OJ3gpBzhI5fGNf1a8Xh~S8ahXoZ1Yf1kTLV~Pj-nAqVCTGBvTYWFw__" alt="" />
            <div className='aaaa'>
              <div>

              </div>
              <div>

              </div>
              <div>
                
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div>
              <img className='user' src="https://s3-alpha-sig.figma.com/img/bb89/dd34/47829113f73d5d623fb3e597b6e814d7?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nu36dFvRcw8OuSIyjFMUGOjF9TtOQpJzCJAMYFCun6B6nhSsd3A~DsDeMmAhjxGycjsKkVUudxltnlPy0AZu0ww8CyG6c7xkxHwW70UcrGmk1yexfVqwrglIs1ujokp-fsct6N088-fpXXGe4WMs9TteVz7~WFbKqAMA0UNokUAbGiwYRBVrF4Co4WPaBDpZT0ANtvZQKcaVDqaEhkgT99yYeMh2j5cxh3-fnvh46A9QOEK-ReJ~6yemDHRN2PTljd2E5~litzokpa1IDmDS86WOHNiQlXt6WC8FcmaT4HzVwgUUQgJwiL4utZhEtJaozQ~0JdyfrMvqFwI6sU0Phg__" alt="" />
              <span>Tiger <img width='20px' src="https://s3-alpha-sig.figma.com/img/bf46/bf1d/8bd8bcec52422847193f7c361fc0135c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bNL~YeAL4eGcLhwZYMPrlapxAtjAF1vcAX53yQokun8pV3SNJhwqNXBGOamONbbBQCn1s6eue9rn8OaVm-V8~1pXeKXbP2MVix5XrQmp13p-4UJPPQxWCv83vYRGLcYgQBW0XPy6H4PgLOxaGHQiad7enQVsWz50aE2mZUhMoOrEaQi6xEk3uzVP8ccWL9~m~MyijmprhHX47J~I7l2eJIoBm6Z2EJgx9vXYeXwHvSt-cPQi79NsAL2ndDs6AJmp6T5iTB0BMFVk7jdOO8sKO9HUpYb9CHGuie7jC2x2qrkc5z~O2rkz0DYuyUJxekc434UjEsEocyePLKS7GkM2eg__" alt="" /></span>
            </div>
            <p>Procuro alguem para arrumar meu chuveiro.</p>
            <img src="https://s3-alpha-sig.figma.com/img/8e52/ee2d/3c4904404afb384857b4724eec96252e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X57W7FobFkTbT-mK7tt0-VPPoDgNeLNtgmYncZmH-Isdplqr8hQghebgVk6cFdzdY7FSFjVV9BbEJDTbTbgCh2OCmJ7EGqcBWOgDi~4oV444stq4gfB9zze-odbrtf1B2FDYILsEJt3mfnveaWlgUD6HkQLH37XZcnVYRrOgQ5TN91Vk2inSEiMekMacvN~05ghRKRj-GfY543TjSiLD4r-oOKstbjua0P3ZAxAJdWzxQfjQwi6Ab91sU8Ln3nVDZ4YIsJcz-bf9IF7fkCA8FOHbb17RwHLnSxbB5dDbON9YpxVTlHhPIb6eKHwEOzdPQ50L2gFEnhRWuejOxXH~tQ__" alt="" />
          </div>
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