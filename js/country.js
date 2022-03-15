const lodeCountrys = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCouteys(data))

}

const displayCouteys = (country) => {



    const countryHtml = country.map(country => getContry(country))
    // console.log(countryHtml[1]);
    const container = document.getElementById('container')
    container.innerHTML = countryHtml.join('')
    country

}


// parameter destdestructurin
const getContry = ({ name, flags, area, region }) => {

    return `
    <div class='country'>
        <h2>${name.common}</h2>
        <p>Area:${area} </p>
        <p>continet:${region} </p>
        <img src="${flags.png}">
    </div>
    `
}



// object destdestructurin
// const getContry = country => {
//     const { name, flags } = country

//     return `
//     <div class='country'>
//         <h2>${name.common}</h2>
//         <img src="${flags.png}">
//     </div>
//     `
// }


// original
// const getContry = country => {

//     return `
//     <div class='country'>
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}">
//     </div>
//     `
// }


lodeCountrys()