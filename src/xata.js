// Generated by Xata Codegen 0.30.0. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  {
    name: "dalle_prompts",
    checkConstraints: {
      dalle_prompts_xata_id_length_xata_id: {
        name: "dalle_prompts_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
    },
    foreignKeys: {},
    primaryKey: [],
    uniqueConstraints: {
      _pgroll_new_dalle_prompts_xata_id_key: {
        name: "_pgroll_new_dalle_prompts_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "surpriseMePrompts",
        type: "string",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: '{"xata.type":"string"}',
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
  {
    name: "posts",
    checkConstraints: {
      posts_xata_id_length_xata_id: {
        name: "posts_xata_id_length_xata_id",
        columns: ["xata_id"],
        definition: "CHECK ((length(xata_id) < 256))",
      },
      posts_xata_string_length_name: {
        name: "posts_xata_string_length_name",
        columns: ["name"],
        definition: "CHECK ((length(name) <= 2048))",
      },
      posts_xata_string_length_photo: {
        name: "posts_xata_string_length_photo",
        columns: ["photo"],
        definition: "CHECK ((length(photo) <= 2048))",
      },
      posts_xata_string_length_prompt: {
        name: "posts_xata_string_length_prompt",
        columns: ["prompt"],
        definition: "CHECK ((length(prompt) <= 2048))",
      },
    },
    foreignKeys: {},
    primaryKey: [],
    uniqueConstraints: {
      _pgroll_new_posts_xata_id_key: {
        name: "_pgroll_new_posts_xata_id_key",
        columns: ["xata_id"],
      },
    },
    columns: [
      {
        name: "name",
        type: "string",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: '{"xata.type":"string"}',
      },
      {
        name: "photo",
        type: "string",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: '{"xata.type":"string"}',
      },
      {
        name: "prompt",
        type: "string",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: '{"xata.type":"string"}',
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
        comment: "",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
        comment: "",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
        comment: "",
      },
    ],
  },
];
/** @type { import('@xata.io/client').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL:
    "https://Teri-Eyenike-s-workspace-14frfm.eu-west-1.xata.sh/db/dall-e",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};
