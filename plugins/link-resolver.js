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

  if (doc.type === 'about_us') {
    return '/about-us'
  }


  if (doc.type === 'contact_us') {
    return '/contact-us'
  }

  if (doc.type === 'forestry') {
    return '/forestry'
  }

  if (doc.type === 'gallery') {
    return '/gallery'
  }

  if (doc.type === 'geothermal') {
    return '/geothermal'
  }



  if (doc.type === 'himiona_dairy_farm') {
    return '/himiona-dary-farm'
  }

  if (doc.type === 'links') {
    return '/links'
  }

  if (doc.type === 'management') {
    return '/management'
  }

  if (doc.type === 'our_history') {
    return '/our-history'
  }

  if (doc.type === 'putauaki_dairy_farm') {
    return '/putauaki-dairy-farm'
  }

  if (doc.type === 'reports') {
    return '/reports'
  }

  if (doc.type === 'shareholder_information') {
    return '/shareholder-information'
  }

  if (doc.type === 'shareholder_register') {
    return '/shareholder-register'
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

  if (doc.type === 'kiwifruit') {
    return '/kiwifruit'
  }

  if (doc.type === 'industrial_zone') {
    return '/industrial-zone'
  }

  if (doc.type === 'register') {
    return '/register'
  }

  if (doc.type === 'newsletters') {
    return '/newsletters'
  }

  if (doc.type === 'panui_home') {
    return '/panui'
  }

  if (doc.type === 'panui') {
    return '/panui/' + doc.uid
  }

  if (doc.type === 'grants') {
    return '/grants'
  }

  if (doc.type === 'grant') {
    return '/grants/' + doc.uid
  }


  return '/not-found'
}