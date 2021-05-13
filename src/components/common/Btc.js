import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { get_exchanges } from '../../redux/actions/exchangesActions';

// Material UI
import { Grid, Card, CardHeader, List, ListItem, ListItemText, Divider, Typography } from '@material-ui/core';
import { btcStyles } from '../../styles/index';

// Packages
import TradingViewWidget, { Themes, BarStyles } from 'react-tradingview-widget';
import { motion } from 'framer-motion';

// Components
import Exchange from './Exchange';

const Btc = () => {
  const dispatch = useDispatch();
  const classes = btcStyles();

  const [sell, setSell] = useState(false);
  const [buy, setBuy] = useState(false);

  const exchanges = useSelector(state => state.exchanges.exchanges);
  const loading = useSelector(state => state.exchanges.loading);

  useEffect(() => {
    const getExchanges = () => dispatch(get_exchanges());
    getExchanges();
  }, []);

  const onClick = (e) => {
    e.preventDefault();

    setBuy(true); 
    setSell(true); 
    setTimeout(() => {
      setBuy(false); 
      setSell(false);
    }, 4700);
  }

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
        {exchanges !== undefined
          ? exchanges.map(item => (
              <Grid item xs={6} sm={3}>
                <motion.div
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1.3 }}
                >
                  <Exchange key={item.name} exchange={item} loading={loading}/>
                </motion.div>
              </Grid>
            ))
            : null
          }
      </Grid>
      
      <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
        <Grid item xs={8}>
          <button type="button" onClick={onClick}>click</button>
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
              {buy
                ? <ListItem className="alert-buy">
                    <ListItemText
                      primary={
                        <Fragment>
                          <Typography variant="h5" className={classes.alert}>¡Es hora de comprar!</Typography>
                        </Fragment>
                      }
                    />
                  </ListItem>
                : <ListItem className={classes.alertBuy}>
                    <ListItemText primary="Compra Bitcoin" 
                      secondary={
                        <Fragment>
                          <Typography component="span" variant="body2" className={classes.text}>
                            Puedes hacerlo desde tu wallet preferida.
                          </Typography>
                        </Fragment>
                      }
                    />
                  </ListItem>
              }
              <Divider/>
              {sell
                ? <ListItem className="alert-sell">
                    <ListItemText
                      primary={
                        <Fragment>
                          <Typography variant="h5" className={classes.alert}>¡Es hora de vender!</Typography>
                        </Fragment>
                      }
                    />
                  </ListItem>
                : <ListItem className={classes.alertSell}>
                    <ListItemText primary="Vende Bitcoin" 
                      secondary={
                        <Fragment>
                          <Typography component="span" variant="body2" className={classes.text}>
                            Puedes hacerlo desde tu wallet preferida.
                          </Typography>
                        </Fragment>
                      }
                    />
                  </ListItem>
              }
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
   );
}
 
export default Btc;