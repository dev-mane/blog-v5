import fs from "fs"
import Link from "next/link"

const getPostsMetadata = () => {
  const folder = "posts/"
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith(".md"))
  const slugs = markdownPosts.map((file) => file.replace(".md", ""))
  return slugs
}

const Homepage = () => {
  const postMetadata = getPostsMetadata()
  const postPreviews = postMetadata.map((slug)=> (
    <div>
      <Link href={`/posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ))
  return <div>{postPreviews}</div>
}

export default Homepage