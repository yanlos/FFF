import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// import Typography from '@material-ui/core/Typography';
//className={classes.card}
/*InputLabelProps={{
  shrink: true,
}}*/ // DO NOT UNCOMMENT

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 475,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 19,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function Popup() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    title: '',
    //address: '', UNCOMMENT
    //age: '', UNCOMMENT
    //start: new Date(), UNCOMMENT
    //end: new Date(), UNCOMMENT
    description: ''
  });

  const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

  const handlePost = () => {
    axios.post(`https://jsonplaceholder.typicode.com/users`,
    JSON.stringify({...values,...selectedDate}) ).then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleStartChange = date => {
      setValues({ ...values, ['start']: date});
    };
  const handleEndChange = date => {
      setValues({ ...values, ['end']: date});
    };

  return (
    <Card >
      <CardContent>
        <TextField
          id="standard-full-width"
          label="Restaruant"
          style={{ margin: 8 }}
          // placeholder="Placeholder" DO NOT UNCOMMENT
          helperText="Required*"
          value={values.title}
          onChange={handleChange('title')}
          fullWidth
          margin="normal"
        />
        <TextField
          id="standard-full-width"
          label="Location"
          style={{ margin: 8 }}
          // placeholder="Placeholder" DO NOT UNCOMMENT
          helperText="Address"
          value={values.address}
          // onChange={handleChange('address')} UNCOMMENT
          fullWidth
          margin="normal"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Start Date"
              value={new Date()}// value={values.start} REPLACE WITH THIS COMMENT
              // onChange={handleStartChange} UNCOMMENT
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="End Date"
              value={new Date()}// value={values.end} REPLACE WITH THIS COMMENT
              // onChange={handleEndChange} UNCOMMENT
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
       </MuiPickersUtilsProvider>
        <TextField
          id="standard-multiline-static"
          label="Deal"
          multiline
          rows="3"
          placeholder="This one scrolls"
          value={values.description}
          onChange={handleChange('description')}
          helperText="Required*"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-number"
          label="Number"
          value={values.age}
          //onChange={handleChange('age')} UNCOMMENT
          type="number"
          className={classes.textField}
          margin="normal"
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={handlePost}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
