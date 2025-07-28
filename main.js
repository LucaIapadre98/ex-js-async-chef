// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

async function getChefBirthday(id) {
    try {
        // Recupera la ricetta
        const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!recipeResponse.ok) {
            throw new Error('Errore nel recupero della ricetta');
        }
        const recipe = await recipeResponse.json();

        // Estrai userId dalla ricetta
        const userId = recipe.userId;

        // Recupera le informazioni dello chef
        const chefResponse = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!chefResponse.ok) {
            throw new Error('Errore nel recupero delle informazioni dello chef');
        }
        const chef = await chefResponse.json();

        // Restituisce la data di nascita dello chef
        return chef.birthDate;
    } catch (error) {
        console.error(error);
    }
}
// Esempio di utilizzo della funzione
getChefBirthday(1).then(birthday => {
    console.log(`La data di nascita dello chef è: ${birthday}`);
}).catch(error => {
    console.error('Errore:', error);
});

