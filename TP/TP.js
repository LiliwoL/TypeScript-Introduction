"use strict";
exports.__esModule = true;
var VenteAuxEncheres_1 = require("./VenteAuxEncheres");
// ######################## Instances et utilisation du module
// Création des oeuvres
var oeuvres = [];
// On ajoute une oeuvre à notre tableau d'oeuvres
oeuvres.push(new VenteAuxEncheres_1.VenteAuxEncheres.Sculpture(1925, "Le penseur de Rodin", [
    new VenteAuxEncheres_1.VenteAuxEncheres.Auteur("Rodin", "Auguste")
], "Bronze"), new VenteAuxEncheres_1.VenteAuxEncheres.Livre(1876, "Au bonheur des dames", [
    new VenteAuxEncheres_1.VenteAuxEncheres.Auteur("Zola", "Emile")
]), new VenteAuxEncheres_1.VenteAuxEncheres.Peinture(1938, "Guernica", [
    new VenteAuxEncheres_1.VenteAuxEncheres.Auteur("Picasso", "Pablo")
]));
// Parcours et affichage des oeuvres
oeuvres.forEach(function (oeuvre) { return console.log(oeuvre.afficher()); });
// Encheres
oeuvres.forEach(function (oeuvre) {
    oeuvre.encherir(Math.floor(Math.random() * 10000), new VenteAuxEncheres_1.VenteAuxEncheres.Acheteur("Bara", "Morgane"));
});
// Parcours et affichage des oeuvres
oeuvres.forEach(function (oeuvre) { return console.log(oeuvre.afficher()); });
