import React from "react";
import "../css/Facial.css";

//! Images
import FaceBanner from "../images/face/1920x600_Categoria_grande_Tratamientos_ordenador_EN.jpg";
import SkinSensation from "../images/face/SKIN-SENSATIONS-BODEGON-PROFESIONAL_2022_WEB-1.jpg";
import Q10Rescue from "../images/face/Q10-RESCUE-BODEGON-PROFESIONAL_2022_WEB-2.jpg";
import Purifying from "../images/face/PURIFYING-BODEGON-PROFESIONAL_2022_WEB.jpg";
import ShineStop from "../images/face/SHINE-STOP-BODEGON-PROFESIONAL_2022_WEB-1.jpg";
import oceanMiracle from "../images/face/OCEAN-MIRACLE-BODEGON-PROFESIONAL_2022_WEB-1.jpg";
import Nacar from "../images/face/ADVANCED-NACAR-BODEGON-PROFESIONAL_2022_WEB.jpg";

const Facial = () => {
  return (
    <>
      {/* Header Section */}
      <div className="header">
        <img className="responsive-image" src={FaceBanner} alt="banner" />
      </div>
      <div className="container">
        <h1>| Studio Mila Faro |</h1>
        <h2>| Tratamento Facial |</h2>
        <br />
        {/* TRATAMENTO PURIFICANTE. 6 Fases */}
        <h2>TRATAMENTO PURIFICANTE</h2>
        <div className="row">
          <div className="img-div col-md-6">
            <img className="face-img" src={Purifying} alt="purifying" />
          </div>
          <div className="col-md-6">
            <p className="title">Higiene oxigenante facial.</p>
            <p>
              PURIFYING é um plano de beleza purificador-oxigenante exclusivo
              que revoluciona os protocolos de cuidado facial com a Cosmetic
              Drone Technology e oxigênio puro.
            </p>
            <p>
              O Tratamento Purificante é muito mais do que uma limpeza; é um
              tratamento revolucionário que purifica a pele a todos os níveis
              sem necessitar de produtos complementares.
            </p>
            <p>
              Externamente, elimina a camada de poluentes superficiais e
              facilita a remoção de cravos. Internamente, desintoxica as
              células, oxigena-as e energiza-as, prolongando a sua vida e
              permitindo-lhes funcionar a 100%. PURIFYING TREATMENT combina
              tecnologia médica e cosmética profissional para oxigenar e
              purificar a pele, permitindo-lhe respirar novamente.
            </p>
            <p className="title">Para Quem?</p>
            <p>
              Destina-se a todos os tipos de pele, incluindo as de pele
              delicada, reativa ou danificada, que pretendem uma higiene facial
              adequada e potenciar os efeitos do próximo produto de beleza –
              quer seja de uso específico ou quotidiano. Fórmula unissex. Para
              ser usado durante todo o ano.
            </p>
            <p>
              <b>€40.00</b>
            </p>
          </div>
        </div>
        {/*  ShoneStop */}
        <br />
        <br />
        <h2>TRATAMENTO SHINESTOP</h2>
        <div className="row">
          <div className="col-md-6">
            <p className="title">EFEITO MATTE. Pele oleosa.</p>
            <p>
              TRATAMENTO PROFISSIONAL DE EFEITO MATTE PERSONALIZADO EM FASES DE
              DOSE ÚNICA COMBINADO COM OS BENEFÍCIOS DA MÁSCARA REAFIRMANTE DE
              ALGAS PEEL-OFF 2020. Uma máscara facial de alta tecnologia com
              terra de diatomáceas que produz um efeito desintoxicante e
              hidratante. Um produto cosmético inteligente para peles oleosas
              e/ou com brilho.
            </p>
            <p className="title">Para Quem?</p>
            <div>
              <p>
                Pele oleosa. Fórmula unissex, indicada para peles oleosas e/ou
                com brilho. Recomendado para todas as idades.
              </p>
            </div>
            <p>
              <b>€45,00</b>
            </p>
          </div>
          <div className="img-div col-md-6">
            <img className="face-img" src={ShineStop} alt="shineStop" />
          </div>
        </div>
        {/* SKIN SENSATIONS TREATMENT. 6 Phases. */}
        <h2>SKIN SENSATIONS TREATMENT</h2>
        <div className="row">
          <div className="img-div col-md-6">
            <img
              className="face-img"
              src={SkinSensation}
              alt="skin-sensation"
            />
          </div>
          <div className="description-left col-md-6">
            <p className="title">REVITALIZANTE. Anti-envelhecimento.</p>
            <p>
              TRATAMENTO REVITALIZANTE PERSONALIZADO PROFISSIONAL EM FASES DE
              DOSE ÚNICA COMBINADO COM OS BENEFÍCIOS DA MÁSCARA ALGAS PEEL-OFF
              GOLD 2080. Uma máscara facial de alta tecnologia com ouro 24
              quilates que nutre, revitaliza e reafirma a pele. Uma injeção de
              vitaminas e minerais. os oligoelementos essenciais para peles que
              precisam restaurar o equilíbrio perdido com o passar do tempo.
            </p>
            <p className="title">Para Quem?</p>
            <p>
              Pele madura. Fórmula unissex. Indicada para pieles maduras.
              Especialmente para aquelas que precisam de luminosidade e uma
              recarga de vitalidade imediata. Incluso pel sensível.
            </p>
            <p>
              <b>€45.00</b>
            </p>
          </div>
        </div>
        {/*  Q10 RESCUE. 6 phases. */}
        <br />
        <br />
        <h2>Q10 RESCUE</h2>
        <div className="row">
          <div className="description-right col-md-6">
            <p className="title">TRATAMENTO NUTRI</p>
            <p>
              O Centro de Pesquisa CASMARA visa reverter os três principais
              processos responsáveis pelo envelhecimento avançado da pele com o
              Q10 RESCUE. Este tratamento de choque restaurador altamente
              energizante, reequilibrante e nutritivo é formulado com
              ingredientes ativos e tecnologias de última geração, incluindo
              SMART Q10 GPS TECHNOLOGY, precursores hormonais e β-endorfina e
              ingredientes ativos inspirados em radiofrequência que prometem um
              rejuvenescimento extraordinário da pele.
            </p>
            <p>
              Um tratamento complementar exclusivo e essencial que proporciona
              recuperação absoluta, revertendo os sinais de envelhecimento
              avançado, eliminando aquela sensação de desconforto e
              rejuvenescendo intensamente a pele muito madura.
            </p>
            <p className="title">Para Quem?</p>
            <div>
              <p>
                Pele muito madura. Formulado tanto como tratamento de choque
                para rejuvenescer todos os tipos de pele muito madura (+60) como
                como tratamento complementar para peles maduras (+45),
                desnutridas, secas, desvitalizadas e/ou opacas que apresentem ou
                comecem a apresentar os desequilíbrios típicos da menopausa, pré
                ou pós-menopausa.
              </p>
            </div>
            <p>
              <b>€60,00</b>
              <br />
              <b>4 Sessões €200.00</b>
            </p>
          </div>
          <div className="img-div col-md-6">
            <img className="face-img" src={Q10Rescue} alt="liporedutor" />
          </div>
        </div>
        {/* TRATAMENTO MILAGROSO DO OCEANO */}
        <h2>TRATAMENTO MILAGROSO DO OCEANO</h2>
        <div className="row">
          <div className="img-div col-md-6">
            <img className="face-img" src={oceanMiracle} alt="ocean miracle" />
          </div>
          <div className="description-left col-md-6">
            <p className="title">FIRMANDOR. Anti-envelhecimento.</p>
            <p>
              TRATAMENTO REFIRMANTE PERSONALIZADO PROFISSIONAL EM FASES DE DOSE
              ÚNICA COMBINADO COM OS BENEFÍCIOS DO PEEL-OFF DE ALGAS IONIZÁVEL
              OCEAN MIRACLE MASK 3010. Uma máscara facial de alta tecnologia com
              algas wakame com efeito reafirmante.
            </p>
            <p>
              Uma máscara de última geração que permite o uso de técnicas de
              eletroporação e ionização graças à sua condutividade.
            </p>
            <p>
              Um produto cosmético com biotecnologia marinha que confere firmeza
              e efeito juntamente com os benefícios da água do mar.
            </p>
            <p className="title">Para Quem?</p>
            <p>
              Pele madura. Fórmula unisexo, indicada para peles maduras que
              necessitam de firmeza profunda.
            </p>
            <p>
              <b>€45.00</b>
            </p>
          </div>
        </div>
        {/*  TRATAMENTO NÁCAR AVANÇADO */}
        <br />
        <br />
        <h2>TRATAMENTO NÁCAR AVANÇADO</h2>
        <div className="row">
          <div className="description-right col-md-6">
            <p className="title">Esclarecedor e iluminador.</p>
            <p>
              Um tratamento facial antienvelhecimento clareador e clareador
              personalizado em fases monodose junto com os benefícios da NáCAR
              MASK 2085. Corrige manchas escuras e previne seu aparecimento
              enquanto proporciona um intenso cuidado antienvelhecimento.
            </p>
            <p>
              Formulado com ativos esfoliantes e renovadores, ativos
              antimelanogênese e despigmentantes e ativos antienvelhecimento e
              restauradores. Uma fórmula única para uma pele radiante, rodeada
              por um belo halo de luz.
            </p>
            <p className="title">Para Quem?</p>
            <div>
              <p>
                Apropriado para todos os tipos de pele. Especialmente formulado
                para peles com manchas escuras, tonalidade baça ou irregular,
                que desejam combater os sinais de envelhecimento.
              </p>
            </div>
            <p>
              <b>€60,00</b>
              <br />
              <b>4 Sessões €200.00</b>
            </p>
          </div>
          <div className="img-div col-md-6">
            <img className="face-img" src={Nacar} alt="nacar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Facial;
