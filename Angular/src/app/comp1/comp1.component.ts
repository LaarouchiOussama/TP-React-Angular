import { Component, OnInit } from '@angular/core';
import { Personne } from '../classes/personne'

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  age: number = 0;
  personne: Personne = new Personne(0,'','');
  submit: string = "Form not Submitted :("

  constructor() { }

  submitform(): void{
    if(this.personne.nom == '' || this.personne.prenom == ''){
      alert('Cannot submit form is empty');
    }else{
      this.submit = 'Thanks ' + this.personne.nom + ' ' + this.personne.prenom + ' Form Submitted :)';
    }
  }

}
