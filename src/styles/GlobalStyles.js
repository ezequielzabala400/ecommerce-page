import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

    :root{
        --Orange: hsl(26, 100%, 55%);
        --PaleOrange: hsl(25, 100%, 94%);
        --VeryDarkBlue: hsl(220, 13%, 13%);
        --DarkGrayishBlue: hsl(219, 9%, 45%);
        --GrayishBlue: hsl(220, 14%, 75%);
        --LightGrayishBlue: hsl(223, 64%, 98%);
        --White: hsl(0, 0%, 100%);
        --Black: hsl(0, 0%, 0%);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: 'Kumbh Sans', sans-serif;
    }
` 