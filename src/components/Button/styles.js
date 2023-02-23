import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  padding: 1.35rem 3.2rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
  border: none;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.BASE_COLOR};
`
