import { getPosts, getUsers } from "../data/provider.js"

export const giffyFeed = () => {
    const posts = getPosts()
    const users = getUsers()
    console.log(posts)
    const postsReversed = posts.reverse()

    return `
    <h1>Giffy Feed</h1>
    ${postsReversed.map(post => 
        {
        let creator = users.find(user => user.id === post.userId)
        return `<section class='post'><h2 class="post__title">${post.title}</h2> 
        <img class="post__image" src='${post.URL}' 
        <div class='post__description'>${post.description}</div>
        <div class="post__tagline">Posted by ${creator.name}</div>
        <div class="post__tagline">Posted by insert user Id logic here on ${post.timestamp}</div>
        <div class="post__actions"></div>
        </section>`
        })}
    `
}
