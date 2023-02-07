let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
]

const namenArr = []

edelMetallPreise.forEach((item) => {
    namenArr.push(item.name)
})
console.log(namenArr)

const namen = edelMetallPreise.map((item) => {
    console.log(item.name)
})

const preise = []

edelMetallPreise.forEach((item) => {
    preise.push(item.preiseGramEuro)
})
console.log(preise)

edelMetallPreise.map((item) =>{
    console.log(item.preiseGramEuro)
})

const veraenderung = []

edelMetallPreise.forEach((item) => {
    veraenderung.push(item.veraenderung)
})

console.log(veraenderung)

const over50 = []

edelMetallPreise.filter((item) => {
    item.preiseGramEuro > 50 ? over50.push(item.preiseGramEuro) : console.log("nope")  
})

console.log(over50)


document.querySelector("#name").innerHTML= namenArr.join("<th></th>")
document.querySelector("#preis").innerHTML= preise.join("<th></th>")

document.querySelector("#veränderung").innerHTML= veraenderung.join("<th></th>")




