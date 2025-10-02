import 'server-only'
import { z } from 'zod'

const Schema = z.object({
  DATABASE_URI: z.string(),
  PAYLOAD_SECRET: z.string(),
})

export const EnvServer = Schema.parse(process.env)
