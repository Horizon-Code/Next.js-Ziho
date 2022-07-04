import css from 'styled-jsx/css';
import {breakpoints,fonts,colors} from '../styles/theme';
import {addOpacity} from '../styles/utils';

const backgroundColor = addOpacity(colors.primary, 1)

export const globalStyles = css.global`
html,
body {
    background-image: 
    radial-gradient(${backgroundColor} 1px, transparent 1px),
    radial-gradient(${backgroundColor} 1px, transparent 1px);
    background-position: 0 0,25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    }

    a {
        color: inherit;
        text-decoration: none;
}

    * {
        box - sizing: border-box;
}`

export default css`
div{
    display: grid;
    height: 100vh;
    place-items: center;
}
main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0,0,0, .2);
    height: 100%;
    width: 100%;
}

@media (min-width: ${breakpoints.mobile}) {
    main {
        height: 90vh;
        width: 450px;
    }
}
.loader {
  width: 60px;
}

.loader-wheel {
  animation: spin 1s infinite linear;
  border: 2px solid rgba(30, 30, 30, 0.5);
  border-left: 4px solid #fff;
  border-radius: 50%;
  height: 50px;
  margin-bottom: 10px;
  width: 50px;
}

.loader-text {
  color: #fff;
  font-family: arial, sans-serif;
}

.loader-text:after {
  content: 'Loading';
  animation: load 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes load {
  0% {
    content: 'Loading';
  }
  33% {
    content: 'Loading.';
  }
  67% {
    content: 'Loading..';
  }
  100% {
    content: 'Loading...';
  }
}
`