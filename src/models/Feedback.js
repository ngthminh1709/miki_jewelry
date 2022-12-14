const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./User');

const FeedbackSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    content: { type: String, required: true },
    rate: { type: Number, required: true },
    media: { type: Object, default: { id: '', src:'' } },
    targetId: { type: Schema.Types.ObjectId, required: true, ref: 'Feedback' },
    isReplied: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: 'feedbacks',
  }
);

module.exports = mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);
