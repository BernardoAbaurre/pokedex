async function calcular()
{
    var pokemonIn = document.getElementById('valor').value
    var nome = document.getElementById('nome')
    var id = document.getElementById('id')
    var tipos = document.getElementById('tipos')
    var url = "https://pokeapi.co/api/v2/pokemon/"+ pokemonIn
    var response = await fetch(url)
    var pokemonOut = await response.json()
    var imagem = document.getElementById('imgPokemon')
    if(tipos.childElementCount > 0)
    {
        for (var i = 0;i < tipos.getElementsByTagName('li').length; i++)
        {
            tipos.getElementsByTagName('li')[i].remove()
        }
    }
    id.innerHTML= '<b>ID:</b>'
    nome.innerHTML = `<b>Nome:</b>${pokemonIn}`
    id.innerHTML += `${pokemonOut.id}`
    for(var i = 0; i < pokemonOut.types.length; i++)
    {
        var nodeli = document.createElement('li')
        textnode = document.createTextNode(pokemonOut.types[i].type.name)
        nodeimg = document.createElement('img')
        nodeimg.setAttribute('src', 'imagens/px-Pokémon_'+ pokemonOut.types[i].type.name +'_Type_Icon.svg.png')
        nodeimg.setAttribute('class', 'imgTipo')
        nodeli.appendChild(textnode)
        nodeli.appendChild(nodeimg)
        tipos.appendChild(nodeli)
    }
    // tipo.innerHTML = pokemonOut.types[0].type.name
    imagem.src = `${pokemonOut.sprites.front_default}`
    imagem.setAttribute('width','500')
} 