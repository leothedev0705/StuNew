import { Schema, model, Document } from 'mongoose';

export interface IStudySession extends Document {
  userId: Schema.Types.ObjectId;
  title: string;
  type: 'pomodoro' | 'feynman' | 'deepWork' | 'custom';
  duration: number;
  startTime: Date;
  endTime?: Date;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  notes?: string;
  resources?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const studySessionSchema = new Schema<IStudySession>(
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
    type: {
      type: String,
      enum: ['pomodoro', 'feynman', 'deepWork', 'custom'],
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 0,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['scheduled', 'in-progress', 'completed', 'cancelled'],
      default: 'scheduled',
    },
    notes: {
      type: String,
      trim: true,
    },
    resources: [{
      type: String,
      trim: true,
    }],
  },
  {
    timestamps: true,
  }
);

export default model<IStudySession>('StudySession', studySessionSchema); 