import { compose, borders, buttonStyle } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { transition } from 'theme'
import styled from 'styled-components'
import Text from '../Text'

const Button = styled(Text)(
  {
    transition: `background-color ${transition.medium}, color ${transition.medium}, box-shadow ${transition.medium}`,
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 16 / 14,
    textDecoration: 'none',
    verticalAlign: 'middle',
    WebkitFontSmoothing: 'antialiased',
    outline: 0,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  compose(borders, buttonStyle)
)

Button.propTypes = {
  ...propTypes.Text,
  ...propTypes.border
}

Button.defaultProps = {
  as: 'button',
  fontFamily: 'sans',
  fontSize: '1',
  fontWeight: 'bold',
  px: 3,
  py: 2,
  color: 'white',
  bg: 'link',
  border: 0,
  borderRadius: 2
}

export default Button
