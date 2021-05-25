import {
  getFavoritePosts,
  getPosts,
  getUsers,
  fetchFavoritePosts,
} from "../data/provider.js";

export const giffyFeed = () => {
    const posts = getPosts()
    const users = getUsers()
    const postsReversed = posts.reverse()

    return `
    ${postsReversed.map(post => 
        {
          let creator = users.find((user) => user.id === post.userId);
          return `<section name="post" class="post" value='${
            post.id
          }'><h2 class="post__title">${post.title}</h2> 
        <img class="post__image" src='${post.URL}'</img> 
        <div class='post__description'>${post.description}</div>
        <div class="post__tagline">Posted by ${creator.name} on ${
            post.timestamp
          }</div>
        <div class="post__actions">
        <div>
            <img id="${post.id}" class="actionIcon" name="favorite" src="${
            post.favorited ? "/images/yellow.svg" : "/images/blank.svg"
          }">
                </div>
                
        <div>
        <img id="${
          post.id
        }" class="actionIcon" name="block" src="/images/block.svg">
            </div>

        </div>
        </section>`;
        }
      })
      .join("")}
        `;
};

// document.addEventListener("click", (clickEvent) => {
//     const currentFavorites = fetchFavoritePosts()
//     if(clickEvent.target.id.startsWith === "yellowFavorite"{

//     }

//     }
// })
