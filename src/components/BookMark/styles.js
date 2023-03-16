import styled from "styled-components"

export const Container = styled.div`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  border-radius: 1rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  svg {
    color: ${({ theme }) => theme.COLORS.BASE_COLOR};
  }

  input {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 18rem;
  }

  button {
    background: none;
    border: none;
  }
`
