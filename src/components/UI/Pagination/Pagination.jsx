import React from 'react'
import { usePagination } from '../../../hooks/usePagination'

export const Pagination = ({ page, changePage }) => {

    const pagesArray = usePagination({ totalPages: 10 })

    return (
        <div className='page__wrapper'>
            {
                pagesArray.map((p) => {
                    return (
                        <span
                            key={p}
                            onClick={() => changePage(p)}
                            className={page === p ? 'page page__current' : 'page'}>{p}</span>
                    )

                })
            }
        </div>
    )
}
