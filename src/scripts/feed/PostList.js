import { getPosts } from "../data/provider.js"

export const giffyFeed = () => {
    const posts = getPosts()

    console.log(posts)

    return `
    <h1>Giffy Feed</h1>
    ${posts.map(post => 
        `<section class='post'><h2 class="post__title">${post.title}</h2> 
        <img class="post__image" src='${post.URL}' 
        <div class='post__description'>${post.description}</div>
        <div class="post__tagline">Posted by insert user Id logic here</div>
        <div class="post__actions"></div>
        </section>`
    )}
    `
}