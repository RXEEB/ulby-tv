import React from 'react'
import { MyButton } from './UI/buttom/MyButton'
import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';

export const PostItem = ({ post, deletePost }) => {

    const navigate = useNavigate()


    const handleClick = () => {
        navigate(`/${post.id}`)
    }

    const onDelite = (post) => {
        deletePost(post)
    }

    return (

        <div className="post" >
            <div className="post__content" >
                <h2>{post.id} . {post.title}</h2>

                <div>
                    <ReactMarkdown>
                        {
                            post.body.slice(0, 155) + (post.body.length > 155 ? "..." : "")
                        }
                    </ReactMarkdown>
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={handleClick} >Открыть</MyButton>
                <MyButton onClick={() => onDelite(post)} >Удалить</MyButton>
            </div>
        </div>

    )
}
