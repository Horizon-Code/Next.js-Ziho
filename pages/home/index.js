import { fetchLastZihts } from "@f/client"
import AppLayout from "components/AppLayout/AppLayout"
import Ziht from "components/Ziht"
import useUser from "hooks/useUser"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()
  useEffect(() => {
    user && fetchLastZihts().then(setTimeline)
  }, [user])
  timeline && console.log(timeline)
  return (
    <>
      <AppLayout>
        <header>
          <h3>Inicio</h3>
        </header>
        <section>
          {timeline.map(
            ({
              id,
              avatar,
              content,
              createdAt,
              userId,
              username,
            }) => {
              return (
                <Ziht
                  key={id}
                  userId={userId}
                  username={username}
                  avatar={avatar}
                  createdAt={createdAt}
                  content={content}
                />
              )
            }
          )}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>
        {`
          header {
            align-items: center;
            background: #ffffff00;
            border-bottom: 1px solid #eee;
            backdrop-filter: blur(05px);
            display: flex;
            height: 49px;
            position: sticky;
            top: 0;
            width: 100%;
          }

          h3 {
            font-weight: 800;
            padding-left: 10px;
          }

          section {
            padding-top: 5px;
          }

          nav {
            background: #fff;
            bottom: 0;
            border-top: 1px solid #eee;
            height: 49px;
            position: sticky;
          }
        `}
      </style>
    </>
  )
}
