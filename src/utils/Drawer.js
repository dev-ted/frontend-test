import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';


import Sidebar from '../components/Sidebar';
import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from 'react-icons';
import '../sass/global.scss'
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  top : {
      position: 'absolute',
      top: '30',
  }

});

export default function MenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
   
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Sidebar />
    </div>
  );

  return (
    <div className={classes.top}>
      {['left',].map((anchor) => (
        <div key={anchor} className="menu_icons">

<IconContext.Provider value={{ color: "#16C79A" }}>
          <span className="menu_icons">
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <AiOutlineMenu  /> 
            </IconButton>
          </span>
        </IconContext.Provider>
        
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
}