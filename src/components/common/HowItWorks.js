import React from 'react';

// Packages
import { motion } from 'framer-motion';

// Material UI
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { workStyles } from '../../styles';

// Images
import python from '../../images/python-script.png';
import web from '../../images/web-page.svg';
import monitor from '../../images/monitor.png';

const HowItWorks = () => {
  const classes = workStyles();
  
  return ( 
    <div className={classes.root} id="hworks">
      <h1 style={{ paddingTop: '80px', marginTop: '-80px' }} id="title">¿Cómo funciona?</h1>
      <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
        <Grid item xs={6} sm={3}>
          <motion.div whileHover={{ scale: 1.07 }}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={python} title="Python script"/>
              <hr style={{background: '#FFFFFF', width: '90%'}}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Script de python
                </Typography>
                <Typography variant="body2" component="p">
                  Spript realizado dentro del framework pycerver el cual nos permite tener información actualizada relacionada 
                  con el precio del bitcoin. 
                </Typography>
              </CardContent>
            </Card>

          </motion.div>
        </Grid>

        <Grid item xs={6} sm={3}>
          <motion.div whileHover={{ scale: 1.07 }}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={web} title="Web page"/>
              <hr style={{background: '#FFFFFF', width: '90%'}}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Página web
                </Typography>
                <Typography variant="body2" component="p">
                  Esta página está diseñada para ser utilizada por cualquier persona siendo intuitiva y fácil de usar.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={6} sm={3}>
          <motion.div whileHover={{ scale: 1.07 }}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={monitor} title="Monitor"/>
              <hr style={{background: '#FFFFFF', width: '90%'}}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Monitorea el bitcoin
                </Typography>
                <Typography variant="body2" component="p">
                  Gracias al trabajo en conjunto del script de python con la página web cualquiera podrá obtener una predicción
                  del precio del bitcoin para un día después y saber si es el momento preciso para comprar o vender.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </div>
   );
}
 
export default HowItWorks;