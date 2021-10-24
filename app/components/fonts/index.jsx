import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Agrandir-GrandHeavy';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('mobify/bundle/development/static/fonts/Agrandir-GrandHeavy.woff') format('woff');
      }
      @font-face {
        font-family: 'Agrandir-GrandLight';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('mobify/bundle/development/static/fonts/Agrandir-GrandLight.woff') format('woff');
      }
      @font-face {
        font-family: 'Agrandir-Narrow';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('mobify/bundle/development/static/fonts/Agrandir-Narrow.woff') format('woff');
      }
      @font-face {
        font-family: 'Agrandir-Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('mobify/bundle/development/static/fonts/Agrandir-Regular.woff') format('woff');
      }
      @font-face {
        font-family: 'Agrandir-WideLight';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('mobify/bundle/development/static/fonts/Agrandir-WideLight.woff') format('woff');
      }
      `}
  />
)

export default Fonts