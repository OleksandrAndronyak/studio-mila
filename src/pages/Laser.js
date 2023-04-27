import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import banner from "../images/Laser/silver-falls-derm-fullwidth-laser-hair-scaled.jpg";
import "../css/Laser.css";

const Laser = () => {
  return (
    <>
      {/* Header Section */}
      <div className="header">
        <img className="responsive-image" src={banner} alt="banner" />
        <h2 className="bottom-left-title">| Studio Mila Faro |</h2>
        <h4 className="bottom-left-title">| Depilação a Laser |</h4>
      </div>
      <h2>Preços</h2>
      <Container>
        <Row>
          <Col>
            <Table>
              <tbody>
                <tr>
                  <td>Buço ou queixo</td>
                  <td>A partir de €10,00</td>
                </tr>
                <tr>
                  <td>Entre Sobrancelhas</td>
                  <td>A partir de €5,00</td>
                </tr>
                <tr>
                  <td>Pescoço</td>
                  <td>A partir de €10,00</td>
                </tr>
                <tr>
                  <td>Rosto</td>
                  <td>A partir de €22,00</td>
                </tr>
                <tr>
                  <td>Maças de Rosto</td>
                  <td>A partir de €10,00</td>
                </tr>
                <tr>
                  <td>Axilas</td>
                  <td>A partir de €15,00</td>
                </tr>
                <tr>
                  <td>Braços Completos</td>
                  <td>A partir de €25,00</td>
                </tr>
                <tr>
                  <td>Mãos ou Pés</td>
                  <td>A partir de €10,00</td>
                </tr>
                <tr>
                  <td>Seios</td>
                  <td>A partir de €12,00</td>
                </tr>
                <tr>
                  <td>Linha Alba</td>
                  <td>A partir de €12,00</td>
                </tr>
                <tr>
                  <td>Peito ou Abdomen</td>
                  <td>A partir de €20,00</td>
                </tr>
                <tr>
                  <td>Costas</td>
                  <td>A partir de €30,00</td>
                </tr>
                <tr>
                  <td>Virilha Completa</td>
                  <td>A partir de €30,00</td>
                </tr>
                <tr>
                  <td>Gluteos</td>
                  <td>A partir de €20,00</td>
                </tr>
                <tr>
                  <td>Pernas Completa</td>
                  <td>A partir de €40,00</td>
                </tr>
                <tr>
                  <td>Meia Perna</td>
                  <td>A partir de €20,00</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="pack-container">
              <div className="pack-men-header">
                <h2>Pack Homem</h2>
              </div>
              <Table className="pack-body">
                <tbody>
                  <tr>
                    <td>
                      Peito Completo + Costas Completo
                      <span className="price">€65.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Peito + Pernas Completas
                      <span className="price">€80.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Peito + Costas + Perna Completa
                      <span className="price">€100.00</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col>
            <div className="pack-container">
              <div className="pack-women-header">
                <h2>Pack Mulher</h2>
              </div>
              <Table className="pack-body">
                <tbody>
                  <tr>
                    <td>
                      Axilas + Virilha <span className="price">€40.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Axilas + Virilha + Meia Perna
                      <span className="price">€60.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Axilas + Virilha + Perna Completa
                      <span className="price">€75.00</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Laser;
