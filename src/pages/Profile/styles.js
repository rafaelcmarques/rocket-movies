import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas:
    "header"
    "content";

  > header {
    grid-area: header;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUBD_BASE};
    display: flex;
    align-items: center;
    a {
      font-size: 1.6rem;
      line-height: 2.1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.BASE_COLOR};
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-left: 14.4rem;
    }
  }

  > main {
    grid-area: content;
    margin: 0 auto;
  }
`
export const Form = styled.form`
  width: 340px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin-top: -9rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    margin-bottom: 6.4rem;
  }

  > label {
    position: absolute;
    bottom: 6.4rem;
    right: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BASE_COLOR};
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`
