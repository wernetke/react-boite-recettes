import React, { Component } from 'react';

class AjouterRecette extends Component {
    state= {
        nom: '',
        image:'',
        ingredients:'',
        instructions:''
    }
    //Mettre a jour son state
    handleCHange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        //on gere le form
        event.preventDefault()
        //copier le state
        const recette = {...this.state }
        //On effectue la fonction créée dans le App
        this.props.ajouterRecette(recette)
        //reset le formulaire
        Object.keys(recette).forEach(item => {
             recette[item] = ''})
        this.setState({ ...recette })
    }

    render() {
        return (
            <div className="card">
                <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
                    <input value={this.state.nom} onChange={this.handleCHange} name="nom" type="text" placeholder="Nom de la recette"/>
                    <input value={this.state.image} onChange={this.handleCHange} name="image" type="text" placeholder={"Nom de l'image"}/>
                    <textarea value={this.state.ingredients} onChange={this.handleCHange} name="ingredients"  rows="3" placeholder="Liste des ingrédients"/>
                    <textarea value={this.state.instructions} onChange={this.handleCHange} name="instructions"  rows="15" placeholder="Liste des instructions"/>
                    <button type="submit"> Ajouter une recette </button>
                </form>
                <h2>Ajouter Recette</h2>
            </div>
        );
    }
}

export default AjouterRecette;