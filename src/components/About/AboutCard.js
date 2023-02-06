import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aniket Prajapati </span>
            from <span className="purple"> Jaipur, India.</span>
            <br />I am a pursuing BTech from National Institute Of Technology Jaipur
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gymnasium
            </li>
           
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Talking Is Less ! Show Me Code"{" "}
          </p>
          <footer className="blockquote-footer">Aniket</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
