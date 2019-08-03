import styled, { css } from 'styled-components'
import { transition } from 'theme'

import { Caps } from 'components/elements'
import { withLink, withAnalytics } from 'helpers/hoc'

const activeStyle = css`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
`

const style = css`
  transition: color ${transition.medium};
  &:hover,
  > .active {
    ${activeStyle};
  }
`

const NavLink = styled(Caps)(
  {
    bg: 'transparent',
    color: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    '&:disabled': {
      opacity: 1 / 4
    }
  },
  props => props.css,
  style
)

NavLink.defaultProps = {
  p: 2,
  fontSize: 0,
  as: 'div',
  color: 'gray7'
}

export default withLink(withAnalytics(NavLink))
