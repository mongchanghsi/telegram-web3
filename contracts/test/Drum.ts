import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Drum", () => {
  const deployDrum = async () => {
    const [owner, otherAccount] = await hre.ethers.getSigners();
    const Drum = await hre.ethers.getContractFactory("Drum");
    const drumContract = await Drum.deploy();

    return { drumContract, owner, otherAccount };
  };

  describe("Deployment", () => {
    it("should set the right owner", async () => {
      const { drumContract, owner } = await loadFixture(deployDrum);
      expect(await drumContract.owner()).to.equal(owner.address);
    });
  });

  describe("Actions", () => {
    it("should increase drum", async () => {
      const { drumContract, otherAccount } = await loadFixture(deployDrum);

      await drumContract.connect(otherAccount).drum();

      const beatCount = await drumContract.beat();
      expect(beatCount).to.equal(1);
    });
  });
});
