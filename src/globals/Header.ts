import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  label : 'Header',
  admin : {
      description : 'This contains all the configuration for your site header',
      group : 'Website Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
