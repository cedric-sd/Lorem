import styled from 'styled-components'

export const Container = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 15px 260px;
  box-shadow: 0px 2px 8px -2px rgba(0, 0, 0, 0.5);
`
export const Logo = styled.img`
  width: 100px;
`
export const CustomNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CustomUl = styled.ul`
  display: flex;
  margin-right: 25px;

  > li {
    margin-right: 20px;
    padding: 10px;
    border-radius: 10px;
  }
  > li:hover {
    background-color: #eee;
  }
  > li > a {
    font-weight: 600;
  }
`
export const CustomButton = styled.button`
  padding: 10px;
  background-color: white;
  border: 0.6px solid #ccc;
  border-radius: 5px;

  :hover {
    background-color: #eee;
    cursor: pointer;
  }
`
