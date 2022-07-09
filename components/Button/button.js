export default function Button({
  children,
  disabled,
  onClick,
}) {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        button {
          align-items: center;
          background: black;
          border: 0;
          color: white;
          cursor: pointer;
          display: flex;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
          user-select: none;
        }

        button[disabled] {
          opacity: 0.5;
          pointer-events: none;
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
