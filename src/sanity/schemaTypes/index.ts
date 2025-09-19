import { type SchemaTypeDefinition } from 'sanity'

import { ourTeam } from './OurTeamType'
import { pastActivity } from './PastActivityType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ourTeam, pastActivity],
}
