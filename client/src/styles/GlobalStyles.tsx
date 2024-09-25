import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --logo-font: "Orbitron", sans-serif;
    --primary-font: "Poppins", sans-serif;

    --header-height: 60px;
    --page-mx-width: 1200px;
    --elements-height: 45px;

    --color-primary: #259e3f;
    --color-black: #0f0f0f;
    --color-white: #ffffff;

    --color-red: #f34c4c;
    --color-green: #4cc043;
    --color-blue: #1941af;
    --color-yellow: #f7d323;

    --color-grey: #8d8d8d;
    --color-middlegrey: #dddddd;
    --color-lightgrey: #e6e6e6;
    --color-whitegrey: #f3f3f3;

    --color-oceanblue: #39649c;
    --color-darkblue: #0e76ff;
    --color-grafitti: #1b1b1b;
    --color-brown: #4b4237;
    --color-lightblue: #579efc;
    --color-lightgreen: #91d58d;
    --color-darkgreen: #459f3f;

    --default-br: 5px; // Border-radius
    --default-bshadow: 0px 0px 12px 2px rgb(0, 0, 0, 0.3); // Box-shadow
    --default-light-bshadow: 0 2px 3px rgba(0, 0, 0, .075); // Box-shadow
    --default-btn-mt: 8px;
    --default-gradient: linear-gradient(153deg, #1a1a1a 18%, rgba(74,74,74,1) 100%);
    --default-br: .5rem;

    --default-pdn: 25px; //
    @media (max-width: 768px) {
      --default-pdn: 20px; //
    }
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    font-family: var(--primary-font);
    font-optical-sizing: auto;
    font-style: normal;
    background-color: var(--color-white);
    background-image: linear-gradient(0deg, white, 30%, black, 100%);
    color: black;
    min-height: 1200px;
    padding: 0 10px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
  font-weight: 800;
  color: var(--color-black);
  text-transform: uppercase;
  line-height: 1.2;
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1.2rem;
}

h6 {
  font-size: 1rem;
}

p {
  font-size: 1rem;
  color: var(--color-black);
}

/* Tablet Breakpoint */
@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.875rem;
  }

  p {
    font-size: 0.95rem;
  }
}

/* Mobile Breakpoint */
@media (max-width: 480px) {
  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.875rem;
  }

  p {
    font-size: 0.9rem;
  }
}

/* Small Mobile Breakpoint */
@media (max-width: 360px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.875rem;
  }

  h6 {
    font-size: 0.75rem;
  }

  p {
    font-size: 0.875rem;
  }
}
`;

export const TruncatedText = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    display: inline-block; /* ou -webkit-box; */
    max-width: 100%; /* ou qualquer largura desejada */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const DefaultContainer = styled.div`
  max-width: var(--page-mx-width);
  margin: 0 auto;
  margin-top: 48px;
`;

export const HRBar = styled.div`
  width: 100%;
  height: 2px;
  background: var(--color-lightgrey);
  border-radius: var(--default-br);
`;
