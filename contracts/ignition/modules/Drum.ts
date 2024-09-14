import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DrumModule = buildModule("DrumModule", (m) => {
  const drum = m.contract("Drum");

  return { drum };
});

export default DrumModule;
