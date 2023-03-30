import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;

  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: scroll;
  padding: 0 12.3rem;
  margin-top: 4rem;
  overflow-y: scroll;
  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.COLORS.BASE_COLOR};
  }
`

export const Form = styled.form`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  > h1 {
    margin-top: 2.4rem;
  }
  > div:nth-child(2) {
    display: flex;
    gap: 4rem;
  }

  > textarea {
    height: 27.4rem;
    resize: none;
    padding: 1.6rem;
    border: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div:nth-child(4) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  .bookmarks {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.4rem;
    padding: 1.6rem;

    background-color: #0d0c0f;
    border-radius: 1rem;
  }
  .button-wrapper {
    display: flex;
    gap: 4rem;
    button:nth-child(1) {
      width: 100%;
      border: none;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.BASE_COLOR};
    }
  }
`
