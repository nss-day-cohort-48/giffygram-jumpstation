import { getFiltered, getPosts, getUsers } from "../data/provider.js";

//FilteredPosts gathers data and returns posts filtered by userId
export const FilteredPosts = () => {
  //filteredPosts stores getFiltered Function
  const filteredPosts = getFiltered();
  //users stores getUsers Function
  const users = getUsers();
  return `
  <h1>Giffy Feed</h1>    
  ${filteredPosts.map((post) => {
      let creator = users.find((user) => user.id === post.userId);
      return `<section class='post'><h2 class="post__title">${post.title}</h2> 
      <img class="post__image" src='${post.URL}'>
      <div class='post__description'>${post.description}</div>
      <div class="post__tagline">Posted by ${creator.name} ${post.timestamp}</div>
      <div class="post__actions"></div>
      </section>`;
    })}
    `;
};
//returns html Giffy Feed
//map method iterates through each post
//find method finds user and all posts equal to current userId
//returns html render of post form
