import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-left: 2.4rem;

  > input {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
