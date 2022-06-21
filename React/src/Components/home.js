import React from 'react';
import FormatData from './formatData';
import './home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    textStyle = {
        fontsSize: '35px',
        color: 'red', 
        textAlign: 'center'
    };

    style = {
        fontsSize: '35px',
        textAlign: 'center'
    };

    montant = 100;
    date = new Date();

    render() {
        console.log(this.props.prof)
        return (
            <>
                <div className="Divhome">
                    <h3 className="H3">Debut du composant Home</h3>
                </div>
                <div className="Divhome">
                    <h3 className="H3">Je suis le texte du composant Home (stylé par feuille de style home.css)</h3>
                    <h3 style={this.textStyle}> Je suis le texte du composant Home (stylé par attribut style) </h3>
                    <div style={this.style}><b>nom: </b><em>{this.props.prof.nom}</em></div>
                    <div style={this.style}><b>Prenom: </b><em>{this.props.prof.prenom}</em></div>
                    <div style={this.style}><b>Age: </b><em>{this.props.prof.age}</em></div>
                    <div style={this.style}><b>Date de Naissance: </b><em>{this.props.prof.dateNaissance.toString()}</em></div>
                    <FormatData montant={this.montant} date={this.date}/>
                </div>
                <div className="Divhome">
                    <h3 style={this.textStyle}>Fin du composant Home</h3>
                </div>
            </>
        );
    }

}

export default Home;