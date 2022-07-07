import AppLayout from "components/AppLayout/AppLayout"
import Ziht from "components/Ziht"

import { useEffect, useState } from "react"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then((data) => setTimeline(data))
  }, [])
  console.log(timeline)
  return (
    <>
      <AppLayout>
        <header>
          <h3>Inicio</h3>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => {
            return <Ziht key={id} username={username} avatar={avatar} message={message} />
          })}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>
        {`
          header {
            align-items: center;
            border-bottom: 1px solid #ccc;
            display: flex;
            height: 49px;
            position: sticky;
            top: 0;
            width: 100%;
          }

          h3 {
            font-weight: 800;
          }

          section {
            padding-top: 50px;
          }

          nav {
            bottom: 0;
            border-top: 1px solid #ccc;
            position: sticky;
          }
        `}
      </style>
    </>
  )
}
