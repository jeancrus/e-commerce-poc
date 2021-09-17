import { createGlobalStyle, css } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyles = createGlobalStyle`
   ${({ theme }) => css`
     * {
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
     }

     html {
       font-size: 62.5%;
       font-family: ${theme.font.family};
     }

     html,
     body,
     #__next {
       height: 100%;
     }

     body {
       background: ${theme.colors.darkBlack} url('img/background.svg');
       -webkit-font-smoothing: antialiased;
     }

     input,
     button {
       font-family: ${theme.font.family};
     }

     #__next {
       max-width: 1020px;
       margin: 0 auto;
       padding: 0 20px 50px;
     }

     button {
       cursor: pointer;
     }

     #__next {
       > div,
       main {
         margin-top: 150px;
       }
     }
   `}
`

export default GlobalStyles
