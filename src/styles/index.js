import { makeStyles } from '@material-ui/core/styles';

export const workStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  card: {
    maxWidth: 345,
    color: '#ffffff',
    backgroundColor: '#232041'
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
    color: '#ffffff',
    backgroundColor: '#232041',
    borderRadius: "12px",
  },
  alertSuccess: {
    width: '100%',
    color: '#ffffff',
    backgroundColor: '#02c076'
  },
  alertDanger: {
    width: '100%',
    color: '#ffffff',
    backgroundColor: '#ff4265'
  }
}));