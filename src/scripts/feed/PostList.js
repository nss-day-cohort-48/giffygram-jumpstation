//importing getPosts and getUsers Function from provider.js module
import { getPosts, getUsers } from "../data/provider.js";
// exporting giffyFeed function. this function will convert and display our giffyFeed html
export const giffyFeed = () => {
//invoking and storing getPosts in a variable of posts
  const posts = getPosts();
//invoking and storing getUsers in a variable of users
  const users = getUsers();
//creating a variable to store value of posts using the reverse method. This allows posts to show from top down with newest always on top
  const postsReversed = posts.reverse();
//returns the html of giffyFeed while mapping through each post and finding the user id associated to that post
  return `
    ${postsReversed
//iterates through each post
      .map((post) => {
//the find method finds the user for the current post
        let creator = users.find((user) => user.id === post.userId);
//returns the html that displays on the dom for each post     
        return `<section name="post" class="post" value='${
          post.id
        }
      
        '><h2 class="post__title">${post.title}</h2> 

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
      })
//join method joins together all html from arrays without commas in between
      .join("")}
        `;
};
