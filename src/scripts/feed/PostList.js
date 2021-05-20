import { getPosts } from "../data/provider.js"

export const giffyFeed = () => {
    const posts = getPosts()

    console.log(posts)

    return `
    <h1>Giffy Feed</h1>
    ${posts.map(post => 
        `${post.title} ${post.URL} ${post.description}`
    )}
    `
}