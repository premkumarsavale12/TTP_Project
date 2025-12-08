import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";


export const Conten: Block = {
    slug: 'conten',
    interfaceName: 'conten',
    labels: {

        singular: 'conten block ',
        plural: 'contens blocks'
    },
    fields: [
        {
            name: 'paragrapgh',
            type: 'text',
            label: ' Top Paragraph '

        },

        {
            name: 'heading',
            type: 'text',
            label: 'heading',
            required: true
        },


        {
            name: 'richText',
            type: 'richText',
            editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                    return [
                        ...rootFeatures,
                        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                        FixedToolbarFeature(),
                        InlineToolbarFeature(),
                    ]
                },
            }),
            label: false,
        },

        {
            name: 'para',
            type: 'array',
            label: 'Right Column Bullet Points',
            fields: [
                {
                    name: 'point',
                    type: 'text',
                    label: 'Bullet Point Text'
                }
            ]
        }

    ]
}