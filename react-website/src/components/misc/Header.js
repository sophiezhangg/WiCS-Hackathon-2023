import React from 'react'
import './Header.css'
import Button from '@material-ui/core/Button'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#fff',
      },
    },
  });

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>Women in Continuing Education</h1>
                    <h2>Achieve higher education for greater success</h2>
                    <ThemeProvider theme={theme}>
                        <Button variant="outlined" color="primary">
                            <a href="https://utexas.qualtrics.com/jfe/form/SV_4UEDAq5XwQcxnh4">Click Here to Get Started</a>
                        </Button>
                    </ThemeProvider>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;