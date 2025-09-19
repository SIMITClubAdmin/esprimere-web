import { defineType, defineField } from 'sanity'

export const pastActivity = defineType({
  name: 'pastActivity',
  title: 'Past Activity',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sequence',
      title: 'Sequence',
      type: 'number',
      description: 'Lower numbers appear first. Use this to manually order activities.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'sequence',
    },
  },
})
