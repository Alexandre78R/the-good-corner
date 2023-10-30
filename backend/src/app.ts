import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  
  // A schema is a collection of type definitions (hence "typeDefs")
  // that together define the "shape" of queries that are executed against
  // your data.
  const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
  
  type Mutation {
    addBook(data : CreateBookInput) : [Book]
  }
  

  input CreateBookInput {
    title : String
    author : String
  }

`;

  // Resolvers define how to fetch the types defined in your schema.
  // This resolver retrieves books from the "books" array above.
  const resolvers = {
      Query: {
      books: () => books,
      },
      Mutation : {
        addBook: (_: any, {data} : any, ctx : any, infos : any) => { // _ --> UMD 
            console.log("data", data);
            console.log("ctx", ctx)
            // console.log("infos", infos)
            // books.push(data);
            books.push({... data});
            return books;
        }
      },
  };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const main = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: async ({ req, res }) => {
            // console.log(req);
            // return {};
            return {toto : "toto"} // ctx function addBook
        }
    });
    console.log(`🚀  Server ready at: ${url}`);
  }

  main();


//     async function main() {
//         const { url } = await startStandaloneServer(server, {
//             listen: { port: 4000 },
            // context: async ({ req, res }) => {
            //     // console.log(req);
            //     // return {};
            //     return {toto : "toto"} // ctx function addBook
            // }
//         });
//         console.log(`🚀  Server ready at: ${url}`);
//     }

//   main();
  