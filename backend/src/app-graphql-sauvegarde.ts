import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './typedefs';
import resolvers from "./resolvers";
import db from "./config/database";

//   const resolvers = {
//       Query: {
//       books: () => books,
//       },
//       Mutation : {
//         addBook: (_: any, {data} : any, ctx : any, infos : any) => { // _ --> UMD 
//             console.log("data", data);
//             console.log("ctx", ctx)
//             // console.log("infos", infos)
//             // books.push(data);
//             books.push({... data});
//             return books;
//         }
//       },
//   };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

const server = new ApolloServer<{}>({
    typeDefs,
    resolvers,
});
  
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
//   const main = async () => {
//     const { url } = await startStandaloneServer(server, {
//         listen: { port: 4000 },
//         context: async ({ req, res }) => {
//             return {};
//           },
//         // context: async ({ req, res }) => {
//         //     // console.log(req);
//         //     // return {};
//         //     return {toto : "toto"} // ctx function addBook
//         // }
//     });
//     console.log(`🚀  Server ready at: ${url}`);
//   }

//   main();

async function main() {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
      context: async ({ req, res }) => {
        return {};
      },
    });
  
    await db.initialize();

    console.log(`🚀  Server ready at: ${url}`);
  }
  main();
