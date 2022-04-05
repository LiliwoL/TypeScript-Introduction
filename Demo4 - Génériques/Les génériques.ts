// Un tableau typé
let tableauType: number[] = [1, 2, 3];

// Ajouter un élément
//tableauType.push("4"); // Ne poeut pas compiler car type incompatible
tableauType.push(4);
console.log(tableauType);

// ####### Tableau Générique
let tableauGenerique: Array<number> = [9,8,7];
//tableauGenerique.push("6");
tableauGenerique.push(6);
console.log(tableauGenerique);

// ####### Tableau Générique2
let tableauGenerique2: Array<number | string> = [9,8,7];
tableauGenerique2.push("6");
tableauGenerique2.push(6);
console.log(tableauGenerique2);


// ##################### Classe Générique
class Viande
{
	constructor (public type: string){}
}
class Legume
{
	constructor (public type: string){}
}

class Poulet extends Viande{};
class Boeuf extends Viande{};

class Carotte extends Legume{};
class Poireau extends Legume{};

// Classe générique
class Sandwich<V extends Viande, L extends Legume>
{
	constructor( public viande: V, public legume: L){}

	public afficher(): void
	{
		console.log("Sandwich " + this.viande.type + " / " + this.legume.type);
	}
}
let sandwichPouletCarotte: Sandwich<Poulet, Carotte> =
	new Sandwich<Poulet, Carotte>(
		new Poulet("Poulet fermier"),
		new Carotte("Carotte des sables")
	);

sandwichPouletCarotte.afficher();