export async function getAllWorkIds() {
  const { works } = await require('../data/works.json')
  return works.map(({ pageTitle }) => ({ params: { id: pageTitle } }))
}

export async function getWorkData(id) {
  const { works } = await require('../data/works.json')
  const work = works.filter(({ pageTitle }) => {
    return pageTitle === id ? true : false
  })

  return work
}
