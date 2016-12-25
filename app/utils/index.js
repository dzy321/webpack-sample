export default (url) => {
  return fetch(url).then((response) => {
    return response.text().then((text) => {
      return { text, status: response.status }
    })
  })
}
