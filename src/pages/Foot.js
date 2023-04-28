import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import banner from "../images/foot/chiropody-banner.jpg";

const Foot = () => {
  return (
    <>
      {/* Header Section */}
      <div className="header">
        <img className="responsive-image" src={banner} alt="banner" />
      </div>
      <h1>| Studio Mila Faro |</h1>
      <h2>| Spa dos Pés |</h2>
      <br />
      <h2>Preços</h2>
      <Container>
        <Row>
          <Col>
            <Table>
              <tbody>
                <tr>
                  <td>Pedicure Medical - Pé Diabético</td>
                  <td>€30,00</td>
                </tr>
                <tr>
                  <td>Pedicure - Micose, Fungos & Pé Atleta</td>
                  <td>Preço sob. Consulta</td>
                </tr>
                <tr>
                  <td>Construção de Unha Medical</td>
                  <td>€20,00 por Unha</td>
                </tr>
                <tr>
                  <td>Pedicure - Exfoliação & Hidratação</td>
                  <td>€20,00</td>
                </tr>
                <tr>
                  <td>Pedicure com Verniz de Gel</td>
                  <td>€30,00</td>
                </tr>
                <tr>
                  <td>Pintura Verniz de Gel</td>
                  <td>€15,00</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Foot;
