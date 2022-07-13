import Zhit from "@c/Ziht"
import { firestore } from "@f/admin"

export default function ZihtPage(props) {
  console.log(props)
  return (
    <>
      <Zhit {...props} />
      <style jsx>{``}</style>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1uc4oG35vBR53ccJiWaI" } }],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const { id } = params

  return firestore
    .collection("zihts")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      }
      console.log(props)
      return { props }
    })
    .catch(() => {
      return { props: {} }
    })
}

// Se ejecuta en el servidor y en el cliente
// cuando se carga la pagina.
// como podemos ver extraemos la query y de esta el id
// esto es importante porque este mismo archivo se llama de esta manera
// para que coincida con la ruta.
// si quisieramos extraer otro tipo de query, el archivo en vez de llamarse
// [id] se llamaria [otroTipoDeQuery] y la ruta seria /api/zihts/[otroTipoDeQuery]
// ZihtPage.getInitialProps = (context) => {
//   const { query } = context
//   const { id } = query

//   return fetch(`http://localhost/api/zihts/${id}`).then(
//     (res) => console.log(res.json())
//   )
// }
