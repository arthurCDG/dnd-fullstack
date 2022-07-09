const { Schema, model } = require("mongoose");

const heroSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    maxHealth: Number,
    health: Number,
    mana: Number,
    skills: [{
      type: Schema.Types.ObjectId,
      ref: 'Skill',
    }],
    maxSteps: Number,
    stepsCount: Number,
    attackCount: {
      type: Number,
      default: 1,
    },
    maxAttackCount: {
      type: Number,
      default: 1,
    },
    healCount: {
      type: Number,
      default: 1,
    },
    maxHealCount: {
      type: Number,
      default: 1,
    },
    shield: {
      type: Number,
      default: 2,
    },
    weapon: {
      type: Schema.Types.ObjectId,
      ref: 'Weapon',
    },
    spell: {
      type: Schema.Types.ObjectId,
      ref: 'Spell',
    },
    inventory: [],
    inventoryCapacity: {
      type: Number,
      default: 5,
    },
    isAlive: {
      type: Boolean,
      default: true,
    },
  }
);

const Hero = model("Hero", heroSchema);

module.exports = Hero;
