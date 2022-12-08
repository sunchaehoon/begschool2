import { createGlobalStyle } from "styled-components";
import React from 'react';

const Globalstyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        user-select: none;
    }

    body {
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }

    article, aside, dialog, figure, footer, header, hgroup, nav, section {
        display: block;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default Globalstyle;