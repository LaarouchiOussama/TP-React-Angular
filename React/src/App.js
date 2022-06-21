import Home from './Components/home';
import Comp1 from './Components/comp1';
import Exemple from './Components/exemple';
import Props from './Components/props';
import './App.css';

const ecole = "ESTEM";
const filiere = "SDDI3";
const matiere = "ReactJs";
const vh = 48;
const date = new Date();

const prof = {
  nom: "CHOUGDALI",
  prenom: "Salami",
  age: 41,
  dateNaissance: new Date("1979-12-7")
};

function App({ items }) {

  const lists = items.map(item =>(
    <tr>
      <td>{item.nom}</td>
      <td>{item.prenom}</td>
      <td>{item.dateNaissance}</td>
    </tr>
  ))

  return (
    <>
      <div className="Div">
        <h3 className="App">Debut Du composant App</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Date De Naissance</th>
          </tr>
        </thead>
        <tbody>
          {lists}
        </tbody>
      </table>
      <Home prof={prof}/>
      <Comp1/>
      <Exemple/>
      <Props
        ecole={ecole}
        filiere={filiere}
        matiere={matiere}
        vh={vh}
        date={date}
      />
      <div className="Div">
        <h3 className="App">Fin Du composant App</h3>
      </div>
    </>
  );
}

export default App;
