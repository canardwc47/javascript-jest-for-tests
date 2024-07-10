// ex6.js

// Fonction pour trouver la valeur maximale dans un tableau 
export const findMaxValue = (arr) => {
    return Math.max(...arr);

};

// Fonction pour supprimer les valeurs dupliquées d'un tableau 
export const removeDuplicates = (arr) => {
    return [...new Set(arr)];
};

// Fonction pour vérifier si un tableau inclut une valeur spécifique
export const includesValue = (arr, value) => {
    return arr.includes(value);
};

// Fonction pour trier un tableau de nombres dans l'ordre croissant
export const sortArray = (arr) => {
    return arr.slice().sort((a,b) => a - b);
};