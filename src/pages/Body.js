import React from "react";
import BodyBanner from "../images/body/download-50.jpg";
import liporedutor from "../images/body/10F5C9B8-EB2A-4FE3-A15D-5BD016C52E81.jpeg";

const Body = () => {
  return (
    <>
      {/* Header Section */}
      <div className="header">
        <img className="responsive-image" src={BodyBanner} alt="banner" />
      </div>
      <div className="container">
        <h1>| Studio Mila Faro |</h1>
        <h2>| Spa do Corpo |</h2>
        <br />
        <h2>LIPOREDUTOR ANTI-CELULÍTICO</h2>

        {/* Liporedutor Anti-Celulitico */}
        <div className="row">
          <div className="img-div col-md-6">
            <img className="body-img" src={liporedutor} alt="liporedutor" />
          </div>
          <div className="description-left col-md-6">
            <p className="title">
              Tratamento Corporal Liporedutor, AntiCelulítico, Drenante e
              Reafirmador.
            </p>
            <p>
              Atua sobre os adipócitos (células gordas) impedindo que estas
              acumulem gordura no seu interior (efeito redutor) e favorece a sua
              eliminação (efeito drenante). A principal ação do Protocolo
              Liporedutor é reduzir a gordura acumulada e a celulite e
              combina-se com o seu efeito reafirmador, imprescindível em
              tratamentos redutores, para evitar que apareça a flacidez pela
              perda de volume no tecido adiposo.
            </p>
            <p className="title">Para Quem?</p>
            <div>
              <p>
                Todo o tipo de pele, idade e sexo. Formulado para eliminar a
                gordura em zonas localizadas e extensas. Recomenda-se a sua
                aplicação em pernas (coxas), abdómen, braços e glúteos.
                Sugerimos 10 sessões de tratamento.
              </p>
            </div>
            <p>
              <b>1 Sessão €70.00</b>
              <br />
              <b>5 Sessões €300.00</b>
              <br />
              <b>10 Sessões €500.00</b>
            </p>
          </div>
        </div>

        <br />
        <br />
        <h2>REAFIRMADOR + PREVENTIVO</h2>
        {/*  REAFIRMADOR + PREVENTIVO */}
        <div className="row">
          <div className="description-right col-md-6">
            <p className="title">Tratamento corporal reafirmador</p>
            <p>
              Atua sobre o colagénio e a elastina, substâncias responsáveis pela
              elasticidade e firmeza da pele, devolvendo-lhe a sua força e
              juventude. Indicado para tonificar seios, braços, abdómen e pernas
              e como tratamento de manutenção. O Protocolo Reafirmador é um
              tratamento especialmente desenhado para reafirmar, tonificar e
              redefinir o corpo graças à sinergia perfeita entre os ativos ultra
              reafirmadores e preventivos do surgimento de gordura. A principal
              ação do Protocolo Reafirmador é reafirmar a pele, mas está
              complementada pelo seu efeito preventivo-redutor, que evita o
              surgimento de celulite ou gordura acumulada, idóneo para ajudar a
              manter a silhueta perfeita.
            </p>
            <p className="title">Para Quem?</p>
            <div>
              <p>
                Todo o tipo de pele, idade e sexo. Formulado para reafirmar,
                tonificar e manter a silhueta. Recomenda-se a sua aplicação no
                colo, seios, pernas (coxas), abdómen, braços e glúteos.
                Sugerimos 10 sessões de tratamento.
              </p>
            </div>
            <p>
              <b>1 Sessão €70.00</b>
              <br />
              <b>5 Sessões €300.00</b>
              <br />
              <b>10 Sessões €500.00</b>
            </p>
          </div>
          <div className="img-div col-md-6">
            <img className="body-img" src={liporedutor} alt="liporedutor" />
          </div>
        </div>

        <br />
        <br />
        <h2>Intensive Remodeling</h2>

        {/* Liporedutor Anti-Celulitico */}
        <div className="row">
          <div className="img-div col-md-6">
            <img className="body-img" src={liporedutor} alt="liporedutor" />
          </div>
          <div className="description-left col-md-6">
            <p className="title">INTENSIVE REMODELING BODY TREATMENT</p>
            <p>
              É o tratamento corporal definitivo para remodelar a silhueta da
              maneira mais eficaz. Uma fórmula exclusiva e avançada com ALGAE
              TECH, baseada numa concentração muito elevada de algas marinhas
              extraordinárias. Novos ingredientes ativos que atuam no tecido
              adiposo, na retenção de líquidos e na flacidez, bem como no
              envelhecimento da pele do corpo.
            </p>
            <p className="title">Para Quem?</p>
            <div>
              <p>
                Tratamento corporal unissexo indicado para pessoas que procuram
                redefinir a sua silhueta e aperfeiçoá-la; assim como aqueles que
                procuram tratar uma área específica do corpo, como braços,
                abdómen, flancos, nádegas ou pernas. Recomendado para reduzir o
                volume geral ou eliminar a gordura localizada, reduzir
                visivelmente a pele tipo “casca-de-laranja”, aliviar a retenção
                de líquidos, combater a flacidez, amenizar estrias e
                rejuvenescer visivelmente a pele.
              </p>
            </div>
            <p>
              <b>1 Sessão €70.00</b>
              <br />
              <b>5 Sessões €300.00</b>
              <br />
              <b>10 Sessões €500.00</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
