import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3.2rem;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUBD_BASE};
  border-radius: 1.6rem;
  margin-bottom: 2.4rem;

  //Link
  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};

    h1 {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-bottom: 0.8rem;
    }

    p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin: 1.5rem 0;
    }

    .tags {
      display: flex;
      gap: 0.8rem;
    }
  }
`
