import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    divStyle:{
        backgroundColor: "#B9FFF8",
        width: "50px",
        height: "50px",
        marginLeft: "20px",
        borderRadius: "25px",
        textAlign: "center",
        position: "fixed",
        bottom: "25px",
        right: "100px",
        cursor: "pointer"
    },
    notificaionsCont:{
        marginLeft: "60%",
        marginBottom: "50px",
        marginTop: "-1%",
        backgroundColor: "blue",
        width: "300px",
        paddingLeft: "10px",
        borderRadius: "5px",
    },
    notifContent:{

    },
    form:{
        position: "fixed",
        bottom: "80px",
        marginLeft:"630px",
        marginTop: "10px",
        // zIndex:"1",
    }
   

}));