import React from 'react'
import { Link } from "react-router-dom"
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
                            <Link to="/">Get Started</Link>
                        </Button>
                    </ThemeProvider>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;