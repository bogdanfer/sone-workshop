const sanityClient = require('@sanity/client')

export default sanityClient({
  projectId: 'ze77v3qv',
  dataset: 'production',
  apiVersion: '2022-11-25', // use current UTC date - see "specifying API version"!
  token: '', // or leave blank for unauthenticated usage
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
})
