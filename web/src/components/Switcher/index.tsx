import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import {shade} from 'polished';
import { Container } from './styles'

interface Props {
    toggleTheme(): void
}

const Switcher: React.FC<Props> = ({ toggleTheme }) => {
  const {colors, title} = useContext(ThemeContext)

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.2, colors.background)}
        onColor={colors.text}
      />
    </Container>
  )
}

export default Switcher