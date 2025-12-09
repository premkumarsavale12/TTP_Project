import type { RequiredDataFromCollectionSlug } from 'payload'


export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',

  hero: {
    type: 'lowImpact', 

  
    links: [
      {
        link: {
          type: 'custom',
          label: 'Visit the admin dashboard',
          url: '/admin',
          newTab: false,
        },
      },
    ],
  },

  meta: {
    description: 'An open-source website built with Payload and Next.js.',
    title: 'Payload Website Template',
  },

  title: 'Home',

  layout: [],
}
