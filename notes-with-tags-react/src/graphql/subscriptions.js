/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      userID
      header
      content
      tags {
        items {
          id
          userID
          name
          createdAt
          updatedAt
          noteTagsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      userID
      header
      content
      tags {
        items {
          id
          userID
          name
          createdAt
          updatedAt
          noteTagsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      userID
      header
      content
      tags {
        items {
          id
          userID
          name
          createdAt
          updatedAt
          noteTagsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      userID
      name
      createdAt
      updatedAt
      noteTagsId
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      userID
      name
      createdAt
      updatedAt
      noteTagsId
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      userID
      name
      createdAt
      updatedAt
      noteTagsId
    }
  }
`;
