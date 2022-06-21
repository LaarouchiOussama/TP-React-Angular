import React from 'react';

class Props extends React.Component {

    constructor(props) {
        super(props);
    }

    style = {
        fontsSize: '35px',
        textAlign: 'center'
    };
    
    render() {

        return (
            <>
                <div style={{backgroundColor: 'yellow'}}>
                    <h3 style={this.style}>Debut du composant Props</h3>
                </div>
                <div style={{textAlign: 'center'}}>
                    <div><b>Ecole: </b><em>{this.props.ecole}</em></div>
                    <div><b>Filiére: </b><em>{this.props.filiere}</em></div>
                    <div><b>Matiére: </b><em>{this.props.matiere}</em></div>
                    <div><b>VH: </b><em>{this.props.vh}</em></div>
                    <div><b>Date: </b><em>{this.props.date.toString()}</em></div>
                </div>
                <div style={{backgroundColor: 'yellow'}}>
                    <h3 style={this.style}>Fin du composant Props</h3>
                </div>
            </>
        );
    }

}

export default Props;