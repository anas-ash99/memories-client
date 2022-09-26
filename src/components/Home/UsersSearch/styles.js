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
        width: "280px",
        marginTop: "2em",
        position: "relative ",
        overflow: "hidden",
        border: "2px solid rgba(0, 0, 0, 0.137)",
        transition: "all 0.4s",
        marginTop: "-20px",
        marginBottom: "10px",
        marginLeft: "-120px"
    },
    a: {
        textDecoration: "none",
    },
    content: {
        width: "100%",
    },    

}))
