import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f3faff;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  h4, h5, hr {
    margin: 0;
  }
`

export default GlobalStyles
