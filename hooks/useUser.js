import Router, { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { checkAuthUser } from "../firebase/client"

export const USER_STATE = {
  NOT_AUTHENTICATED: "null",
  UNKOWN: "undefined",
}

export default function useUser() {
  const [user, setUser] = useState(USER_STATE.UNKNOWN)
  const router = useRouter()
  useEffect(() => {
    console.log(
      "I AM THE FIRST USEUSER USE EFFECT BEFORE CHEACKAUTH METHOD"
    )
    checkAuthUser(setUser)
    console.log(
      "I AM THE FIRST USEUSER  USE EFFECT AFTER CHEACKAUTH METHOD"
    )
  }, [])
  useEffect(() => {
    if (
      Router.route === "/home" &&
      user === USER_STATE.UNKOWN
    ) {
      router.push("/") // If the user is in home pase and not authenticated, redirect to the indice page
    }
  }, [user])
  return user
}
