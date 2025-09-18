import { type SchemaTypeDefinition } from 'sanity'

import { ourTeam } from './OurTeamType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ourTeam],
}
