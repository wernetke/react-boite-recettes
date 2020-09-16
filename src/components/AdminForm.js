import React from 'react';

const AdminForm = ({ id:key, majRecette, recettes, supprimerRecette }) => {

    const recette = recettes[key]

    const handleChange = (event,key) => {
        //recupere le bon champs
        const { name, value } = event.target
        //copier le state initial avant changement
        const recette = recettes[key]
        //setter les champs
        recette[name] = value
        //realiser l'update
        majRecette(key, recette)
    }

    return (
        <div className="card">
                <form className="admin-form " >
                    <input value={recette.nom} onChange={e => handleChange(e,key)} name="nom" type="text" placeholder="Nom de la recette"/>
                   
                    <input value={recette.image} name="image" type="text" placeholder={"Nom de l'image"}/>
                    
                    <textarea value={recette.ingredients} name="ingredients"  rows="3" placeholder="Liste des ingrédients"/>
                   
                    <textarea value={recette.instructions} name="instructions"  rows="15" placeholder="Liste des instructions"/>
                   
                </form>
                <button onClick={() => supprimerRecette(key)}> Supprimer </button>
            </div>
    );
};

export default AdminForm;