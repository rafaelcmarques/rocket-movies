import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    width: 700;
    margin-right: 6.4rem;
    color: ${({ theme }) => theme.COLORS.BASE_COLOR};
  }
`

export const Search = styled.div`
  width: 100%;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;

  > a {
    img {
      height: 6.4rem;
      width: 6.4rem;
      border-radius: 50%;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 19.8rem;
    align-items: flex-end;

    a {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      background-color: transparent;
      border: none;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      width: fit-content;
    }
  }
`
