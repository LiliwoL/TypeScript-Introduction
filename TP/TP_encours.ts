module BO
{
	export class Acheteur
    {
        constructor(public nom : string, public prenom : string){}
    }

	export class Auteur
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
    export class Oeuvre
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