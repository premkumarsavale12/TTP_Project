import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";


export const Contact: Block = {

    slug: 'contact',
    interfaceName: 'contact',
    labels: {
        singular: 'contact',
        plural: 'contacts'
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
            name: 'media',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },

    ]

}