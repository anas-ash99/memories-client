import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    
    
   
    a: {
        textDecoration: "none",
    },
    content: {
        width: "100%",
    },
    notification :{
       
        borderBottom: "1.5px solid rgba(0, 0, 0, 0.082)",
        width: "350px",
        padding: "0.6em 1em",
        display: "flex",
        alignItems: "center",
    },
    img :{
        width: "50px",
        height: "50px",
        borderRadius: "50px",
        marginRight: "0.5em",
    },
    textP :{
        fontSize: "1.2em",
    },
    name:{
        display: "inline",
        fontWeight:" 700",
        marginLeft: "20px",
        marginRight: "60px",
    }
    // textTime: {
    //     fontSize: "0.7em",
    //     color: "rgba(0, 0, 0, 0.61)",
    // }
    

}))