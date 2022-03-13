// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tags, Notes } = initSchema(schema);

export {
  Tags,
  Notes
};