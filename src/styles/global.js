import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  font-size: 62.5%;
}

body{
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color:${({ theme }) => theme.COLORS.WHITE};

  font-family: 'Roboto Slab', serif;

}

body, input, button, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 1.6rem;
  outline: none;
}

a{
  text-decoration: none;
}

button, a{
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover{
  filter: brightness(0.9)
}

&::-webkit-scrollbar {
        width: 0.8rem;
        border: none
    }

&::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.COLORS.BASE_COLOR}; 
  border-radius: 10rem; 
}


`
