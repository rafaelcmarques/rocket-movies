import styled from "styled-components"

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 0.8rem 1.6rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 0.8rem;
`
