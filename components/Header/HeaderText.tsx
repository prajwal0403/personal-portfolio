import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Buttons from './Buttons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(6),
      },
    },
    title: {
      display: 'flex',
    },
    hi: {
      color: 'red',
      marginRight: '10px',
    },
    paragraph: {
      paddingRight: '20%',
    },
  })
);

function HeaderText() {
  const classes = useStyles();
  return (
    <Box
      component="main"
      role="main"
      itemScope
      itemType="https://schema.org/Person"
      className={classes.root}
    >
      <meta itemProp="familyName" content="Tomar" />
      <meta itemProp="gender" content="https://schema.org/Male" />
      <meta itemProp="name" content="Prajwal Raut" />
      <Typography
        className={classes.title}
        variant="h2"
        component="h1"
        gutterBottom
      >
        <span className={classes.hi}>Hi, </span>I'm{' '}
        <span style={{ marginLeft: '10px' }} itemProp="givenName">
          {' '}
          Prajwal Raut
        </span>
      </Typography>
      <Typography
        variant="h4"
        itemProp="disambiguatingDescription"
        component="h2"
        gutterBottom
      >
        A fullstack web developer
      </Typography>
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
        A dynamic MERN stack developer with over 17 months of professional
        experience. Graduated from Masai School with a strong foundation in
        mathematics, programming logic, data structures, and algorithms.
        Proficient in both Frontend and Backend technologies, with a proven
        track record of applying agile methodology to deliver robust web
        applications.
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
