import React from "react";
import "../css/Home.css";

//! Import images
import banner from "../images/home/Banner-1.jpg";
import face from "../images/home/face.jpg";
import body from "../images/home/body.jpg";
import foot from "../images/home/feet.jpg";
import laser from "../images/home/laser-hair-removal.jpg";

//! Import Icons
import { TfiLocationPin } from "react-icons/tfi";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Home = () => {
  return (
    <>
      {/* Header Section */}
      <div className="header">
        <img className="responsive-image" src={banner} alt="banner" />
      </div>

      <div className="container">
        {/* Button for Bookings  */}
        <a href="whatsapp://send?text=Boa tarde!&phone=+351937515934">
          <button className="button">
            Clique aqui e faça o seu agendamento
          </button>
        </a>
        <div className="row">
          {/* Description Section  */}
          <div className="description col-md-12">
            <h1>| Studio Mila Faro |</h1>
            <h2>Facial | Corpo | Pés | Depilação a Laser</h2>
            <p>
              STUDIO MILA | locatizado no centro de Faro, estamos entusiasmados
              em lançar nosso novo espaço de tratamento. Criamos uma nova e bela
              sala de tratamento, corpo, rosto, e pés onde ofereceremos uma gama
              completa de tratamentos usando produtos naturais de alta
              performance para o cuidado da pele provenciados pela marca
              Cashmara.
            </p>
            <ul>
              <li className="address">
                <address>
                  <span className="location">
                    <TfiLocationPin />
                  </span>
                  Largo do vinte e cinco de abril, Pça dos Poetas 1D, 8000-157
                  Faro, Portugal
                </address>
              </li>
              <li>
                <a
                  className="whatsapp"
                  href="whatsapp://send?text=Boa tarde!&phone=+351937515934"
                >
                  <BsWhatsapp />
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://instagram.com/studiomillaa?igshid=YmMyMTA2M2Y="
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/profile.php?id=100076251019354"
                >
                  <BsFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-21">
            <h1>Facial</h1>
          </div>
        </div>
        <div className="row">
          {/* Facial Section  */}
          <div className="col-md-6">
            <img className="face-img" src={face} alt="facial" />
          </div>
          <div className="facial-description col-md-6">
            <p>
              Experimente a indulgência do tratamento facial de máscara de ouro
              24k - um tratamento luxuoso que utiliza a mais recente tecnologia
              em cuidados com a pele para fornecer os nutrientes essenciais que
              sua pele precisa para se sentir mais jovem, brilhante e radiante.
              Nossa máscara de ouro 24k é composta por partículas finas de ouro
              puro, que são facilmente absorvidas pela pele e proporcionam um
              efeito de rejuvenescimento instantâneo. Além disso, a máscara de
              ouro 24k ajuda a reduzir a aparência de linhas finas e rugas, bem
              como a hidratar profundamente a pele, deixando-a macia e suave ao
              toque. Deixe nossos especialistas em cuidados com a pele cuidarem
              de você e experimente a luxuosa sensação de uma pele revitalizada,
              radiante e rejuvenescida. Agende sua sessão de tratamento facial
              de máscara de ouro 24k hoje e experimente a indulgência que sua
              pele merece.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-21">
            <h1>Corpo</h1>
          </div>
        </div>

        {/* Body Section  */}
        <div className="row">
          <div className="body-description col-md-6">
            <p>
              Dê ao seu corpo a remodelação que ele merece com o nosso
              tratamento corporal de remodelação intensiva. Nossa fórmula
              exclusiva e avançada, baseada em uma concentração elevada de algas
              marinhas extraordinárias, oferece resultados incríveis. Nosso
              tratamento utiliza os mais recentes ingredientes ativos para atuar
              no tecido adiposo, na retenção de líquidos e na flacidez, bem como
              no envelhecimento da pele do corpo. Com a nossa tecnologia
              avançada ALGAE TECH, podemos personalizar o tratamento de acordo
              com suas necessidades específicas e garantir que você obtenha os
              resultados desejados. Nossos especialistas em cuidados com o corpo
              trabalharão com você para criar um plano de tratamento
              personalizado que atenda às suas necessidades exclusivas e o ajude
              a alcançar o corpo dos seus sonhos. Não deixe a falta de confiança
              em seu corpo afetar sua vida, experimente o nosso tratamento de
              remodelação corporal intensiva e veja os resultados incríveis por
              si mesmo. Agende sua consulta hoje e comece sua jornada para um
              corpo mais confiante e bonito.
            </p>
          </div>
          <div className="col-md-6">
            <img src={body} alt="body" id="body-img" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-21">
            <h1>Pés</h1>
          </div>
        </div>

        {/* Foot Section  */}
        <div className="row">
          <div className="col-md-6">
            <img className="face-img" src={foot} alt="foot" />
          </div>
          <div className="foot-description col-md-6">
            <p>
              Se você sofre de micose, fungos ou tem pés diabéticos, sabe o quão
              difícil pode ser encontrar um tratamento eficaz. Nós entendemos e
              estamos aqui para ajudá-lo. Nossa equipe de especialistas em
              cuidados com os pés tem a experiência e os conhecimentos
              necessários para tratar essas condições e aliviar os sintomas
              desconfortáveis que elas podem causar. Nossos tratamentos são
              personalizados para suas necessidades específicas e usamos apenas
              produtos de alta qualidade para garantir a eficácia e segurança do
              tratamento. Deixe-nos cuidar dos seus pés e ajudá-lo a se sentir
              mais confortável e confiante novamente. Agende uma consulta com
              nossa equipe de especialistas em cuidados com os pés e comece a
              desfrutar de pés saudáveis e felizes novamente.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-21">
            <h1>Depilação a Laser</h1>
          </div>
        </div>

        {/* Laser Section  */}
        <div className="row">
          <div className="laser-description col-md-6">
            <p>
              Esqueça a preocupação com a depilação diária e experimente a
              suavidade duradoura da depilação a laser. Nossa tecnologia de
              ponta e equipe de profissionais altamente treinados garantem que o
              processo de remoção de pelos seja indolor e eficaz, deixando sua
              pele suave e macia por semanas. Esqueça os pelos encravados e a
              irritação da lâmina de barbear e deixe-nos cuidar de sua pele. Com
              a depilação a laser, você pode desfrutar de uma pele lisa e sem
              pelos, sem esforço e por muito tempo. Agende sua sessão hoje e
              descubra a liberdade da depilação a laser.
            </p>
          </div>
          <div className="col-md-6">
            <img src={laser} alt="laser" className="face-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
