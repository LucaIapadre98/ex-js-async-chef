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

getChefBirthday(1).then(birthday => {                                      
    const formattedDate = dayjs(birthday).format("DD/MM/YYYY")                             // Esempio di utilizzo della funzione
    return console.log(`La data di nascita dello chef è: ${formattedDate}`);
}).catch(error => {
    console.error('Errore:', error);
});



// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch

function getChefBirthday(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
            if (!recipeResponse.ok) {
                throw new Error('Errore nel recupero della ricetta');
            }
            const recipe = await recipeResponse.json();

            const userId = recipe.userId;

            const chefResponse = await fetch(`https://dummyjson.com/users/${userId}`);
            if (!chefResponse.ok) {
                throw new Error('Errore nel recupero delle informazioni dello chef');
            }
            const chef = await chefResponse.json();

            resolve(chef.birthDate);
        } catch (error) {
            reject(error);
        } finally {
            console.log('Operazione completata');
        }
    });
}