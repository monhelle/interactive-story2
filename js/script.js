// Reprogramming Sequence for Mikael
class Human {
  constructor(name) {
    this.name = name;
    this.traits = {
      energy: 50,
      focus: 40,
      humor: 60,
      curiosity: 70,
      productivity: 45
    };
    this.mode = "normal";
  }

  updateTrait(trait, value) {
    if (this.traits[trait] !== undefined) {
      console.log(`Updating ${trait}...`);
      this.traits[trait] = value;
    }
  }

  activateMode(modeName) {
    console.log(`Activating mode: ${modeName}`);
    this.mode = modeName;
  }

  installUpgrade(upgradeName) {
    console.log(`Installing upgrade: ${upgradeName}...`);
  }

  reboot() {
    console.log(`Rebooting ${this.name}...`);
    console.log("System coming online...");
  }

  status() {
    console.log(`--- ${this.name} STATUS ---`);
    console.log("Mode:", this.mode);
    console.log("Traits:", this.traits);
  }
}

// Initialize Mikael
const mikael = new Human("Mikael");

// Reprogramming process
console.log("Initializing reprogramming sequence...");

mikael.installUpgrade("Confidence v2.3");
mikael.installUpgrade("Focus Booster");
mikael.installUpgrade("Creative Thinking Module");

mikael.updateTrait("focus", 85);
mikael.updateTrait("energy", 90);
mikael.updateTrait("productivity", 88);

mikael.activateMode("BEAST_MODE");

mikael.reboot();
mikael.status();

console.log("Reprogramming complete.");