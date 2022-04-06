import { VenteAuxEncheres } from './VenteAuxEncheres';

// ######################## Instances et utilisation du module

// Création des oeuvres
let oeuvres : VenteAuxEncheres.Oeuvre[] = [];

// On ajoute une oeuvre à notre tableau d'oeuvres
oeuvres.push(
    new VenteAuxEncheres.Sculpture(
        1925,
        "Le penseur de Rodin",
        [
            new VenteAuxEncheres.Auteur(
                "Rodin",
                "Auguste"
            )
        ],
        "Bronze"
    ),
    new VenteAuxEncheres.Livre(
        1876,
        "Au bonheur des dames",
        [
            new VenteAuxEncheres.Auteur(
                "Zola",
                "Emile"
            )
        ]
    ),
    new VenteAuxEncheres.Peinture(
        1938,
        "Guernica",
        [
            new VenteAuxEncheres.Auteur(
                "Picasso",
                "Pablo"
            )
        ]
    )
);

// Parcours et affichage des oeuvres
oeuvres.forEach(
    (oeuvre) => console.log( oeuvre.afficher() )
);

// Encheres
oeuvres.forEach(
    (oeuvre) => {
        oeuvre.encherir(
            Math.floor(Math.random() * 10000),
            new VenteAuxEncheres.Acheteur(
                "Bara",
                "Morgane"
            )
        )
    }
);

// Parcours et affichage des oeuvres
oeuvres.forEach(
    (oeuvre) => console.log( oeuvre.afficher() )
);