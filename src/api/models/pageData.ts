import mongoose, { Schema, Document } from 'mongoose';

export interface IPage extends Document {
  _id: any;
  slug: string;
  data: object;
}

const PageSchema: Schema = new Schema({ slug: String, data: Object }, { collection: 'page' });
export default mongoose.models.Page || mongoose.model<IPage>('Page', PageSchema);
