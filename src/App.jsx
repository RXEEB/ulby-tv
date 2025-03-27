import React from "react";
import { useState } from "react";
import { AppRouter } from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {

  const [isAuth, setIsAuth] = useState(false)

  // React.useEffect(() => {
  //   if (localStorage.getItem('auth')) {
  //     setIsAuth(true)
  //   }
  // }, [])

  return (
    <>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <AppRouter />
      </AuthContext.Provider>
    </>


  )
}
export default App
























































// import React, { useEffect, useMemo, useState } from 'react'
// import './App.css'
// import { PostList } from './components/PostList'
// import { PostForm } from './components/PostForm'
// import { PostFilter } from './components/PostFilter'
// import { MyModal } from './components/UI/modal/MyModal'
// import { MyButton } from './components/UI/buttom/MyButton'
// import { usePosts } from './hooks/usePosts'
// import PostService from './API/PostService'
// import { Loader } from './components/UI/Loader/Loader'
// import { useFetching } from './hooks/useFetching'
// import { getPageCount } from './utils/pages'
// import { usePagination } from './hooks/usePagination'
// import { Pagination } from './components/UI/Pagination/Pagination'

// function App() {

//   const [posts, setPosts] = React.useState([]);
//   const [filter, setFilter] = React.useState({ sort: '', query: '' })
//   const [modal, setModal] = React.useState(false)
//   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
//   const [totalPages, setTotalPages] = React.useState(0)
//   const [limit, setLimit] = React.useState(10)
//   const [page, setPage] = React.useState(1)

//   const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
//     const response = await PostService.getAll(limit, page)
//     setPosts(response.data)
//     const totalCount = response.headers['x-total-count']
//     setTotalPages(getPageCount(totalCount, limit))
//   })

//   useEffect(() => {
//     fetchPosts(limit, page)
//   }, [])

//   const createPost = (newPost) => {
//     setPosts([...posts, newPost])
//     setModal(false)

//   }
//   const deletePost = (post) => {
//     setPosts(posts.filter((item) => item.id !== post.id))
//   };
//   const changePage = (page) => {
//     setPage(page)
//     fetchPosts(limit, page)
//   }

//   return (
//     <div className="App">
//       <MyButton style={{ marginTop: 30 }} onClick={() => setModal(!modal)}>
//         Создать пост
//       </MyButton>
//       <MyModal visible={modal} setModal={setModal}>
//         <PostForm create={createPost} />
//       </MyModal>

//       <hr style={{ margin: '15px 0' }} />
//       <PostFilter filter={filter} setFilter={setFilter} />
//       {postError &&
//         <h1>Произошла ошибка ${postError}</h1>

//       }

//       {isPostsLoading
//         ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
//         : <PostList posts={sortedAndSearchedPosts} title='Список постов' deletePost={deletePost} />
//       }

//       <Pagination page={page} changePage={changePage} />


//     </div >
//   )
// }

// export default App
