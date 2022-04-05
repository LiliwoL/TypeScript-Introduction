module BO
{
	// ##########
	// Interfaces
	// ##########
    export interface Affichable{
        afficher() : string
    }
	export interface Vendable {
        acheteur ?: Acheteur;
        meilleureEnchere : number;

        encherir(nouvelleEnchere : number, acheteur : Acheteur);
    }


    export class Acheteur
    {
        constructor(public nom : string, public prenom : string){}
    }
    export class Auteur implements Affichable
    {
        constructor(public nom : string, public prenom : string){}
        afficher() : string
        {
            return this.nom+" "+this.prenom;
        }
    }


	// ##########
	// Classes
	// ##########
    export class Oeuvre implements Affichable, Vendable
    {
		// Attributs
        meilleureEnchere : number;
        acheteur ?: Acheteur;

        constructor(
			public annee : number,
			public titre : string,
			public auteurs : Auteur[]
		){}

        encherir(nouvelleEnchere : number, acheteur : Acheteur) : void
        {
            this.meilleureEnchere = nouvelleEnchere;
            this.acheteur = acheteur;
        }

        afficher() : string
        {
            var stringAuteurs : string;
            if(this.auteurs!=undefined)
            {
                stringAuteurs="";

				// Expression lambda de parcours du tableau en une seule ligne
                this.auteurs.forEach((value)=>stringAuteurs+=(stringAuteurs==""?"":", ") + value.afficher());
            }
            return "[annee : "+this.annee+
                    ", titre : "+this.titre+
                    ", auteurs : ["+stringAuteurs+"]"+
                    (this.meilleureEnchere!=undefined?(", meilleure enchère : "+this.meilleureEnchere):"")+
                    (this.acheteur!=undefined?(", acheteur : "+this.acheteur.nom+" "+this.acheteur.prenom):"")+
                    "]";
        }
    }
    export class Sculpture extends Oeuvre
    {
        constructor(annee : number, titre : string, auteurs : Auteur[], public matiere : string)
        {
            super(annee, titre, auteurs);
        }

    }
    export class Livre extends Oeuvre
    {
        constructor(annee : number, titre : string, auteurs : Auteur[])
        {
            super(annee, titre, auteurs);
        }
    }
    export class Peinture extends Oeuvre
    {
        constructor(annee : number, titre : string, auteurs : Auteur[])
        {
            super(annee, titre, auteurs);
        }
    }
}


// ####################################

// Tableau des oeuvres
var oeuvres : BO.Oeuvre[] = [];
oeuvres.push(new BO.Sculpture(1925, "le penseur de rodin",[new BO.Auteur("RODIN","Auguste")], "bronze"));
oeuvres.push(new BO.Livre(1876, "Au bonheur des dames", [new BO.Auteur("ZOLA","Emile")]));
oeuvres.push(new BO.Peinture(1938, "Guernica", [new BO.Auteur("PICASSO","Pablo")]));


// ####################################

// Tableau de vendables
var vendables : BO.Vendable[] = [];
	// Ajout de toutes les oeuvres dans le tableau de vendables
	oeuvres.forEach((value)=>vendables.push(value));


// ####################################

// Tableau des affichables
var affichables : BO.Affichable[] = [];
	// Ajout de toutes les oeuvres dans le tableau des affichables
	oeuvres.forEach((value)=>affichables.push(value));

	//Ne compile pas c'est normal!! des vendables ne sont pas forcément affichable.
	//vendables.forEach((value)=>affichables.push(value));


// ####################################

//Affichage des oeuvres
console.log("Affichage des oeuvres avant enchères:");
oeuvres.forEach((value)=>console.log(value.afficher()));


// ####################################

//Enchères
console.log("Enchères mise en place");
//vendables.forEach((value)=>value.encherir(1000,new BO.Acheteur("Bowie", "David")));
oeuvres.forEach((value)=>value.encherir(1000,new BO.Acheteur("Bowie", "David")));


// ####################################

//Affichage des affichables
console.log("Affichage des affichables:");
//affichables.forEach((value)=>console.log(value.afficher()));
oeuvres.forEach((value)=>console.log(value.afficher()));
