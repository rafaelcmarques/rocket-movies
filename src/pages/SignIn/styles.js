import styled from "styled-components"
import BackgroundImg from "../../../src/assets/background.png"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  width: 63.5rem;
  padding: 0 16.3rem 0 13.4rem;
  display: flex;
  flex-direction: column;

  > header {
    margin-top: 23.5rem;

    h1 {
      font-size: 4.8rem;
      line-height: 6.3rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.BASE_COLOR};
    }

    p {
      font-size: 1.4rem;
      line-height: 1.8rem;
      font-weight: 400;
    }
  }

  > main {
    h2 {
      margin-block: 4.8rem;
    }

    .input-wrapper {
      div:nth-child(2) {
        margin-top: 0.8rem;
        margin-bottom: 2.4rem;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.6rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.COLORS.BASE_COLOR};
      text-align: center;
      margin-top: 4.2rem;
    }
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: cover;
`
