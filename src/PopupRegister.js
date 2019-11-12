import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import axios from 'axios';

export default function PopupRegister() {
  const [values, setValues] = React.useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

  const handleRegister = () => {
    console.log(JSON.stringify({...values}));
    axios.register(`http://127.0.0.1:8000/api/posts`,
    {...values}).then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

  return (
    <Card >
      <CardContent>
        <TextField
          id="standard-full-width"
          label="Email"
          style={{ margin: 8 }}
          helperText="Required"
          value={values.name}
          onChange={handleChange('email')}
          fullWidth
          margin="normal"
        />
        <TextField
          id="standard-full-width"
          label="Username"
          style={{ margin: 8 }}
          helperText="Required"
          value={values.address}
          onChange={handleChange('username')}
          fullWidth
          margin="normal"
        />
        <TextField
          id="standard-full-width"
          label="Password"
          style={{ margin: 8 }}
          helperText="Required"
          value={values.address}
          onChange={handleChange('password')}
          fullWidth
          margin="normal"
        />

      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={handleRegister}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
