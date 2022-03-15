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

const getContry = country => {
    return `
 <div>
 <h2>${country.name.common}</h2>
 <img src="${country.flags.png}">
 </div>
 `
}


lodeCountrys()