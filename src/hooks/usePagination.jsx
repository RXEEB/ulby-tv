import { useMemo } from "react"

export const usePagination = ({
    totalPages = 1
}) => {
    return useMemo(() =>
        Array.from({ length: totalPages }, (_, i) => i + 1),
        [totalPages]
    )
}