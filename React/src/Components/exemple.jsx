import styles from './exemple.module.css';

function Exemple() {
    let style = {
        fontsSize: '35px',
        textAlign: 'center'
    };

    return (
        <>
            <div style={{backgroundColor: 'green'}}>
                <h3 style={style}>Debut du composant exemple</h3>
            </div>
            <div className={styles.divstyle}>
                <p className={styles.textstyle}>Utilisation des modules CSS</p>
            </div>
            <div style={{backgroundColor: 'green'}}>
                <h3 style={style}>Fin du composant exemple</h3>
            </div>
        </>
    )
}

export default Exemple;