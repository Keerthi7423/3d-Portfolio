const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
    },
    techStack: {
      type: [String],
      required: [true, 'At least one technology is required'],
    },
    imageUrl: {
      type: String,
      default: '',
    },
    liveUrl: {
      type: String,
      trim: true,
      default: '',
    },
    githubUrl: {
      type: String,
      trim: true,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // auto-generates createdAt and updatedAt
  }
);

module.exports = mongoose.model('Project', projectSchema);
