import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    container: {
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    
       
    },
    btn :{
        position: "relative",
        width: "25px",
        height: "25px",
        cursor: "pointer",
        appearance: "none",
        // -webkit-appearance: "none",
        cursor: "pointer",
        transform: "translateY(-150px)",
    },
    // btn::before :{
    //     content: "f0f3",
    //     position: "absolute",
    //     top: "50%",
    //     left: "50%",
    //     fontFamily: "Font Awesome 5 Free",
    //     fontWeight: "700",
    //     fontSize: "1.6em",
    //     transform: "translate(-50%, -50%)",
    // },
    // btn:checked ~ box: {
    //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    // }, 
    box :{
        borderRadius: "10px",
        backgroundColor: "white",
        width: "350px",
        marginTop: "2em",
        position: "relative ",
        overflow: "hidden",
        border: "2px solid rgba(0, 0, 0, 0.137)",
        transition: "all 0.4s",
        // clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        
        marginTop: "-20px",
        marginBottom: "10px",
        marginLeft: "-100px"
    },
    header :{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "0.6em 1em",
        borderBottom: "1px solid rgba(0, 0, 0, 0.082)",
    },
    a: {
        textDecoration: "none",
    },
    content: {
        width: "100%",
    },
    // notification :{
    //     opacity:"10%",
    //     width: "350px",
    //     padding: "0.6em 1em",
    //     display: "flex",
    //     alignItems: "center",
    // },
    // img :{
    //     width: "50px",
    //     height: "50px",
    //     borderRadius: "50px",
    //     marginRight: "0.5em",
    // },
    // textP :{
    //     fontSize: "0.8em",
    // },
    // name:{
    //     fontWeight:" 700",
    // }
    // // textTime: {
    // //     fontSize: "0.7em",
    // //     color: "rgba(0, 0, 0, 0.61)",
    // // }
    

}))

