import styled from 'styled-components'

export const MenuTitle = styled.li`
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  color: rgb(133, 144, 165);
  padding: 12px 20px !important;
  margin-top: 1rem;
  letter-spacing: 0.05em;
  pointer-events: none;
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  > svg {
    margin-right: 10px;
    font-size: 1rem;
  }
`
export const ElementOption = styled.button`
  display: flex;
  justify-content: flex-start;
  padding: 0.625rem 1.5rem;
  color: #74788d !important;
  font-size: 13px;
  transition: all 0.4s;
  font-weight: 500;
  width: 100%;
  border: none;
  background-color: transparent;
  :hover {
    background-color: #eee;
  }
`
