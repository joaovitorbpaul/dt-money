import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 1.5rem;
  padding: 0 1.5rem;

  display: flex;
  gap: 1rem;
  height: 54px;
`

export const SearchInput = styled.input`
  width: 100%;
  background: ${props => props.theme["gray-900"]};
  border: 0;
  border-radius: 6px;
  padding: 0 1rem;
`

export const SearchButton = styled.button`
  color: ${props => props.theme["green-300"]};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  border: 1px solid ${props => props.theme["green-300"]};
  padding: 0 2rem;
  border-radius: 6px;

  &:hover {
    background: ${props => props.theme["green-500"]};
    border: 1px solid ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  }
`