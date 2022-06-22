// const { set } = require("express/lib/application")

async function calcular()
{
    var pokemonIn = document.getElementById('valor').value
    var nome = document.getElementById('nome')
    var id = document.getElementById('id')
    var tipos = document.getElementById('tipos')
    var fraquezas = document.getElementById('fraquezas')
    var url = "https://pokeapi.co/api/v2/pokemon/"+ pokemonIn
    var response = await fetch(url)
    var pokemonOut = await response.json()
    var imagem = document.getElementById('imgPokemon')
    id.innerHTML= '<b>Index:</b>'
    nome.innerHTML = `<b>Nome:</b>${pokemonOut.species.name}`
    id.innerHTML += `${pokemonOut.id}`
    // clean
    if(tipos.childElementCount > 0)
    {
        for (var i = 0;i <= tipos.getElementsByTagName('li').length; i++)
        {
            tipos.getElementsByTagName('li')[0].remove()
        }
    }
    if(fraquezas.childElementCount > 0)
    {
        const qt = fraquezas.getElementsByTagName('li').length
        // alert(fraquezas.childElementCount)
        for (var p = 0;p < qt; p++)
        {
            fraquezas.getElementsByTagName('li')[0].remove()
        }
    }
    // tipos----------------------------------------------------
    for(var i = 0; i < pokemonOut.types.length; i++)
    {
        var nodeli = document.createElement('li')
        var textnode = document.createTextNode(pokemonOut.types[i].type.name)
        nodeimg = document.createElement('img')
        nodeimg.setAttribute('src', 'imagens/px-Pokémon_'+ pokemonOut.types[i].type.name +'_Type_Icon.svg.png')
        nodeimg.setAttribute('class', 'imgTipo')
        nodeli.appendChild(textnode)
        nodeli.appendChild(nodeimg)
        tipos.appendChild(nodeli)
    }
    // fraquezas------------------------------------------------
    var fraqArray = new Array()
    for (var c = 0; c < pokemonOut.types.length; c++)
    {
        fraqueza(pokemonOut.types[c].type.name)
    }
    function fraqueza(type)
    {
        if (type == 'fire')
        {
            fraqArray.push('water','rock','ground')
        }
        else if (type == 'flying')
        {
            fraqArray.push('rock','ice','electric')
        }
    }
    var fraqArrayUnique = [...new Set(fraqArray)]
    for (var f = 0; f < fraqArrayUnique.length; f++)
    {
        var nodeli = document.createElement('li')
        var textnode = document.createTextNode(fraqArrayUnique[f])
        nodeli.appendChild(textnode)
        fraquezas.appendChild(nodeli)
    }
    imagem.src = `${pokemonOut.sprites.front_default}`
    imagem.setAttribute('width','500')
} 