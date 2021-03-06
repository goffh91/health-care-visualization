import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
    <Global styles={css`
        body {
            position: relative;
            #app {
                .wrapper {
                    position: relative;
                    main {
                        width: 100%;
                        position: absolute;
                    }
                    .fade-enter {
                        opacity: 0;
                        z-index: 1;
                        &.fade-enter-active {
                            opacity: 1;
                            transition: opacity 500ms ease-in;
                        }
                    }
                    .fade-exit {
                        &.fade-exit-active {
                            header,
                            main,
                            footer {
                                z-index: -1;
                            }
                            main {
                                display: none;
                            }
                        }
                    }
                }
            }
        }

        @keyframes fadein {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        /* Firefox */
        @-moz-keyframes fadein {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        /* Safari and Chrome */
        @-webkit-keyframes fadein {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        /* Opera */
        @-o-keyframes fadein {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @-webkit-keyframes progress {
            0% {
                stroke-dasharray: 0 100;
            }
        }
        @keyframes progress {
            0% {
                stroke-dasharray: 0 100;
            }
        }

        .ant-table-row .ant-table-cell span {
            display: none;
        }
        .ant-table-expanded-row {
            border: none;
            .ant-table-cell {
                padding: 0;
            }
        }
    `}/>
);

export default GlobalStyles;
