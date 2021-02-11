import React from 'react'
import { Paper, Button, Grid, Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextEditor from '../Components/TextEditor/TextEditor'
import NewThreadStyles from '../Styling/NewThreadStyle'

const NewThread = (props) => {
  const {classes} = props
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={10} >
        <Box className={classes.borderBox} border={3}>
        <Paper
          elevation={3}
          square={true}
          className={classes.root}
          variant="outlined"
        >
          <Typography variant="h3" className={classes.subHeader}>New Thread</Typography>
      <TextEditor />

        </Paper>
        </Box>
        </Grid>
    </Grid>
  )
}

export default withStyles(NewThreadStyles)(NewThread)
