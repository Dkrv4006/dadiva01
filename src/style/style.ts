import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
   --primary: #00f;
   --secondary: #191923;
   --third:#252430;
}

*{
   margin: 0px;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body, html{
    background: #353535;
    overflow: visible;
    
    
}

a::after{
    text-decoration: none;
    text-decoration-color: red;
    
    
}
.dsds{

}

    
`