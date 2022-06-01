export default async function searchOSM(inputValue, limit, currentBounds) {
    let url = 'https://nominatim.openstreetmap.org/?addressdetails=1&q=' + inputValue + ', Warszawa&format=json&limit=' + limit
    if(currentBounds !== null)
        url = 'https://nominatim.openstreetmap.org/?addressdetails=1&q=' + inputValue + ', Warszawa&format=json&limit=' + limit + '&viewbox=' + currentBounds[0][1] + ',' + currentBounds[0][0] + ',' + currentBounds[1][1] + ',' + currentBounds[1][0] + "&bounded=1"
    const response = await fetch(url)
    let data = await response.json()
    data = data.filter(x => x.address.city === "Warszawa" || x.address.city === "Warsaw");
    console.log("OSM search result: ", data)
    return data
}