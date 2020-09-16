import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// Firebase
import base from './base'

import recettes from './recettes'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount () {
    //reference ds firebase
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`,{
      context: this,
      state: 'recettes'
    })
  }

  componentWillUnmount () {
    //fermer la reference ds firebase
    //la connexion est terminée entre notre state et firebase
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  majRecette = (key, newRecette) => {
    const recettes = { ...this.state.recettes }
    recettes[key] = newRecette
    this.setState({ recettes })
  }

  supprimerRecette = key => {
    const recettes = { ...this.state.recettes }
    recettes[key] = null
    this.setState({ recettes })
  }

  //Remplir le state avec une liste pré-définie
  chargerExemple = () => this.setState({ recettes })


  render () {
    const cards = Object
    .keys(this.state.recettes)
  .map(key => <Card key={key} details={this.state.recettes[key]}/>)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
            { cards }
        </div>
        <Admin 
        pseudo={this.state.pseudo}
        recettes={this.state.recettes}
        //first param pour le props dans Admin, second va chercher la fonction créée
        ajouterRecette={this.ajouterRecette}
        majRecette={this.majRecette}
        supprimerRecette={this.supprimerRecette}
        chargerExemple={this.chargerExemple}/>
      </div>
    )
  }
}

export default App
