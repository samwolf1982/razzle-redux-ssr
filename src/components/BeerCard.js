import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  img: {
    width: '100%',
  },
};

const BeerCard = ({ classes, beer }) => {
  // debugger
  return  <Card>
    <CardContent>
      <Grid container direction="row" spacing={4}>
        <Grid item xs={3}>
          <img
              className={classes.img}
              src={beer.avatar_url}
              title={beer.login}
              alt={beer.login}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography gutterBottom variant="h5" component="h2">
            {beer.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {beer.company}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
}

export default withStyles(styles)(BeerCard);
