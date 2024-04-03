import type { GlobalConfig } from 'payload/types'
import { adminsOrPublished } from '../collections/Pages/access/adminsOrPublished'
import { admins } from '../access/admins'
import { hero } from '../fields/hero'

export const Home: GlobalConfig = {
  slug: 'home',
  admin : {
    group : 'Website Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type : 'tabs',
      tabs : [
        {
          label : 'Hero',
          fields : [hero]
        }
      ]
    },
  ],
}
