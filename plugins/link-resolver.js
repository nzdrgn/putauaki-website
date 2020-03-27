/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function (doc) {


  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'about-us') {
    return '/about-us'
  }


  if (doc.type === 'contact-us') {
    return '/contact-us'
  }

  if (doc.type === 'forestry') {
    return '/forestry'
  }

  if (doc.type === 'gallery') {
    return '/gallery'
  }

  if (doc.type === 'geothermal') {
    return '/'
  }

  if (doc.type === 'grants') {
    return '/geothermal'
  }

  if (doc.type === 'himiona-dairy-farm') {
    return '/himiona-dairy-farm'
  }

  if (doc.type === 'links') {
    return '/links'
  }

  if (doc.type === 'management') {
    return '/management'
  }

  if (doc.type === 'our-history') {
    return '/our-history'
  }

  if (doc.type === 'putauaki-dairy-farm') {
    return '/putauaki-dairy-farm'
  }

  if (doc.type === 'reports') {
    return '/reports'
  }

  if (doc.type === 'shareholder-information') {
    return '/shareholder-information'
  }

  if (doc.type === 'shareholder-registry') {
    return '/shareholder-registry'
  }

  if (doc.type === 'sharemarket') {
    return '/sharemarket'
  }

  if (doc.type === 'structure') {
    return '/structure'
  }

  if (doc.type === 'trustees') {
    return '/trustees'
  }

  if (doc.type === 'panui') {
    return '/panui/' + doc.uid
  }

  return '/not-found'
}