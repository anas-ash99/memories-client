import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    cursor: "pointer"
  },
  cont: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: "10px",
    padding: "5px",
    width: "34%",
    position: "absoulte"
  },
  purple1: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    margin: "10px",
    
  },
  usersDiv:{
    display: "inline",
    textAlign: "center"
  },
  bellIcon:{
    cursor: "pointer",
    position: "relative",
    marginTop: "7px"
   
  },
  notfyCount:{
    textAlign: "center",
    backgroundColor: "red",
    width: "17px",
    height: "17px",
    borderRadius: "8.5px",
    position: "absolute",
    marginTop: "-20px"
  },
  div:{
    backgroundColor: "red",
    width: "35px",
    height: "35px", 
    borderRadius: "17.5px",
    marginTop: "0px",
    marginLeft: "234px"
    
  }
  
}));