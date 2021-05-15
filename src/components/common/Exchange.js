import React, { Fragment } from 'react';

// Material UI
import { Card, CardHeader, Avatar, CardContent, Typography } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles'; 
import { exchangeCard, theme } from '../../styles/index';
import ErrorIcon from '@material-ui/icons/Error';

// Packages
import { motion } from 'framer-motion';

const Exchange = ({exchange, loading, error}) => {
  const classes = exchangeCard();

  const {name, url, price, image, bg, color} = exchange;

  return (
    <Fragment>
      {error.isError
        ? <Card className={classes.error}>
            <CardContent>
              <ErrorIcon style={{ color: 'red', fontSize: 35 }}/>
              <Typography gutterBottom variant="h6"><strong>Error al obtener información.</strong></Typography>
            </CardContent>
          </Card>
        : <Card style={{width: 250, height: 120, backgroundColor: bg, color: color, borderRadius: '1em', cursor: 'pointer'}} 
            onClick={() => window.open(url)} component={motion.div} whileHover={{ y: -10 }}
          >
            <MuiThemeProvider theme={theme}>
              <CardHeader
                avatar={
                  <Avatar alt="imagen" src={image} className={classes.avatar}/>
                }
                title={
                  <Typography gutterBottom variant="h6">{name}</Typography>
                }
              />
              <CardContent>
                <Typography gutterBottom variant="h5">$ {price} <small>USD</small></Typography>
              </CardContent>
            </MuiThemeProvider>
          </Card>
      }
    </Fragment>
  );
}
 
export default Exchange;