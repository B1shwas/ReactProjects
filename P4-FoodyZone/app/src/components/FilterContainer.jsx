import styled from "styled-components"

const FilterContainer = ({selectFood, filterBtns, selectedBtn}) => {
  return (

    <FilterC>
        {filterBtns.map((value) => (
            <Button key={value.name} onClick={()=>selectFood(value.type)} $isSelected={selectedBtn == value.type}>{value.type}</Button>
        ))}
    </FilterC>
  )
}

export default FilterContainer

export const Button = styled.button`
    background-color: ${({$isSelected}) => ($isSelected? '#ab2b2b' : '#ff4343')};
    padding: 6px 12px;
    border-radius: 5px;
    border: none;
    color: white;
    outline: none;
    text-transform: capitalize;
    &:hover{
        background-color: #ab2b2b;
    }
`

const FilterC = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    padding-bottom: 40px;

`