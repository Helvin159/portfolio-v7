// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Users } from '@/modules/users/collections/Users'
import { Projects } from '@/modules/projects/collections/Projects'
import { PreviousProjects } from '@/modules/previous-projects/collections/PreviousProjects'
import { Reviews } from '@/modules/reviews/collections/Reviews'
import { Media } from '@/modules/media/collections/Media'
import { Languages } from './modules/languages/collections/Languages'
import { Skills } from './modules/skills/collections/Skills'
import { Frameworks } from './modules/frameworks/collections/Frameworks'

// Globals
import { Pages } from '@/components/globals/pages'
import { MetaDetails } from '@/components/globals/meta-details'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Projects, PreviousProjects, Languages, Skills, Frameworks, Reviews, Media],
  globals: [Pages, MetaDetails],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    idType: 'uuid',
  }),

  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
