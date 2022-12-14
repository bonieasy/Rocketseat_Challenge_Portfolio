import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #22212C;
    --green: #00FF00;
    --violet: #837e9f;
    --background1: #302F3D;
    --black: #000000;
    --pink: #CB92B1;
    --yellow: #E7DE79;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    margin: 25px 70px;
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; //14px
    }
}
body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
h1, h2, p {
    font-family: 'Merriweather Sans';
    color: var(--violet);
}

h1 {
    font-weight: 700;
}
p {
    font-weight: 300;
    font-style: normal;
}
`;