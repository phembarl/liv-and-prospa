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
        color: #ed1c24;
        font-size: 0.65em;
        margin: 0.4em auto;
        font-weight: $medium;
        text-align: left;
        margin-left: 0.8em;
    }

    /* Mobile side drawer */
    .SideDrawer-modal {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        box-shadow: 0 3px 6px #00000029;
        width: 80%;
        overflow-x: hidden;
        display: flex;
        z-index: 1000000;
        margin: 0;
        padding: 0;
    }

    .SideDrawer-overlay {
        background-color: #33475b59;
    }

    @keyframes customEnterOverlayAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes customLeaveOverlayAnimation {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes customEnterModalAnimation {
        0% {
            width: 0%;
        }
        100% {
            width: 80%;
        }
    }

    @keyframes customLeaveModalAnimation {
        0% {
            width: 80%;
        }
        100% {
            width: 0%;
        }
    }

    @media (min-width: 850px) {
        .SideDrawer-modal,
        .SideDrawer-overlay {
            display: none;
        }
    }
`;

export { globalStyles };
