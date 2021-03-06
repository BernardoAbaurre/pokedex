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
    // clear
    if(tipos.childElementCount > 0)
    {
        for (var i = 0;i <= tipos.getElementsByTagName('li').length; i++)
        {
            tipos.getElementsByTagName('li')[0].remove()
        }
    }
    if(fraquezas.childElementCount > 0)
    {
        const qt = fraquezas.getElementsByTagName('nav').length
        // alert(fraquezas.childElementCount)
        for (var p = 0;p < qt; p++)
        {
            fraquezas.getElementsByTagName('nav')[0].remove()
        }
    }
    if (document.getElementsByClassName('f2').length > 0)
    {
        document.getElementsByClassName('f2')[0].remove()
    }
    // tipos----------------------------------------------------
    for(var i = 0; i < pokemonOut.types.length; i++)
    {
        var nodenavf = document.createElement('li')
        var textnode = document.createTextNode(pokemonOut.types[i].type.name)
        nodeimg = document.createElement('img')
        nodeimg.setAttribute('src', 'imagens/px-Pokémon_'+ pokemonOut.types[i].type.name +'_Type_Icon.svg.png')
        nodeimg.setAttribute('class', 'imgTipo')
        nodenavf.appendChild(textnode)
        nodenavf.appendChild(nodeimg)
        tipos.appendChild(nodenavf)
    }
    // fraquezas------------------------------------------------
    var fraqArray = new Array()
    for (var c = 0; c < pokemonOut.types.length; c++)
    {
        fraqueza(pokemonOut.types[c].type.name)
    }
    function fraqueza(type)
    {
        if (type == 'bug')
        {
            fraqArray.push('flying','rock','fire')
        }
        else if (type == 'dark')
        {
            fraqArray.push('bug','fairy','fighting')
        }
        else if (type == 'dragon')
        {
            fraqArray.push('dragon','fairy','ice')
        }
        else if (type == 'electric')
        {
            fraqArray.push('ground')
        }
        else if (type == 'flying')
        {
            fraqArray.push('rock','ice','electric')
        }
        else if (type == 'normal')
        {
            fraqArray.push('fighting')
        }
        else if (type == 'fighting')
        {
            fraqArray.push('flying','psychic','fairy')
        }
        else if (type == 'poison')
        {
            fraqArray.push('ground','psychic')
        }
        else if (type == 'ground')
        {
            fraqArray.push('water','grass','ice')
        }
        else if (type == 'rock')
        {
            fraqArray.push('fighting','ground','steel','water','grass')
        }
        else if (type == 'ghost')
        {
            fraqArray.push('ghost','dark')
        }
        else if (type == 'fire')
        {
            fraqArray.push('ground','rock','water')
        }
        else if (type == 'water')
        {
            fraqArray.push('grass','electric')
        }
        else if (type == 'grass')
        {
            fraqArray.push('flying','poison','bug','fire','ice')
        }
        else if (type == 'psychic')
        {
            fraqArray.push('bug','ghost','dark')
        }
        else if (type == 'ice')
        {
            fraqArray.push('fighting','rock','steel','fire')
        }
        else if (type == 'fairy')
        {
            fraqArray.push('poison','steel')
        }
        else if (type == 'steel')
        {
            fraqArray.push('fighting','ground','fire')
        }
    }
    var fraqArrayUnique = [...new Set(fraqArray)]
    if (fraqArrayUnique.length > 5)
    {
        var nodedivf2 = document.createElement('div')
        nodedivf2.setAttribute('class','f2')
        document.getElementById('listaFraq').appendChild(nodedivf2)
    }
    for (var f = 0; f < fraqArrayUnique.length; f++)
    {
        if (f <= 4)
        {
            var nodenavf = document.createElement('nav')
            nodeimg = document.createElement('img')
            nodeimg.setAttribute('src', 'imagens/px-Pokémon_'+fraqArrayUnique[f]+'_Type_Icon.svg.png')
            nodeimg.setAttribute('class', 'imgTipo')
            nodenavf.appendChild(nodeimg)
            fraquezas.appendChild(nodenavf)
        }
        else
        {
            var nodenavf = document.createElement('nav')
            nodeimg = document.createElement('img')
            nodeimg.setAttribute('src', 'imagens/px-Pokémon_'+fraqArrayUnique[f]+'_Type_Icon.svg.png')
            nodeimg.setAttribute('class', 'imgTipo')
            nodenavf.appendChild(nodeimg)
            document.getElementsByClassName('f2')[0].appendChild(nodenavf)
        }
    }
    imagem.src = `${pokemonOut.sprites.front_default}`
    imagem.setAttribute('width','500')
} 