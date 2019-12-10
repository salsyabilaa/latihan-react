import React, { Component } from "react";
import Background from "./bgmoss.png";
import path from "./path.png";
class Latihan extends Component {
    render() {
        return (
            <div style={styles.background}>
                <div style={styles.parent}>
                        <h1 style={{
                            margin: 26,
                            color: "#FFF",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "normal",
                    fontSize: 24,
                        }}>GO GREEN</h1>
                    <div style={styles.logo}>
                        <img src={path}
                            style={{
                                marginLeft: "95%"
                            }}
                        />

                    </div>
                    <div style={styles.parentQuotes}>
                        <h1 style={{ alignSelf: "center",lineHeight: "1", fontWeight:"800", textAlign: "center", fontSize:"48px", textAlign: 'center' }}>Make it green
                        </h1> 
                    </div>
                    <div style={styles.wraper}>
                        <span style={{ marginLeft: 60, fontfamily: "Poppins", fontSize: "20px", fontStyle:"normal", textAlign:"center", fontWeight: "normal" }}>Now more than ever, Our planet is need our</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>
                        
                        <div style={styles.parentButton1}>
                            <div style={styles.Readmore1}>
                                Do it Now
                        </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
let h = window.innerHeight;

const styles = {
    background: {
        display: "flex",
        backgroundImage: `url(${Background})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        justifyContent: "center",
        alignItem: "center",
    },
    wraper: {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        color: "#ffff",
        marginRight: 30,
    },
    parent: {
        display: "flex",
        height: h,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
    },
    logo: {
        display: "flex",
        justifyContent: "left",
        alignItem: "left",
        marginRight: 20,
    },
    border: {
        borderStyle: "solid",
    },
    parentQuotes: {
        justifyContent: "center",
        flexDirection: "column",
        alignItem: "center",
        color: '#FFFFFF',
        fontFamily: "Poppins",
        fontSize: "20px",
        textAlign: "center",
    },
    parentButton1: {
        display: "flex",
        borderWidth: 5,
        borderRadius: "100px",
        alignSelf: "center",
        marginTop: 50,
        background: "#E67E22",
        borderRadius: "100px",
    },
    Readmore1: {
        color: "#ffff",
        margin: 10,
        marginRight: "30px",
        marginLeft: "30px",
        lineHeight: "28px",
        fontSize: "20px",
        top: "5px"
    }
}

export default Latihan;