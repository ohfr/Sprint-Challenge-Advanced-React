import React from 'react';
import { useDarkMode } from '../Hooks/useDarkMode';

import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },

  }));


const Nav = () => {
    const classes = useStyles();
    const [darkMode, setDarkMode] = useDarkMode(false)

    const handleChange = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div role="nav" className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={handleChange} aria-label="DarkMode Switch"/>}
            label={darkMode ? 'Light Mode' : 'Dark Mode'}
          />
        </FormGroup>
      </div>
    )
}

export default Nav;