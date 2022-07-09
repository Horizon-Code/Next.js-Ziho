import { useState } from "react"
import { useRouter } from "next/router"
import AppLayout from "@c/AppLayout/AppLayout"
import Button from "@c/Button/Button"
import useUser from "@h/useUser"

import { addZiht } from "@f/client"

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

export default function ComposeZiht() {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(
    COMPOSE_STATES.USER_NOT_KNOWN
  )
  const user = useUser()
  const router = useRouter()

  console.log(router)

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSubmit = (event) => {
    setStatus(COMPOSE_STATES.LOADING)
    event.preventDefault()
    addZiht({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      username: user.username,
    })
      .then(() => {
        router.push("/home")
      })
      .catch((err) => {
        console.error(err)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  const isButtonDisabled =
    !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            value={message}
            placeholder="Que has aprendido?"
          ></textarea>
          <div>
            <Button disabled={isButtonDisabled}>
              Post
            </Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>
        {`
          div {
            padding: 15px;
          }

          textarea {
            border: none;
            border-bottom: 1px solid #eee;
            font-size: 16px;
            min-height: 100px;
            padding: 15px;
            resize: none;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}
