export const newPostButton = () => {
    return `<button class="miniMode" id="create__button">Have a gif to post?</button>`
}

export const CreatePost = () => {
    return `
    <div class="field">
        <input placeholder ="Title" type="text" name="title" class="newPost__input"/>
    </div>

    <div class="field">
        <input placeholder ="URL" type="text" name="url" class="newPost__input"/>
    </div>

    <div class="field">
        <input placeholder ="Story behind your gif..." type="text" name="story" class="newPost__input"/>
    </div>

    <button class="newPost__submit" id="create__button">Save</button>
    <button class="newPost__cancel" id="create__button">Cancel</button>
    
    `
}