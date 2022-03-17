// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Tag, NoteTags } = initSchema(schema);

export {
  Note,
  Tag,
  NoteTags
};