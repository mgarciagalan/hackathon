import React from 'react'
import {Global} from '@emotion/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'

const Fonts = () => {
  const GrandHeavy = getAssetUrl('static/fonts/Agrandir-GrandHeavy.woff')
  const GrandLight = getAssetUrl('static/fonts/Agrandir-GrandLight.woff')
  const Narrow = getAssetUrl('static/fonts/Agrandir-Narrow.woff')
  const Regular = getAssetUrl('static/fonts/Agrandir-Regular.woff')
  const WideLight = getAssetUrl('static/fonts/Agrandir-WideLight.woff')

  return (
    <Global
        styles={`
      @font-face {
        font-family: 'Agrandir-GrandHeavy';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(`+ GrandHeavy +`) format('woff');
      }
      @font-face {
        font-family: 'Agrandir-GrandLight';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(`+ GrandLight +`) format('woff');
      }
      @font-face {
        font-family: 'Agrandir-Narrow';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(`+ Narrow +`) format('woff');
      }
      @font-face {
        font-family: 'Agrandir-Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(`+ Regular +`) format('woff');
      }
      @font-face {
        font-family: 'Agrandir-WideLight';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(`+ WideLight +`) format('woff');
      }
      `}
    />)
  }

export default Fonts
