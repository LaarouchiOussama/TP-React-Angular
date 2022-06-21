import React from 'react';

class FormatData extends React.Component {

    constructor(props) {
        super(props);
    }

    formatMontant(montant){
        return parseFloat(montant).toFixed(2);
    }
    
    formatDate(date){
        const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
        let parsed_date = new Date(Date.parse(date));
        let formatted_date = parsed_date.getDate() +
        "-" + months[parsed_date.getMonth()] +
        "-" + parsed_date.getFullYear();
        return formatted_date;
    }

    render() {

        return (
            <div style={{textAlign: 'center'}}>
                <div style={{backgroundColor: 'brown'}}>
                    <h3>Debut du composant FormData</h3>
                </div>
                <br></br>
                <div><b>Montant Non Formatté: </b><em>{this.props.montant}</em></div>
                <div><b>Montant Formatté: </b><em>{this.formatMontant(this.props.montant)}</em></div>
                <br></br>
                <div><b>Date Non Formatté: </b><em>{this.props.date.toString()}</em></div>
                <div><b>Date Formatté: </b><em>{this.formatDate(this.props.date).toString()}</em></div>
                <div style={{backgroundColor: 'brown'}}>
                    <h3>Fin du composant FormData</h3>
                </div>
            </div>
        );
    }

}

export default FormatData;