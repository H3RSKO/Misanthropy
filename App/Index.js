import React from 'react'
import appStyles from './Styling/App'
import { makeStyles } from '@material-ui/core/styles';

const Index = () => {
  const classes = appStyles()
  return (
    <div className={classes.root}>
      <h1>
        A hero can be anyone.
      </h1>
      <div>
       Even a man doing something as simple and reassuring as putting a coat around a young boy's shoulders to let him know that the world hadn't ended. This is a sample text. Enter your text here to convert to handwritten font.
       </div>
    </div>
  )
}

export default Index
