/* eslint-disable */

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      owner
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      owner
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
    }
  }
`;
export const createNoteTags = /* GraphQL */ `
  mutation CreateNoteTags(
    $input: CreateNoteTagsInput!
    $condition: ModelNoteTagsConditionInput
  ) {
    createNoteTags(input: $input, condition: $condition) {
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
export const updateNoteTags = /* GraphQL */ `
  mutation UpdateNoteTags(
    $input: UpdateNoteTagsInput!
    $condition: ModelNoteTagsConditionInput
  ) {
    updateNoteTags(input: $input, condition: $condition) {
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
export const deleteNoteTags = /* GraphQL */ `
  mutation DeleteNoteTags(
    $input: DeleteNoteTagsInput!
    $condition: ModelNoteTagsConditionInput
  ) {
    deleteNoteTags(input: $input, condition: $condition) {
      id
    }
  }
`;
