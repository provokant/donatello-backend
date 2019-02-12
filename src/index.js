const { GraphQLServer } = require('graphql-yoga')

let work = [{
  title: 'Work',
  items: [
    {
      id: 'item-01',
      title: 'Gähnschreier',
      information: [
        '2017', 
        'Paris'
      ],
      pictures: [
        {
          url: 'https://images.unsplash.com/photo-1549758041-bba61bf2978b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          alt: 'Alternative content, if image cannot be loaded'
        },
        {
          url: 'https://images.unsplash.com/photo-1453872898249-3e8bf97c227f?ixlib=rb-1.2.1&auto=format&fit=crop&w=923&q=80',
          alt: 'Alternative content, if image cannot be loaded'
        }
      ]
    },
    {
      id: 'item-01',
      title: 'Gähnschreier II',
      information: [
        '2018', 
        'Berlin'
      ],
      pictures: [
        {
          url: 'https://images.unsplash.com/photo-1549758041-bba61bf2978b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          alt: 'Alternative content, if image cannot be loaded'
        },
        {
          url: 'https://images.unsplash.com/photo-1453872898249-3e8bf97c227f?ixlib=rb-1.2.1&auto=format&fit=crop&w=923&q=80',
          alt: 'Alternative content, if image cannot be loaded'
        }
      ]
    }
  ]
}]

const resolvers = {
  Query: {
    info: () => `This is the API for Donatello https://github.com/provokant/donatello-backend`,
    work: () => work,
  },

  Work: {
    title: (parent) => parent.title,
    items: (parent) => parent.items
  },

  WorkItem: {
    id: (parent) => parent.id,
    title: (parent) => parent.title,
    subTitle: (parent) => parent.subTitle,
    information: (parent) => parent.information,
    pictures: (parent) => parent.pictures
  },

  WorkPicture: {
    url: (parent) => parent.url,
    alt: (parent) => parent.alt
  },
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))