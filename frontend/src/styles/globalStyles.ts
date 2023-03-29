import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'Vollkorn', serif;
    box-sizing: border-box;
    list-style: none;
    font-weight: 600;
}

:root {
    --color1: #d9d9db;
    --color2: #b7ae8f;
    --color3: #978f84;
    --color4: #4a362f;
    --color5: #121210;
}

h1 {
    font-family: 'Abril Fatface', cursive;
}

section {
    position: relative;
}

label {
    color: white
}

h3 {
    color: white;
    font-weight: 700;
}

.cover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.25;
}


form {
    background-color: var(--color2);
    
    width: 35%;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    opacity: 0.8;
}

input {
    border: none;
    border-radius: 4px;
    padding: 8px;
    margin: 10px;
}

button {
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
    color: var(--color4);
}

button:hover {
    background-color: var(--color4);
    color: white;
    transition-delay: 2s;
    transition: 2s background-color;
}

.page-title {
    font-size: 25px;
}
`