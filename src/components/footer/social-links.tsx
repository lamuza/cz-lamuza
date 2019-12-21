import React from "react"
import styled from "styled-components"

type Props = {
  children?: never
}

export const SocialLinks = (_: Props) => {
  return (
    <Container>
      <AnchorLink href={"https://www.facebook.com/jazykysrdcem/"} title={"Sledujte nás na Facebooku!"}>
        <Svg
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
        >
          <g>
            <path d="M306.743,80l-213.49,0c-7.317,0 -13.233,5.922 -13.233,13.24l0,213.52c0,7.316 5.916,13.24 13.233,13.24l114.943,0l0,-93.049l-31.399,0l0,-36.098l31.406,0l0,-26.728c0,-31.001 18.916,-47.794 46.568,-47.794c13.244,0 24.628,0.899 27.946,1.34l0,32.412l-19.178,-0.006c-15.038,0 -17.847,7.147 -17.847,17.634l0,23.142l35.762,0l-4.67,36.098l-31.092,0l0,93.049l61.051,0c7.314,0 13.237,-5.924 13.237,-13.24l0,-213.52c0,-7.318 -5.923,-13.24 -13.237,-13.24Z" />
          </g>
        </Svg>
      </AnchorLink>
    </Container>
  )
}

/**
 * Styled components
 */

const Container = styled("div")`
  display: grid;
  position: relative;
  grid-auto-columns: max-content;
  grid-auto-flow: row;
  grid-area: social-links;
`

const Svg = styled("svg")`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 2;

  path {
    fill: gray;
    fill-rule: nonzero;
    transition: fill 250ms ease-in-out;
  }
`

const AnchorLink = styled("a")`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  transform: translate3d(8px, -8px, 0);

  &:hover ${Svg} {
    path {
      fill: #3b5998;
    }
  }
`
