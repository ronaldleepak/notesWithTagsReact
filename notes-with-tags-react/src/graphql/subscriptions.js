/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTags = /* GraphQL */ `
  subscription OnCreateTags {
    onCreateTags {
      id
      name
      notesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags {
    onUpdateTags {
      id
      name
      notesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags {
    onDeleteTags {
      id
      name
      notesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateNotes = /* GraphQL */ `
  subscription OnCreateNotes {
    onCreateNotes {
      id
      header
      content
      Tags {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNotes = /* GraphQL */ `
  subscription OnUpdateNotes {
    onUpdateNotes {
      id
      header
      content
      Tags {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNotes = /* GraphQL */ `
  subscription OnDeleteNotes {
    onDeleteNotes {
      id
      header
      content
      Tags {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
