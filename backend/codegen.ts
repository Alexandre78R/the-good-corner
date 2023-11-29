import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  // schema: './src/typedefs/*.graphql',
  schema: 'http://localhost:4000',
  generates: {
    './src/types/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;