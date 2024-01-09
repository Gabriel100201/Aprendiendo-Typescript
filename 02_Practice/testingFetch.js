/* const getDatos = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Soy pato")
    }, 1000)
  })
} */

// Cada then obtiene como parametro lo que retorna el then anterior
/* getDatos()
  .then((res) => {
    console.log(res)
    return "Ya no soy pato"
  })
  .then((res) => {
    console.log(res)
  })
 */
/* const getInfo = async () => {
  const datos = await getDatos();
  console.log(datos)
  const datos2 = "Ya no soy un pato"
  console.log(datos2)
}
getInfo()
 */
/* fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood')
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err)) */

const apiCall = async () => {
  const resAPI = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood')
  console.log(resAPI)
}

apiCall()