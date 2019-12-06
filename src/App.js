import React, { Component } from 'react';
import Background from './background.png';
import Icon from './IconBali.png';

class App extends Component{
    render(){
        return(
            <div style={styles.wrapper}>
                <div style={styles.logo}>
                    <img 
                    src={Icon} style={{marginLeft: '45%'}} alt="Icon Bali"
                    
                    />
                
                <div style={styles.description}>
                    <h1 style={{fontSize: '48px', fontWeight: 'normal', marginTop: 10,}}>A Better way to</h1>
                    <h1 style={{color: "#FCB371",fontSize: '48px', fontWeight: 'normal', }}>Travel To Bali</h1>
                    <span style={{fontFamily: 'Roboto', fontWeight: 'normal', fontStyle: 'normal', fontSize: '10'}}>Cheapest and Easyer</span>
                </div>

                <div style={styles.wrapperBtn}>
                    <div style={styles.button}>
                        Read More
                    </div>
                    <div style={styles.buttonTwo}>
                    Reservation
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

let h = window.innerHeight;

const styles = {
    wrapper: {
        display: "flex",
        backgroundImage: `url(${Background})`,
        height: '100%',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        

    },
    logo: {
        height: h,
        width: "100%",
        background: "rgba(42, 38, 61, 0.82)",
       
    },
    description: {
        color: "#FFFFFF",
        fontFamily: "Pacifico",
        textAlign: "center",
        lineHeight: "50px",
        marginTop: 40,
    },
    wrapperBtn: {
        marginTop: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderStyle: 'solid',
        borderColor: '#FCB371',
        color: '#FCB371',
        fontFamily: 'Pacifico',
        fontWeight: 'normal',
        borderSize: '2px',
        width: '12%',
        textAlign: 'center',
        padding: '10px',
        borderRadius: '5px',
    
        
    },
    buttonTwo: {
        borderStyle: 'solid',
        borderColor: '#FCB371',
        color: '#fff',
        background: '#FCB371',
        fontFamily: 'Pacifico',
        fontWeight: 'normal',
        borderSize: '2px',
        width: '12%',
        textAlign: 'center',
        padding: '10px',
        borderRadius: '5px',
        marginLeft: '20px'
    
    }
    

    
}

export default App;