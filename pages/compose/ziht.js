import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

import Button from "@c/Button/Button"
import useUser from "@h/useUser"

import { addZiht, uploadImage } from "@f/client"
import Avatar from "components/Avatar"

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}
const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
}

export default function ComposeZiht() {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(
    COMPOSE_STATES.USER_NOT_KNOWN
  )
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [imageURL, setImageURL] = useState(null)

  useEffect(() => {
    console.log(task)
    if (task) {
      const onProgress = (snapshot) => {
        const progress =
          (snapshot.bytesTransferred /
            snapshot.totalBytes) *
          100
        console.log(`Progress: ${progress}%`)
      }
      const onError = (snapshot) => {
        console.log(snapshot)
      }
      const onComplete = () => {
        console.log("on complete")
        task.snapshot.ref.getDownloadURL().then(setImageURL)
      }
      task.on(
        "state_changed",
        onProgress,
        onError,
        onComplete
      )
    }
  }, [task])

  const user = useUser()
  const router = useRouter()

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
      img: imageURL,
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

  const handleDragEnter = (event) => {
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }
  const handleDragLeave = (event) => {
    setDrag(DRAG_IMAGE_STATES.NONE)
  }
  const handleDrop = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
    // con un simple console.log(e.dataTransfer.files)
    // veremos que el array de archivos está vacío para
    // poder verlo, tendremos que cogerlo inmediatamente
    // con su valor: e.dataTransfer.files[0]
    console.log(e.dataTransfer.files[0])
    const file = e.dataTransfer.files[0]
    const task = uploadImage(file)
    setTask(task)
  }

  return (
    <>
      <Head>
        <title>✉️!🤗</title>
      </Head>
      <section className="form-container">
        {user && (
          <section className="avatar-container">
            <Avatar src={user.avatar} />
          </section>
        )}
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            value={message}
            placeholder="Que has aprendido?"
          ></textarea>
          {imageURL && (
            <section>
              <button onClick={() => setImageURL(null)}>
                x
              </button>
              <img src={imageURL} />
            </section>
          )}
          <div>
            <Button disabled={isButtonDisabled}>
              Post
            </Button>
          </div>
        </form>
      </section>
      <style jsx>
        {`
          .avatar-container {
            padding-top: 20px;
            padding-left: 10px;
          }

          button {
            background: rgba(0, 0, 0, 0.2);
            border: 0;
            border-radius: 50%;
            color: #fff;
            cursor: pointer;
            display: block;
            font-size: 20px;
            top: -10px;
            left: 38%;
            width: 10%;
            height: 10%;
            position: relative;
          }
          div {
            padding: 15px;
            border-top: 1px solid #eee;
          }
          form {
            padding: 15px;
          }

          .form-container {
            align-items: flex-start;
            display: flex;
          }

          img {
            border-radius: 10px;
            height: 30%;
            width: 50%;
          }

          section {
            position: relative;
          }

          textarea {
            border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
              ? "3px dashed #09f"
              : drag === DRAG_IMAGE_STATES.NONE
              ? "3px solid transparent"
              : "1px solid #eee"};
            border-radius: 10px;
            font-size: 16px;
            min-height: 200px;
            outline: 0;
            padding: 15px;
            resize: none;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}
