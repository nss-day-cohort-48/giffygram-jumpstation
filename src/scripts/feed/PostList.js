import { getPosts } from "../data/provider.js"

export const giffyFeed = () => {
    const posts = getPosts()
    return `<h1>Giffy Feed</h1>
    

    `
}