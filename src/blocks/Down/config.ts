import { Block } from "payload";


export const Down: Block = {
    slug: "down",
    interfaceName: 'down',
    fields: [
        {
            name: "contact",
            label: "Contact Section",
            type: "group",
            fields: [
                { name: "companyName", type: "text" },
             
            ],
        },

        {
            name: "officeHours",
            label: "Office Hours",
            type: "array",
            labels: { singular: "Day", plural: "Days" },
            fields: [
                { name: "day", type: "text" },
                { name: "time", type: "text" },
            ],
        },

        {
            name: "navigation",
            label: "Navigation Links",
            type: "array",
            fields: [
                { name: "label", type: "text" },
                { name: "url", type: "text" },
            ],
        },

        {
            name: "legalLinks",
            label: "Legal Links",
            type: "array",
            fields: [
                { name: "label", type: "text" },
                { name: "url", type: "text" },
            ],
        },
    ],
};
