const { Schema, model } = require("mongoose");

const monsterSchema = new Schema(
  {
    name: String,
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
    isAlive: {
      type: Boolean,
      default: true,
    },
  }
);

const Monster = model("Monster", monsterSchema);

module.exports = Monster;
