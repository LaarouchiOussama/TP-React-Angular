function getCurrentTime(){
    return new Date().toUTCString();
}

function Comp1() {
    let time = new Date().toTimeString();
    let style = {
        fontsSize: '35px',
        textAlign: 'center'
    };

    return (
        <>
            <div style={{backgroundColor: 'magenta'}}>
                <h3 style={style}>Debut du composant comp1</h3>
            </div>
            <div className="Div">
                <p className="App">L'heure Actuelle est : {time}</p>
                <p className="App">L'heure Actuelle (Forme UTC) est : {getCurrentTime()}</p>
            </div>
            <div style={{backgroundColor: 'magenta'}}>
                <h3 style={style}>Debut du composant comp1</h3>
            </div>
        </>
    )
}

export default Comp1;