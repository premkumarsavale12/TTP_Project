import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const Main: Block = {
  slug: "main",
  labels: {
    singular: "Main Data",
    plural: "Main Datas",
  },

  fields: [
    {
      name: "richText",
      type: "richText",
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },

    {
      name: "paragraph",
      type: "text",
      label: "Top Paragraph",
    },

    {
      name: "logos",
      type: "array",
      label: "Logos",
      minRows: 1,
      fields: [
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          required: true,
        },

        {
          name: "richText",
          type: "richText",
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },

        {
          name: "para",
          type: "text",
          label: "Para",
        },
      ],
    },

    {
      name: "media",
      type: "upload",
      relationTo: "media",
    },
  ],
};
