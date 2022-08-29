import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Poppins", sans-serif;
}
*, *:before, *:after {
  box-sizing: inherit;
  font-family: "Poppins", sans-serif;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
}
body{
  font-weight: 400;
  font-size: 1.2rem; 
  width: 100%;  
  max-width: 1200px; 
  margin: auto;
}
b{font-weight: 700}
h1{
  font-size: 2rem;
}
h2 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}
h4{
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
img {
  max-width: 100%;
  height: auto;
}
input{
  font-size: 1.6rem;
}
button,
input,
select,
textarea{
  &:focus{
    outline: none;
  }
}


`;
