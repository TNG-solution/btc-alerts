import React, { useState } from 'react';

// Material UI
import clsx from 'clsx';
import { Grid, Card, IconButton, CardMedia, CardContent, Typography, CardActions, Collapse } from '@material-ui/core';
import { workStyles } from '../../styles';

// Material UI Icons
import { ExpandMore } from '@material-ui/icons';

// Images
import img1 from '../../images/test.png'

const HowItWorks = () => {
  const classes = workStyles();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return ( 
    <div className={classes.root} id="hworks">
      <h1 id="title">¿Cómo funciona?</h1>
      <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={img1} title="Paella dish"/>
            <CardContent>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi at metus iaculis tristique.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMore />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi at metus iaculis tristique. 
                  Pellentesque eget dui eu nisl eleifend imperdiet sollicitudin et lectus. 
                  Praesent interdum auctor magna eu interdum. Integer a nunc arcu. In et vestibulum ante.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={img1} title="Paella dish"/>
            <CardContent>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi at metus iaculis tristique.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMore />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi at metus iaculis tristique. 
                  Pellentesque eget dui eu nisl eleifend imperdiet sollicitudin et lectus. 
                  Praesent interdum auctor magna eu interdum. Integer a nunc arcu. In et vestibulum ante.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={img1} title="Paella dish"/>
            <CardContent>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi at metus iaculis tristique.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMore />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi at metus iaculis tristique. 
                  Pellentesque eget dui eu nisl eleifend imperdiet sollicitudin et lectus. 
                  Praesent interdum auctor magna eu interdum. Integer a nunc arcu. In et vestibulum ante.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </div>
   );
}
 
export default HowItWorks;