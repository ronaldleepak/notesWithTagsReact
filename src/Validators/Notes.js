import { Validator } from "jsonschema";

const notesWithTagsSchema = {
    id: "/NotesWithTags",
    type: "object",
    properties: {
        notes: {
            type: "array",
            items: {$ref: "/Note"}
        }
    }
};

const noteSchema = {
    id: "/Note",
    type: "object",
    properties: {
        content: {type: "string"},
        header: {type: "string"},
        tags: {
            type: "array",
            items: {$ref: "/Tag"}
        }
    },
    required: ["content", "header", "tags"],
}

const tagSchema = {
    id: "/Tag",
    type: "object",
    properties: {
        name: {type: "string"}
    },
    required: ["name"],
}

export const validateNoteContents = async (contents) => {
    const validator = new Validator();
    validator.addSchema(noteSchema, '/Note');
    validator.addSchema(tagSchema, '/Tag');   

    const result = validator.validate(contents, notesWithTagsSchema);

    if (result.errors.length > 0) {
        throw(new Error("Notes contents validation fails"))
    }
}
