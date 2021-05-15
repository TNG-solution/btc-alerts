import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core";

export const workStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  card: {
    maxWidth: '345px',
    color: '#ffffff',
    backgroundColor: '#232041',
    borderRadius: '1em',
    minHeight: '390px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    color: '#ffffff',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export const btcStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginTop: '100px'
  },
  card: {
    height: '500px'
  },
  alertsCard: {
    height: '500px',
    maxHeight: '500px',
    color: '#ffffff',
    backgroundColor: '#232041',
    borderRadius: "12px",
  },
  alertBuy: {
    width: '100%',
    color: '#02c076',
  },
  alertSell: {
    width: '100%',
    color: '#ff4265',
  },
  text: {
    color: '#ffffff'
  },
  alert: {
    color: '#232041',
    textAlign: 'center'
  }
}));

export const exchangeCard = makeStyles(() => ({
  avatar: {
    width: 35,
    height: 35,
  },
  error: {
    width: 250,
    height: 120,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
}));

export const theme = createMuiTheme({
  overrides: {
    MuiCardContent: {
      root: {
        paddingTop: 0
      }
    }
  }
})