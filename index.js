async function getDogs (){
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    allBreedlist(data.message);
}

function allBreedlist(breedlist){
    document.getElementById("breed").innerHTML = `
    <select class="name" onchange="breedImg(this.value)">
       <option>Choose a dog breed</option>
       ${Object.keys(breedlist).map(breed=>{
           return `<option>${breed}</option>`
       }).join('')}
    </select>

    `;
}

async function breedImg(breed){

    if(breed != "Choose a dog breed"){
        const rep = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await rep.json();
        createImage(data.message);

    }

}

function createImage(image){
    document.getElementById("image").innerHTML=`
    
    <img src="${image[0]}" alt="dog">
    `;
}

getDogs();