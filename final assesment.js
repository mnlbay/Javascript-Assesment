
/* Objectives of the system
1.  Has the ability to "mint" NFTs and store them
2.  You should "mint" at least three NFT's
3.  Has the ability to print the details of your NFTs to the console
4.  Has the ability to print the total supply of your NFT collection to the console */

// create a variable to hold your NFT's
let totalNFTs = 0;
const NFTs = []; // An array to hold NFT objects

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, image) {
    const newNFT = {
        name: name,
        description: description,
        image: image
    };
    NFTs.push(newNFT); // Push the new NFT object to the NFTs array
    totalNFTs++; // Increment the total number of NFTs
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("NFT COLLECTION:");
    for (const nft of NFTs) {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Image: " + nft.image);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Minted: " + totalNFTs);
}

// call your functions below this line
mintNFT("NFT1", "Description for NFT1", "image1.jpg");
mintNFT("NFT2", "Description for NFT2", "image2.jpg");
mintNFT("NFT3", "Description for NFT3", "image3.jpg");

listNFTs(); // Print the metadata of all minted NFTs
getTotalSupply();
