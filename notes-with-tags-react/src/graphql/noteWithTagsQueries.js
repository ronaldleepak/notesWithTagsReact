/* eslint-disable */

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      owner
      header
      content
      tags {
        items {
          id
          createdAt
          updatedAt
          tag {
            id
            name
            owner
            createdAt
            updatedAt
          }
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
  ) {
    listNotes(filter: $filter, limit: $limit) {
      items {
        id
        owner
        header
        content
        tags {
          items {
            id
            createdAt
            updatedAt
            tag {
              id
              name
              owner
              createdAt
              updatedAt
            }
          }
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      owner
      name
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
  ) {
    listTags(filter: $filter, limit: $limit) {
      items {
        id
        owner
        name
        notes {
          items {
            id
            createdAt
            updatedAt
          }
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const getNoteTags = /* GraphQL */ `
  query GetNoteTags($id: ID!) {
    getNoteTags(id: $id) {
      id
      noteID
      tagID
      note {
        id
        owner
        header
        content
        createdAt
        updatedAt
      }
      tag {
        id
        owner
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNoteTags = /* GraphQL */ `
  query ListNoteTags(
    $filter: ModelNoteTagsFilterInput
    $limit: Int
  ) {
    listNoteTags(filter: $filter, limit: $limit) {
      items {
        id
        noteID
        tagID
        note {
          id
          owner
          header
          content
          createdAt
          updatedAt
        }
        tag {
          id
          owner
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
