import Link from "next/link"
import Avatar from "components/Avatar"
import useTimeAgo from "@h/useTimeAgo"
import { useRouter } from "next/router"

export default function Zhit({
  id,
  avatar,
  content,
  createdAt,
  userId,
  username,
  img,
}) {
  // hook to handle the timeago from createdAt property
  const timeago = useTimeAgo(createdAt)
  const router = useRouter()

  const handleArticleOnClick = (e) => {
    e.preventDefault()
    router.push("status/[id]", `status/${id}`)
  }

  return (
    <>
      <article key={id} onClick={handleArticleOnClick}>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{username}</strong>
            <span> . </span>
            <Link href={`status/[id]`} as={`status/${id}`}>
              <a>
                <time>{timeago}</time>
              </a>
            </Link>
          </header>
          <p>{content}</p>
          {img && <img src={img} alt={content} />}
        </section>
      </article>
      <style jsx>
        {`
          a {
            color: #555;
            font-size: 14px;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }

          article {
            border-bottom: 2px solid #eaf7ff;
            display: flex;
            padding: 10px 10px;
          }
          article:hover {
            background-color: #f5f8fa;
            cursor: pointer;
          }
          img {
            border-radius: 10px;
            height: auto;
            margin-top: 10px;
          }

          div {
            padding-right: 10px;
          }

          p {
            line-height: 1.3125;
            margin: 0;
          }
        `}
      </style>
    </>
  )
}
