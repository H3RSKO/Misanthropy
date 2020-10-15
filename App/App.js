import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import Index from './Index'

ReactDOM.render(
  <div className='app'>
  <Index />
  <Button variant="contained" color="primary">
  Hello World
</Button>
</div>,
  document.getElementById('app')
);

