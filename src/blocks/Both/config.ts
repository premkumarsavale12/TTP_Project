import { Block } from "payload";

export const Both: Block = {
    slug: 'both',
    interfaceName:'both',
    labels: {
        singular: 'both',
        plural: 'boths'
    },
    fields: [
        {
            name: "text",
            type: 'textarea',
            label: 'paragraph',
            required: true
        },
        {
            name: 'media',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },


    ]

}