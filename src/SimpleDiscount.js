import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

//class Vote extends React.Component {
//    state = { vote: 0, score: 0 };
//
//  vote(type) {
//    this.setState(state => ({
//      vote: state.vote === type ? 0 : type
//    }));
//  }
//}

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


    function upvote(votes){
        votes += votes;
        return votes;
    }

    function downvote(votes){
        votes += votes;
        return votes;
    }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Zander Jacobsen
        </Typography>
        <Typography variant="h5" component="h2">
          $7 Sandwiches
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Ike's Sandwhiches
        </Typography>
        <Typography variant="body2" component="p">
          08-01-2019 to Unknown
          <br />
          75 E Santa Clara St #130, San Jose, CA 95113
        </Typography>
      </CardContent>


      <CardActions>
        <Button size="small">Learn More</Button>
        <Button color="primary" size="small"
        onClick={upvote}
        >Upvote
        </Button>
        <Button size="small" color="secondary"
        onClick={downvote}
        > Downvote</Button>
      </CardActions>
    </Card>
  );
}
