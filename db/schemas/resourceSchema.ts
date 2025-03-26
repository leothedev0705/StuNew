import { Schema, model, Document } from 'mongoose';

export interface IResource extends Document {
  userId: Schema.Types.ObjectId;
  title: string;
  description: string;
  type: 'video' | 'article' | 'document' | 'link' | 'other';
  url: string;
  tags: string[];
  category: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const resourceSchema = new Schema<IResource>(
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
    description: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ['video', 'article', 'document', 'link', 'other'],
      required: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
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

export default model<IResource>('Resource', resourceSchema); 