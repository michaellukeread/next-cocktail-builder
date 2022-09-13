const MAX = 5

const Tags = ({ strTags }) => {
  if (!strTags) return

  const tags = strTags.split(",").slice(0, MAX)

  return (
    <ol className="inline-flex gap-4">
      {tags.map((tag, i) => (
        <li
          key={i}
          className="text-lg xl:text-2xl font-abrilFatface text-white"
        >
          {tag}
        </li>
      ))}
    </ol>
  )
}

export default Tags
