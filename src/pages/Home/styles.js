import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: grid;

  grid-template-rows: 11.6rem 71.6rem;
  grid-template-areas:
    "header"
    "content";
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 13.2rem;
  display: grid;
  grid-template-rows: 13.3rem auto;
  grid-template-areas:
    "home-header"
    "home-content";

  > header {
    grid-area: home-header;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 3.2rem;
    }

    button {
      width: 21.1rem;
    }
  }

  > main {
    grid-area: home-content;
    overflow-y: scroll;
  }
`
