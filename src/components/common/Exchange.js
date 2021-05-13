import React from 'react';

// Material UI
import { Card, CardHeader, Avatar, CardContent, Typography } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles'; 
import { exchangeCard, theme } from '../../styles/index';

const Exchange = ({exchange, loading}) => {
  const classes = exchangeCard();

  const {name, url, price, image, bg, color} = exchange;

  return ( 
    <Card style={{width: 250, height: 120, backgroundColor: bg, color: color}} onClick={() => window.open(url)}>
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
  );
}
 
export default Exchange;