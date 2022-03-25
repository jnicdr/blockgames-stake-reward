const hre = require("hardhat")

const main = async() => {

    const StakableKosiToken =  await hre.ethers.getContractFactory("StakableKosiToken")
    const stakableKosiToken = await StakableKosiToken.deploy()

    await stakableKosiToken.deployed()
    console.log(`StakableKosiToken contract address: ${stakableKosiToken.address}`)

}

main()