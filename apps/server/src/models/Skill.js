const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Skill category is required'],
      enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Other'],
      default: 'Frontend',
    },
    icon: {
      type: String,
      default: '',
    },
    proficiency: {
      type: Number,
      min: 1,
      max: 100,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Skill', skillSchema);
