import { Schema, model, Document } from 'mongoose';

export interface INote extends Document {
  userId: Schema.Types.ObjectId;
  title: string;
  content: string;
  tags: string[];
  category: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema<INote>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [{
      type: String,
      trim: true,
    }],
    category: {
      type: String,
      required: true,
      trim: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model<INote>('Note', noteSchema); 