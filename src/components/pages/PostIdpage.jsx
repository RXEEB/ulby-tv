import React, { useEffect } from 'react'
import '../../App.css'
import { Link, useParams } from 'react-router'
import { useFetching } from '../../hooks/useFetching'
import PostService from '../../API/PostService'
import { Loader } from '../UI/Loader/Loader'
import { MyButton } from '../UI/buttom/MyButton'


export const PostIdpage = () => {
    const params = useParams()
    const [post, setPost] = React.useState({})
    const [comments, setComments] = React.useState([])

    const [fetchPostbyId, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getByid(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostbyId(params.id)
        fetchComments(params.id)
    }, [])

    const repeatedBody = Array(10).fill(post.body)

    return (
        <div className='page-post__wrapper'>
            <div>
                <Link to='/'> <MyButton>Назад</MyButton></Link>

                {isLoading
                    ? <Loader />
                    :
                    <div className='page-post'>
                        <h1>{post.id}. {post.title}</h1>
                        <div className='page-description'>
                            {repeatedBody.map((bodyText, index) => (
                                <p key={index}>{bodyText}</p>
                            ))}
                        </div>
                    </div>
                }
            </div>
            <h1>коментарии</h1>
            {isCommentsLoading
                ? <Loader />
                : <div>
                    {comments.map((comm) => (
                        <div className='comments-wrapper'>
                            <h3>{comm.email}</h3>
                            <div className='comment'>{comm.body}</div>
                        </div>
                    )

                    )
                    }
                </div>
            }
        </div>
    )
}
