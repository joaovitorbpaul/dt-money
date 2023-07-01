import { MagnifyingGlass } from "phosphor-react";
import { SearchInput, SearchButton, SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchInput type="text" placeholder="Busque uma transação"/>
      <SearchButton>
        <MagnifyingGlass size={20} weight="bold"/>
        Buscar
      </SearchButton>
    </SearchFormContainer>
  )
}