import Avatar from "components/Avatar"
import useTimeAgo from "@h/useTimeAgo"

export default function Zhit({
  id,
  avatar,
  content,
  createdAt,
  userId,
  username,
}) {
  // hook to handle the timeago from createdAt property
  const timeago = useTimeAgo(createdAt)

  return (
    <>
      <article key={id}>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{username}</strong>
            <span> . </span>
            <time>{timeago}</time>
          </header>

          <p>{content}</p>
        </section>
      </article>
      <style jsx>
        {`
          article {
            border-bottom: 2px solid #eaf7ff;
            display: flex;
            padding: 10px 10px;
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
