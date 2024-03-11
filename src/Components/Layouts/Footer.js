import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  })

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Localização</h5>
                <p>Rua Brasilis,333 </p>
                <p>DF, Asa Sul</p>
                <p>Brasil</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Período aberto:</h5>
                <p>Seg - Qui : 9h a 22h</p>
                <p>Sab - 10h a 20:30h</p>
                <p>Dom - 12h a 17h</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Peça Agora</h5>
                <p>Quaerat neque purus ipsum</p>
                <p>
                  <Link to="tel:99999888877" className="calling">
                    11 99999-9999
                  </Link>{" "}
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Siga-nos</h5>
                <p>Quaerat neque purus ipsum</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="/">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link to="/">
                      © 2024 Developed by (Desenvolvido por:){" "}
                      <span>MARCOS RIBEIRO</span>.
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Sobre nós.</Link>
                  </li>
                  <li>
                    <Link to="/">Termos de Uso</Link>
                  </li>
                  <li>
                    <Link to="/">Política de Privacidade</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Scroll to top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-arrow-up"></i>
        </div>

      )}

    </>

    
  );
}

export default Footer;
