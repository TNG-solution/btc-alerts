import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { get_exchanges, get_prediction } from '../../redux/actions/exchangesActions';

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

  const exchanges = useSelector(state => state.exchanges.exchanges);
  const loading = useSelector(state => state.exchanges.loading);
  const error = useSelector(state => state.exchanges.error)
  const prediction = useSelector(state => state.exchanges.prediction);

  useEffect(() => {
    dispatch(get_exchanges());
    dispatch(get_prediction());
  }, [dispatch]);

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
      
      <Grid className="mt-3" container direction="row" justify="space-around" alignItems="center" spacing={3}>
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

        <Grid item xs={3}>
          <Card className={classes.alertsCard}>
            <CardHeader className="text-center" title="Predicción para mañana"/>
            <CardContent>
              <Typography className="mt-3" variant="h6"> <img src={btc} height="25px" width="43px" alt="Bitcoin logo"/> Bitcoin</Typography>
              <Typography className="mt-3" variant="h6">
                Precio: $ {prediction.prediction === undefined ? '' : prediction.prediction.toFixed(2)} <small>USD</small>
              </Typography>
              <Typography className="mt-3" variant="h6">
                Cambio: {prediction.variant * -1 < 0 ? <ArrowDropDownIcon style={{color: "#ff4265"}}/> : <ArrowDropUpIcon style={{color: "#02c076"}}/>}
                {prediction.variant === undefined ? '' : (prediction.variant * -100).toFixed(2)}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
   );
}
 
export default Btc;