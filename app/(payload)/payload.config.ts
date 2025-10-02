import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Media, Users],
  db: postgresAdapter({
    migrationDir: path.resolve(dirname, "migrations"),
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  editor: lexicalEditor(),
  graphQL: {
    disable: true,
  },
  plugins: [],
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  telemetry: false,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
