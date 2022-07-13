import { firestore } from "@f/admin"

export default (req, res) => {
  const { query } = req
  const { id } = query

  // em esta part de la funcion, se ejecuta la llamada
  // a la base de datos de firebase.
  // la llamada se hace a la coleccion zihts.
  // el id del ziht coincide con el id de la ruta.
  firestore
    .collection("zihts")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data
      res.json({
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
