import React from 'react';

// Material UI
import { Grid, Card, CardHeader, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { btcStyles } from '../../styles/index';

// Packages
import TradingViewWidget, { Themes, BarStyles } from 'react-tradingview-widget';

const Btc = () => {
  const classes = btcStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
        <Grid item xs={8}>
          <Card className={classes.card}>
            <TradingViewWidget
              symbol="BITBAY:BTCUSD"
              theme={Themes.DARK}
              locale="mx"
              interval="5"
              style={BarStyles.AREA}
              autosize
            />
          </Card>
        </Grid>

        {/* TODO: alertas de bitcoin */}
        <Grid item xs={3}>
          <Card className={classes.alertsCard}>
            <CardHeader title="Alertas"/>
            <List>
              <ListItem className={classes.alertSuccess}>
                <ListItemText primary="¡Es hora de comprar!" secondary="Ahora"/>
              </ListItem>
              <Divider />
              <ListItem className={classes.alertDanger}>
                <ListItemText primary="¡Es hora de vender!" secondary="Ahora"/>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
   );
}
 
export default Btc;