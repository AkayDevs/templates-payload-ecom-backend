import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    invertBackground,
    {
      name : 'title',
      type : 'text',
      required : true,
    },
    {
      name : 'media',
      type : 'upload',
      relationTo : 'media'
    },
    richText(),
    linkGroup({
      appearances: ['primary', 'secondary', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
