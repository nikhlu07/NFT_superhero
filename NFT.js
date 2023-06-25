
// NFT superhero collection
const NFTs = [];
// create a variable to hold your NFT's
// this function will take in some values as parameters, create an
// // NFT object using the parameters passed to it for its metadata, 
// // and store it in the variable above.
function mintNFT(_realName, _superPower, _speed, _biggestfight, _superheroName) {
  const nft = {  
    "Name": _realName,
    "superpower": _superPower,
    "speed": _speed,
    "biggestfight": _biggestfight,
    "superheroname": _superheroName
  };
  NFTs.push(nft);
  console.log("Minted: " + _realName);
}
// // create a "loop" that will go through an "array" of NFT's
// // and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {  
    console.log("\nNumber: \t\t" + (i + 1));
    console.log("Name: \t" + NFTs[i].Name);
    console.log("super power: \t" + NFTs[i].superpower);
    console.log("speed: \t" + NFTs[i].speed);
    console.log("biggest fight: \t" + NFTs[i].biggestfight);
    console.log("superhero name: \t" + NFTs[i].superheroname);
  }
}

function getTotalSupply() {
  console.log("\nTotal number of NFTs: " + NFTs.length);  t
}

// Call your functions below this line
mintNFT("Tony Stark", "Armor suit", "fast", "Fight with Thanos", "Iron Man");
mintNFT("Steve Rogers", "Super serum", "average", "Red Skull", "Captain America");
mintNFT("Natasha", "Fighting Skills", "slow", "Taskmaster", "Black Widow");
mintNFT("Thor", "God of thunder", "fastest", "Hela", "Thor");
mintNFT("Bruce Wayne", "Rich", "average", "Joker", "I am Batman");
mintNFT("Clark Kent", "Invulnerability, superhuman strength", "speed of light", "Lex Luthor", "Superman");
mintNFT("Wade Wilson", "Healing power", "average", "T-Ray", "Deadpool");
getTotalSupply();
listNFTs();





