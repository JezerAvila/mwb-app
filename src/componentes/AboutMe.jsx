import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import styled, { createGlobalStyle } from 'styled-components';
import { useTheme } from './ThemeContext';


const AboutMe = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <AboutMeContainer isDarkMode={isDarkMode}>
        <Title isDarkMode={isDarkMode}>Howdy!</Title>
        <Image src="/aboutmeimg.png" alt="foto del creador de la pagina" />
        <Paragraph>
          Thank you so much for getting here! I'm Jezer, creator and maintainer of mwb-app. 
          I'd really love to get in touch with you to hear your feedback or just say hello! 😀
        </Paragraph>
        <Subtitle isDarkMode={isDarkMode}>REACH ME ON</Subtitle>
        <SocialIcons isDarkMode={isDarkMode}>
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
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background-light: #f9f9f9;
    --color-background-dark: #000000;  /* #697477 */
    --color-text-light: #333;
    --color-text-dark: #FFFFFF;
    --color-hover: #FFC107;
  }

  body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'var(--color-background-dark)' : 'var(--color-background-light)')};
    color: ${({ isDarkMode }) => (isDarkMode ? 'var(--color-text-dark)' : 'var(--color-text-light)')};
  }
`;
// Styled-components para encapsular los estilos en el mismo archivo
const AboutMeContainer = styled.div`
  text-align: center;
  padding: 20px;
  color: ${({ isDarkMode }) => (isDarkMode ? 'var(--color-text-dark)' : 'var(--color-text-light)')};
  font-family: 'Arial', sans-serif;
  transition: background-color 0.5s ease, color 0.5s ease; 
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ isDarkMode }) => (isDarkMode ? 'var(--color-text-dark)' : 'var(--color-text-light)')};
  margin-bottom: 10px;
   transition: color 0.5s ease;
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
  color: ${({ isDarkMode }) => (isDarkMode ? 'var(--color-text-dark)' : 'var(--color-text-light)')};
  margin-bottom: 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: ${({ isDarkMode }) => (isDarkMode ? 'var(--color-text-dark)' : 'var(--color-text-light)')};
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-hover); 
    }
  }
`;

export default AboutMe;
