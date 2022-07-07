export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          align-items: center;
          background: black;
          border: 0;
          color: white;
          cursor: pointer;
          display: flex;
          border-radius: 9999px;
          font-size: 16px;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }

        button > :global(svg) {
          margin-right: 10px;
        }

        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}
