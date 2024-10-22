import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Title>Howdy!</Title>
      <Image src="/aboutmeimg.png" alt="foto del creador de la pagina" />
      <Paragraph>
        Thank you so much for getting here! I'm Jezer, creator and maintainer of mwb-app. 
        I'd really love to get in touch with you to hear your feedback or just say hello! 😀
      </Paragraph>
      <Subtitle>REACH ME ON</Subtitle>
      <SocialIcons>
        <a href="https://www.linkedin.com/in/jezer-avila-cervantes-8987821ba/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com/jezeravila/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://github.com/JezerAvila" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </SocialIcons>
    </AboutMeContainer>
  );
}

// Styled-components para encapsular los estilos en el mismo archivo
const AboutMeContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4CAF50; /* Verde amigable */
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 20px auto;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: #333;
    transition: color 0.3s ease;

    &:hover {
      color: #4CAF50; /* Verde al hacer hover */
    }
  }
`;

export default AboutMe;
