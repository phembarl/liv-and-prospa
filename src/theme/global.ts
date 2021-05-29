import { css } from '@emotion/react';

const globalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'BR Firma Regular', sans-serif;
    }

    .link {
        color: inherit;
        text-decoration: none;
        outline: none;
    }

    .error-msg {
        color: #f75010;
        font-size: 0.65em;
        margin: 0.4em auto;
        font-weight: $medium;
        text-align: left;
        margin-left: 0.8em;
    }
`;

export { globalStyles };
