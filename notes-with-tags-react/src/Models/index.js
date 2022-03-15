// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, Note } = initSchema(schema);

export {
  Tag,
  Note
};