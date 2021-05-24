import { getPosts, getUsers } from "../data/provider.js"

export const giffyFeed = () => {
    const posts = getPosts()
    const users = getUsers()
    const postsReversed = posts.reverse()

    return `
    <h1>Giffy Feed</h1>
    ${postsReversed.map(post => 
        {
        let creator = users.find(user => user.id === post.userId)
        return `<section name= "post" class='post' value='${post.id}'><h2 class="post__title">${post.title}</h2> 
        <img class="post__image" src='${post.URL}'</img> 
        <div class='post__description'>${post.description}</div>
        <div class="post__tagline">Posted by ${creator.name} on ${post.timestamp}</div>
        <div class="post__actions">
        <div>
            <img id="${post.id}" class="actionIcon" src="/images/favorite-star-yellow.svg">
                </div>
        <div>
        <img id="${post.id}" class="actionIcon" src="/images/block.svg">
            </div>

        </div>
        <button class="deletePost" id="deletePost" value='${post.id}'>Delete</button>
        </section>`
        }).join('')}
    `
}
