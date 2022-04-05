// Déclaration en TS
class Sport
{
	// Attributs
	public nom : string;
	private prive : string;

	// Constructor
	// Création des attributs en live!
	constructor( nom: string, public description: string)
	{
		this.nom = nom;
		this.prive = "valeur cachée mise par défaut";
	}

	// Méthode d'affichage
	public afficher():void
    {
		console.log("Classe SPORT - afficher()");
        console.log(this.nom + " " + this.description + " / " + this.prive);
    }
}

// Test d'instanciation
let sport : Sport =  new Sport("Squash", "Un sport de raquette");
// Appel à la méthode d'affichage
sport.afficher();


// ######### Héritage
class SportDeCompetition extends Sport
{
	// Pas besoin de déclarer l'attribut public niveau

	constructor( nom: string, description: string, public niveau: string)
	{
		// Appel au constructeur parent
		super(nom, description);
	}

	// Surcharger la méthode afficher()
	public afficher(): void
	{
		// Appel à la méthode parente
		super.afficher();

		console.log("Classe SportDeCompétition - afficher()");
		console.log("Niveau: " + this.niveau );
	}
}

console.log("#############");

// instance de SportDeCompetition
let sportDeCompetition: SportDeCompetition = new SportDeCompetition(
	"Tennis",
	"Un jeu de raquettes",
	"International"
);
sportDeCompetition.afficher();


// ############################### Interface de classe

// https://www.typescriptlang.org/cheatsheets

// Création de l'interface
// Contrat ou comportement attendu
interface Jouable
{
	// Propriété optionnelle
	score?: string;

	// Méthode obligatoire à définir
	jouer( joueur1: string, joueur2: string ): string;
}

// Défnition d'une classe qui implémente Jouable
class SportJouable extends Sport implements Jouable
{
	// Je dois implémenter la methode jouer()
	jouer(joueur1: string, joueur2: string): string
	{
		let vainqueur = joueur1;

		if ( Math.floor( Math.random() * Math.floor(2)) == 0 )
		{
			vainqueur = joueur2;
		}

		// Cette fonction DOIT renvoyer du string
		return vainqueur;
	}
}

// Instanciation
let sportJouable: SportJouable = new SportJouable("Badminton", "Un sport super fatigant");
let vainqueur: string = sportJouable.jouer("Batman", "Superman");

console.log("Le vainqueur est " + vainqueur);


// ############################### Interface de méthode

// Interface de méthode
interface jouer
{
	(joueur1: string, joueur2: string): string;
}

let jouerAuBadminton: jouer = function (joueur1: string, joueur2: string): string
{
	console.log(joueur1 + " et " + joueur2 + " jouent au badminton");
	return joueur1;
}
console.log("Le vainqueur est " + jouerAuBadminton("Brivael", "Wayan"));