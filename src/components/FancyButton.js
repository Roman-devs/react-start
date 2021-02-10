import styled from "styled-components/macro"
import {css} from "styled-components";

export const Button = styled.button`
  margin: 25px;
  border-radius: 20px;
  background: ${foobar => foobar.primary ? "green" : "white"};
`

// Other Example of using the CSS function for multiple case distinctions in one line using operators and the lambda function

export const Button1 = styled.button`
  margin: 55px ${foobar => foobar.bigButton ?
          css`
            // insert CSS in case bigButton property does exist
          `
          :
          css`
            // insert CSS in case bigButton property does not exist
          `
  }
`