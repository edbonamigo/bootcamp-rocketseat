import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defalt'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Timer Ignite!</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}
