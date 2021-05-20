export const newPostButton = () => {
    return `<button class="button" id="create__button">Create Post</button>`
}

export const CreatePost = () => {
    return `
    <div class="field">
        <input placeholder ="Title" type="text" name="title" class="input"/>
    </div>

    <div class="field">
        <input placeholder ="URL" type="text" name="url" class="input"/>
    </div>

    <div class="field">
        <input placeholder ="Story behind your gif..." type="text" name="story" class="input"/>
    </div>
    `
}