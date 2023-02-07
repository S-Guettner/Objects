let unsereHaustiere = [
    {
      tiertyp: "Katze",
  
      names: [
        "Gipsy",
        "Nala",
        "Dinky"
      ]
    },
    {
      tiertyp: "Hunde",
      names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
      ]
    },
    {
        changeName: (index,changedName) => {
            unsereHaustiere[1].names[index] = changedName
        }
    }
  ];
  

console.log(unsereHaustiere[0].names[1])
console.log(unsereHaustiere[1].names[2])
console.log(unsereHaustiere[1].names)

unsereHaustiere[2].changeName(1,"TEST")
