import { useEffect, useState } from "react"
import Link from "next/link"

import Ziht from "components/Ziht"
import Create from "components/icons/Create"

import { fetchLastZihts } from "@f/client"

import useUser from "hooks/useUser"
import Home from "@c/Icons/Home"
import Search from "@c/Icons/Search"
import Head from "next/head"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()
  useEffect(() => {
    user && fetchLastZihts().then(setTimeline)
  }, [user])
  timeline && console.log(timeline)
  // Head es de nextjs nos permite poner cualquier metatag en el head de la pagina
  return (
    <>
      <Head>
        <title>🏠Home</title>
      </Head>
      <header>
        <h3>Kon&apos;nichiwa</h3>
      </header>
      <section>
        {timeline.map(
          ({
            id,
            avatar,
            content,
            createdAt,
            img,
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
                img={img}
              />
            )
          }
        )}
      </section>
      <nav>
        <Link href="/home">
          <a>
            <Home width={32} height={32} stroke="#09f" />
          </a>
        </Link>
        <Link href="/search">
          <a>
            <Search width={32} height={32} stroke="#09f" />
          </a>
        </Link>
        <Link href="/compose/ziht">
          <a>
            <Create width={32} height={32} stroke="#09f" />
          </a>
        </Link>
      </nav>
      <style jsx>
        {`
          header {
            align-items: center;
            background: #ffffff00;
            border-bottom: 1px solid #eee;
            backdrop-filter: blur(05px);
            display: flex;
            height: 49px;
            justify-content: center;
            position: sticky;
            top: 0;
            width: 100%;
          }

          h3 {
            font-family: "Yuji Boku", serif;
            font-weight: 800;
            padding-left: 10px;
          }

          section {
            flex: 1;
          }

          nav {
            display: flex;
            background: #fff;
            bottom: 0;
            border-top: 1px solid #eee;
            height: 49px;
            position: sticky;
          }

          nav a {
            align-items: center;
            display: flex;
            flex: 1 1 auto;
            height: 100%;
            justify-content: center;
          }
           {
            /* #0099ff22 */
          }
          nav a:hover {
            background: radial-gradient(
              #e6e19366 25%,
              transparent 16%
            );
            background-position: center;
            background-size: 100px 200%;
          }
        `}
      </style>
    </>
  )
}
