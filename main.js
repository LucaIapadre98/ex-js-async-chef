// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

async function getChefBirthday(id) {
    try {
        const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);                           // Recupera la ricetta
        if (!recipeResponse.ok) {
            throw new Error('Errore nel recupero della ricetta');
        }
        const recipe = await recipeResponse.json();

    
        const userId = recipe.userId;                                                                 // Estrai userId dalla ricetta

        const chefResponse = await fetch(`https://dummyjson.com/users/${userId}`);                         // Recupera le informazioni dello chef
        if (!chefResponse.ok) {
            throw new Error('Errore nel recupero delle informazioni dello chef');
        }
        const chef = await chefResponse.json();

        return chef.birthDate;                                                                     // Restituisce la data di nascita dello chef                            
    } catch (error) {
        console.error(error);
    }
}

getChefBirthday(1).then(birthday => {                                                                 // Esempio di utilizzo della funzione
    console.log(`La data di nascita dello chef è: ${birthday}`);
}).catch(error => {
    console.error('Errore:', error);
});

