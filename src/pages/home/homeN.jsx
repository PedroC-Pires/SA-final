import React from 'react'
import HeaderN from '../../components/headerN.jsx'
import './homeN.css'
import star from '../../assets/icons/star.svg'

import img1 from 'url'

const Home = () => {
  return (
    <>
      <HeaderN />
      <div className='backgroundhomeN'>
        <div>
          <div className='titulo'>
            <h3>Bem vindo ao FixIt</h3>
            <h1>Melhores serviços<br />Melhores resultados</h1>
          </div>
          <div className='cards'>
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
              <img src="https://www.esgotecnicalitoral.com.br/wp-content/uploads/2018/07/como-escolher-encanador.jpg" alt="" />
              <div>
                <img src="https://www.guiadoconstrutor.com.br/assets/uploads/articles/servicos-hidraulicos-o-encanador-funcoes-e-atribuicoes.jpeg" alt="" />
                <span>Antônio | <i><strong>Encanador</strong></i></span>
                <div>
                  <img src={star} />
                  <span>3.5</span>
                </div>
              </div>
              <span>Conserto furos em canos e faço instalações.</span>
              <span><strong>R$500,00 - R$200,00</strong></span>
            </div>
            <div>
              <img src="https://www.clubedacostura.com.br/wp-content/uploads/2021/03/Como-divulgar-os-servicos-de-uma-costureira-no-bairro-5-dicas-que-sempre-funcionam.jpg" alt="" />
              <div>
                <img src="https://www.clubedacostura.com.br/wp-content/uploads/2021/03/Como-divulgar-os-servicos-de-uma-costureira-no-bairro-5-dicas-que-sempre-funcionam.jpg" alt="" />
                <span>Ana Costa | <i><strong>Costureira</strong></i></span>
                <div>
                  <img src={star} />
                  <span>4.5</span>
                </div>
              </div>
              <span>Costuro os melhores bordados de toda cidade, tenho 57 anos moro...</span>
              <span><strong>R$30,00 - R$120,00</strong></span>
            </div>
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
            <div>
              <img src="https://conecta.fg.com.br/wp-content/uploads/2019/11/jardineiro.png" alt="" />
              <div>
                <img src="https://dicas.maryhelp.com.br/wp-content/uploads/2020/06/descubra-quais-sao-as-principais-funcoes-de-um-jardineiro-20200529163528.jpg.jpg" alt="" />
                <span>Gabriel | <i><strong>Jardineiro</strong></i></span>
                <div>
                  <img src={star} />
                  <span>4.0</span>
                </div>
              </div>
              <span>O jardineiro é jesus e as árvores somos nozes. Capino lotes e tam...</span>
              <span><strong>R$50,00 - R$120,00</strong></span>
            </div>
          </div>
        </div>
        <div className='textos'>
          <h1>
          Precisando de ajuda?
          </h1>
          <h3>
          Nós conectamos você ao profissional ideal!
          </h3>
          <p>No FixIt, você encontra especialistas para todos os tipos de serviços, de maneira rápida, segura e personalizada. Digite o que precisa, e nós cuidamos do resto!</p>
        
          <h2>Por que escolher o FixIt?</h2>
          <ul>
            <li><strong>Praticidade:</strong> Encontre profissionais qualificados em poucos cliques.</li>
            <li><strong>Segurança:</strong> dos os prestadores passam por uma verificação criteriosa.</li>
            <li><strong>Diversidade de Serviços:</strong> Desde consertos domésticos até aulas particulares, temos o profissional certo para você.
            .</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home