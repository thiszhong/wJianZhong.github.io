export default async function (path) {
  let component = null;
  try {
    component = await import(`../data/${path}`)
    return component.default
  } catch (err) {
    console.error('Where is my Component: ', err.message)
    return component
  }
}