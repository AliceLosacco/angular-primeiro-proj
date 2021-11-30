import { Component } from "@angular/core";

//informa que a classe é um componente no angular
@Component({ 
    selector: 'meu-primeiro-component',
    template: `
        <p>Meu primeiro Component com Angular 2!</p>
    `
}) 
export class MeuPrimeiroComponent {}
