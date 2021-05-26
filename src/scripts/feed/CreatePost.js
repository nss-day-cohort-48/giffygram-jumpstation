//function returns html render of make a post button
export const newPostButton = () => {
    return `<div class="giffygram__feed"><button class="miniMode" id="create__button">Have a gif to post?</button></div>`
}
//function returns html render of create a post form
export const CreatePost = () => {
    return `
    <div class="create__post">
    <div class="field">
        <input placeholder ="Title" type="text" name="title" class="newPost__input"/>
    </div>

    <div class="field">
        <input placeholder ="URL" type="text" name="url" class="newPost__input"/>
    </div>

    <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..."></textarea>


    <button class="newPost__submit" id="submit__button">Save</button>
    <button class="newPost__cancel" id="cancel__button">Cancel</button>
    </div>
    `
}