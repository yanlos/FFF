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
    name: '',
    password: '',
  });

  const handleChange = id => event => {
      setValues({ ...values, [id]: event.target.value });
    };

  const handleRegister = () => {
    // console.log(JSON.stringify({...values}));
    axios.post(`http://127.0.0.1:8000/api/auth/register`,
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
          value={values.email}
          onChange={handleChange('email')}
          fullWidth
          margin="normal"
        />
        <TextField
          id="standard-full-width"
          label="Username"
          style={{ margin: 8 }}
          helperText="Required"
          value={values.name}
          onChange={handleChange('name')}
          fullWidth
          margin="normal"
        />
        <TextField
          id="standard-full-width"
          label="Password"
          style={{ margin: 8 }}
          helperText="Required"
          value={values.password}
          onChange={handleChange('password')}
          fullWidth
          margin="normal"
          type="password"
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
