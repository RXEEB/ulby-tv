import React from 'react'
import { MyInput } from './UI/input/MyInput'
import { MyButton } from './UI/buttom/MyButton'
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';



export const PostForm = ({ create }) => {

    const [post, setPost] = React.useState({ title: '', body: '' })




    const addNewPost = (e) => {
        e.preventDefault()
        const now = new Date(Date.now());
        const isoDate = now.toISOString().slice(0, -5);

        const newPost = {
            ...post, id: isoDate
        }
        create(newPost)
        setPost({ title: '', body: '' })

    }

    return (
        <>
            <h2 style={{ margin: '20px 0 10px 0' }}>Добавить пост -  Markdown разметка</h2>
            <form>
                <MyInput onChange={e => setPost({ ...post, title: e.target.value })}
                    value={post.title}
                    name='title'
                    type="text" placeholder='Название поста ' />
                <SimpleMDE
                    value={post.body}
                    onChange={(value) => setPost({ ...post, body: value })}

                />


                <MyButton onClick={addNewPost} style={{ border: '1px solid grey' }}>Создать пост</MyButton>
            </form >
        </>
    )
}



