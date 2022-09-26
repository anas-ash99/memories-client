import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
       
    },   
    box :{
        borderRadius: "10px",
        backgroundColor: "white",
        width: "350px",
        marginTop: "2em",
        position: "relative ",
        overflow: "hidden",
        border: "2px solid rgba(0, 0, 0, 0.137)",
        transition: "all 0.4s",
        marginTop: "-20px",
        marginBottom: "10px",
        marginLeft: "440px"
    },
    a: {
        textDecoration: "none",
    },
    content: {
        width: "100%",
    },    
    a: {
        textDecoration: "none",
    },
    content: {
        width: "100%",
    },
    notification :{
        display: "inline",
        borderBottom: "1.5px solid rgba(0, 0, 0, 0.082)",
        width: "350px",
        padding: "0.6em 1em",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
    },
    img :{
        width: "35px",
        height: "35px",
        borderRadius: "17px",
        // marginRight: "0.5em",
    },
    textP :{
        fontSize: "1.2em",
    },
    name:{
        display: "inline",
        fontWeight:" 700",
        marginLeft: "20px",
        marginRight: "60px",
    },
    settings:{

    }

}))