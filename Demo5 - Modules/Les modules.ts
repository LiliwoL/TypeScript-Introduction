// Création d'un module
module BusinessObject
{
	// ...
	export class Sport
	{
		constructor( public nom: string, public description: string ) {}

		public afficher(): void
		{
			console.log( this.nom + " " + this.description);
		}
	}
}

// Utilisation du module
let sportClassModule: BusinessObject.Sport =
	new BusinessObject.Sport("Football", "Sport de ballon");

sportClassModule.afficher();


// Import d'un module depuis un autre fichier
import { Validator } from "./Validator";
let classeStringValidator = Validator.StringValidator;

let newSV = new classeStringValidator("une chaine");
newSV.afficher();