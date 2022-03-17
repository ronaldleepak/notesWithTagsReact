/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String) {
    onCreateNote(owner: $owner) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String) {
    onUpdateNote(owner: $owner) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String) {
    onDeleteNote(owner: $owner) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($owner: String) {
    onCreateTag(owner: $owner) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($owner: String) {
    onUpdateTag(owner: $owner) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($owner: String) {
    onDeleteTag(owner: $owner) {
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
export const onCreateNoteTags = /* GraphQL */ `
  subscription OnCreateNoteTags($owner: String) {
    onCreateNoteTags(owner: $owner) {
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
export const onUpdateNoteTags = /* GraphQL */ `
  subscription OnUpdateNoteTags($owner: String) {
    onUpdateNoteTags(owner: $owner) {
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
export const onDeleteNoteTags = /* GraphQL */ `
  subscription OnDeleteNoteTags($owner: String) {
    onDeleteNoteTags(owner: $owner) {
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
