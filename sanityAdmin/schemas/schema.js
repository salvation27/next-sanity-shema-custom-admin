import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import mainPage from './mainPage'
import menu from './menu'
import review from './review'
// import CommercejsProducts from './CommercejsProducts'




export default createSchema({

  name: 'default',
  types: schemaTypes.concat([
    mainPage,
    menu,
    review,
    // CommercejsProducts
  ]),
})


