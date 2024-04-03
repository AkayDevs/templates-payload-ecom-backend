import type { Field } from 'payload/types'

import linkGroup from './linkGroup'
import richText from './richText'
import label from './richText/label'
import largeBody from './richText/largeBody'

export const hero: Field = {
  name: 'hero',
  label: false,
  type: 'group',
  fields: [
    {
      type: 'select',
      name: 'type',
      label: 'Type',
      required: true,
      defaultValue: 'lowImpact',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label : 'Crousel',
          value : 'imageCrousel',
        }
      ],
    },
    richText({
      required : false,
      admin: {
        elements: ['h1', largeBody, label, 'link'],
        leaves: [],
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact', 'lowImpact'].includes(type),
      },
    }),
    linkGroup({
      overrides: {
        maxRows: 2,
        admin : {
          condition: (_, { type } = {}) => ['highImpact', 'mediumImpact', 'lowImpact'].includes(type),
        }
      },
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
    {
      name : 'slides',
      type : 'array',
      label : 'Image Slider',
      minRows : 2,
      maxRows : 6,
      interfaceName: 'HeroCrousel',
      labels: {
        singular: 'slide',
        plural: 'slides',
      },
      fields: [
        // required
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
      admin: {
        condition: (_, { type } = {}) => ['imageCrousel'].includes(type),
        components: {
          RowLabel: ({ data, index = 0 }) => {
            return data?.title || `Slide ${String(index).padStart(2, '0')}`
          },
        },
      },
    },
  ],
}
