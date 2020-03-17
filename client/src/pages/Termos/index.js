import React from 'react';
import Header from '../../components/HeaderInformation';
import Footer from '../../components/Footer';

import './index.css';

const Termos = () => (
  <>
    <Header />
    <div className="termos container">
      <div className="termos--Inner">
      <h2 className="termos-title text-center">TERMOS DE USO</h2>
      <p>
        O objetivo deste termo de uso é assegurar a efetividade da transparência, privacidade e segurança dos utilizadores do nosso website, ressaltando que o conteúdo exibido em www.coronavirus.com.br é de caráter meramente informativo e não deve ser utilizado em nenhuma hipótese, de forma irresponsável, para orientações médicas ou comércio.
        O website www.coronavirus.com.br é um portal exclusivamente online tendo como objetivo principal, disponibilizar informações atualizadas sobre em relação ao(s) surto(a) do Coronavirus (COVID-19), que devem servir de apoio geral para a área da saúde brasileira.
        Não oferecemos aconselhamentos ou diagnósticos médicos, também não estamos vinculados aos órgãos competentes de saúde ou que prestam algum serviço médico. O website www.coronavirus.com.br é um serviço independente, não deve influenciar nenhuma decisão por parte de terceiros e nos isentamos do uso irresposável pelas informações aqui disponibilizadas.
        O website www.coronavirus.com.br utiliza como base de dados para atualização, as informações públicas e mais recentes disponibilizas em www.wikipedia.com.br e validadas pela Organização Mundial da Saúde. As informações são dispostas de forma genérica e intuitiva para ajudar a resumir a situação global.
        Ao acessar o website www.coronavirus.com.br o visitante está de acordo com este termo de uso.
      </p>

      <span className="font-weight-bold">1 – ACEITAÇÃO DOS TERMOS DE USO</span>
      <p>
        Após acessar e visualizar o link "Termos de Uso", o USUÁRIO declara estar ciente dos termos de uso do website www.coronavirus.com.br especificados abaixo: 
        As condições de utilização do website www.coronavirus.com.br, que passaremos a referir como os "Termos de Uso", poderão ser atualizadas ou modificadas a qualquer momento. O Usuário poderá revisar a versão mais recente dos Termos de Uso a qualquer tempo acessando o endereço https://www.coronvirus.com.br/termos-de-uso. Ao utilizar e citar como fonte os dados este website, o Usuário indica que leu e concordou, mesmo que tacitamente, com a versão mais recente dos Termos do Serviço e vinculará automaticamente o Usuário às regras ali contidas.
      </p>

      <span className="font-weight-bold"> 2 – DESCRIÇÃO DAS INFORMAÇÕES:</span>
      <p>
        O website www.coronavirus.com.br disponibiliza informações com estatísticas globais sobre o(s) surto(s) mais recentes do Coronavirus (COVID-19). Dentre as informações estão: total confirmado de casos de pessoas infectadas pelo vírus no mundo, total de mortes confirmadas no mundo, total de pessoas que se recuperaram das doenças ocasionadas pelo Coronavirus. Além disto é disponibilizado um mapa e gráfico para que as informações sejam visualmente interpretadas, também disponibilizamos não obrigatoriamente, notícias sobre o surto do Coronavirus. Não garantimos a total assertividade nas informações disponibilizadas, podendo haver margens de atraso nas informações ou imprecisão nas fontes utilizadas. Poderemos incluir ou excluir informações, assim que acharmos necessário, contudo, não nos responsabilizados por perdas de terceiros que utilizem nossas informações como base para algum estudo, pesquisa, estimativa, cálculos ou outra forma de uso. A utilização irresponsável das informações deste website, é de total responsabilidade de seu(s) utilizador(es).
      </p>

      <span className="font-weight-bold">3 - RESPONSABILIDADE:</span>
      <p>
        o website www.coronavirus.com.br não se responsabiliza pelas informações dos PROFISSIONAIS DE SAÚDE que utilizem as informações deste website como base para consultas, exames ou laudos realizados, acerca dos sintomas decorrentes do Coronavirus (COVID-19) que os pacientes decidam realizar.
      </p>

      <span className="font-weight-bold">4 – RESTRIÇÕES ESPECÍFICAS PARA USO INTERNACIONAL:</span>
      <p>
        O público deste website é brasileiro (Brasil), porém reconhecemos que o alcance da internet é mundial. O usuário que não estiver acessando este website em território nacional brasileiro, concorda em cumprir com as legislações locais que incide a conduta do usuário na rede web e sobre conteúdos aceitáveis no país em questão. Especificamente, o Usuário concorda em cumprir com todas as leis aplicáveis com relação à transmissão de dados técnicos a partir do Brasil ou do país no qual o Usuário resida.
      </p>

      <span className="font-weight-bold">5 - Violações:</span>
      <p>
        Favor reportar qualquer tipo de violação dos nossos Termos do Uso enviando um e-mail para contato@coronavirus.com.br. Qualquer denúncia será apurada em sigilo e de forma anônima.
      </p>
      </div>
    </div>
    <Footer />
  </>
);

export default Termos;
