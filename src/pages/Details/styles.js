import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";
`
export const Content = styled.div`
  grid-area: content;

  width: 100%;
  padding: 0 13.2rem;
  margin: 4rem auto 0;

  overflow-y: scroll;

  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.COLORS.BASE_COLOR};
  }

  > header {
    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
    }

    > div:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 1.9rem;
      margin: 2.4rem 0;
    }

    .user-info {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.BASE_COLOR};
      }

      div:nth-child(1),
      div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }
    }

    .tags {
      margin: 4rem 0;
      display: flex;
      gap: 0.8rem;
    }
  }

  > main {
    p {
      text-align: justify;
    }
  }

  .button-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;

    > button {
      width: fit-content;
    }
  }
`
