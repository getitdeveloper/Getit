import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const SearchBarCSS = makeStyles((theme: Theme) =>
  createStyles({
    box:{
      display:'flex',
      justifyContent: 'space-around',
      margin: '20px 0px'
    },
    search: {
      position: 'relative',
      borderRadius: '23px',
      backgroundColor: '#f5f5f5',
      marginLeft: 0,
      width: '50%',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      width:'100%',
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      // transition: theme.transitions.create('width'),
      width: '100%',
    },
  }),
);

export default SearchBarCSS;