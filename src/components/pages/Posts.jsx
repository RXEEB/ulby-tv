import React, { useEffect, useMemo, useState } from 'react'
import '../../App.css'
import PostService from '../../API/PostService'
import { PostList } from '../PostList'
import { PostForm } from '../PostForm'
import { PostFilter } from '../PostFilter'
import { MyModal } from '../UI/modal/MyModal'
import { MyButton } from '../UI/buttom/MyButton'
import { Loader } from '../UI/Loader/Loader'
import { Pagination } from '../UI/Pagination/Pagination'
import { usePosts } from '../../hooks/usePosts'
import { useFetching } from '../../hooks/useFetching'



import { getPageCount } from '../../utils/pages'


function Posts() {

    const [posts, setPosts] = React.useState([]);
    const [filter, setFilter] = React.useState({ sort: '', query: '' })
    const [modal, setModal] = React.useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = React.useState(0)
    const [limit, setLimit] = React.useState(10)
    const [page, setPage] = React.useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const createPost = (newPost) => {
        setPosts([newPost, ...posts])
        setModal(false)

    }
    const deletePost = (post) => {
        setPosts(posts.filter((item) => item.id !== post.id))
    };
    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(!modal)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setModal={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError &&
                <h1>Произошла ошибка - {postError}</h1>

            }

            {isPostsLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <PostList posts={sortedAndSearchedPosts} title='Список постов' deletePost={deletePost} />
            }

            <Pagination page={page} changePage={changePage} />


        </div >
    )
}

export default Posts;


