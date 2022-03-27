/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          noteID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
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
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        header
        content
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      owner
      name
      notes {
        items {
          id
          noteID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        name
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      tag {
        id
        owner
        name
        notes {
          nextToken
        }
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
    $nextToken: String
  ) {
    listNoteTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
