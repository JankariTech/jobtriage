import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlined from '@material-ui/icons/ExitToAppOutlined';
import { Logo } from '../../assets/icons';
import { List, Divider } from '../../Material-UI/Components';
import APIService from '../../service/APIService';
import ListItemWithLink from '../UI/ListItemWithLink/ListItemWithLink';
import ListItemWithClick from '../UI/ListItemWithClick/ListItemWithClick';
import { makeStyles } from '../../Material-UI/import';

const useStyles = makeStyles((theme) => ({
  nav: {
    top: '0',
    left: '0',
    zIndex: '1',
    height: '100vh',
    width: '180px',
    position: 'fixed',
    backgroundColor: '#f1f1f1',
  },
  logo: {
    margin: theme.spacing(2.5),
    width: '40px',
  },
  textStyle: {
    color: theme.palette.textPrimary.main,
    fontWeight: '500',
  },
  logoDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    overflow: 'auto',
    width: '100%',
    marginLeft: '180px',
  },
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
  },
}));

const NavBar = props => {
  const classes = useStyles();
  const { children } = props;

  const logout = () => {
    APIService.logout()
      .then(() => {
        document.location = '/';
      })
      // eslint-disable-next-line no-console
      .catch(console.log);
  };

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <div className={classes.logoDiv}>
          <NavLink to="/">
            <img src={Logo} alt="logo" className={classes.logo} />
          </NavLink>
        </div>
        <Divider />
        <List component="ul">
          <ListItemWithLink
            primary="Dashboard"
            to="/dashboard"
            textOverrideClass={{ primary: classes.textStyle }}
            icon={<DashboardOutlinedIcon />}
          />
          <ListItemWithLink
            primary="Account"
            to="/account"
            textOverrideClass={{ primary: classes.textStyle }}
            icon={<SettingsOutlinedIcon />}
          />
          <ListItemWithClick
            primary="Logout"
            onClick={logout}
            textOverrideClass={{ primary: classes.textStyle }}
            icon={<ExitToAppOutlined />}
          />
        </List>
      </nav>
      <div className={classes.container}>
        {children}
      </div>
    </div>

  );
};

export default NavBar;
