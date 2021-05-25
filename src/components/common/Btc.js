import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { get_exchanges } from '../../redux/actions/exchangesActions';

// Material UI
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { btcStyles } from '../../styles/index';

// Packages
import TradingViewWidget, { Themes, BarStyles } from 'react-tradingview-widget';
import { motion } from 'framer-motion';

// Components
import Exchange from './Exchange';

// Images
import btc from '../../images/btc-logo.png';

const Btc = () => {
  const dispatch = useDispatch();
  const classes = btcStyles();

  const [sell, setSell] = useState(false);
  const [buy, setBuy] = useState(false);

  const exchanges = useSelector(state => state.exchanges.exchanges);
  const loading = useSelector(state => state.exchanges.loading);
  const error = useSelector(state => state.exchanges.error)

  useEffect(() => {
    const getExchanges = () => dispatch(get_exchanges());
    getExchanges();
  }, [dispatch]);

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
                  <Exchange key={item.name} exchange={item} loading={loading} error={error}/>
                </motion.div>
              </Grid>
            ))
            : null
          }
      </Grid>
      
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

        {/* TODO: precio, porcentaje de cambio (multiplicar * 100) api/btc/prediction */}
        <Grid item xs={3}>
          <Card className={classes.alertsCard}>
            <CardHeader className="text-center" title="Predicción para mañana"/>
            <CardContent>
              <Typography className="mt-3" variant="h6"> <img src={btc} height="25px" width="43px"/> Bitcoin</Typography>
              <Typography className="mt-3" variant="h6">Precio: $ 38000 <small>USD</small></Typography>
              <Typography className="mt-3" variant="h6">
                % de cambio: <ArrowDropUpIcon/> <ArrowDropDownIcon/> 6.23%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
   );
}
 
export default Btc;