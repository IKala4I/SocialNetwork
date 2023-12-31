import {FC, useState} from 'react'
import styles from "./Paginator.module.css"
import cn from "classnames"

type PaginatorPropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage?: number,
    onPageChanged: (p: number) => void,
    portionSize?: number
}

const Paginator: FC<PaginatorPropsType> = ({
                                               totalItemsCount,
                                               pageSize,
                                               currentPage=1,
                                               onPageChanged,
                                               portionSize = 10
                                           }) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const currentPortionNumber = Math.ceil(currentPage / portionSize)
    const [portionNumber, setPortionNumber] = useState(currentPortionNumber)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize


    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}
                >
                    PREV
                </button>
            }
            {pages
                .filter(pageNumber => pageNumber >= leftPortionPageNumber && pageNumber <= rightPortionPageNumber)
                .map((pageNumber) => {
                        return <span className={cn({
                            [styles.selectedPage]: currentPage === pageNumber
                        }, styles.pageNumber)}
                                     key={pageNumber}
                                     onClick={() => {
                                         onPageChanged(pageNumber)
                                     }}
                        >
                        {pageNumber}
                    </span>
                    }
                )
            }
            {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}
                >
                    NEXT
                </button>
            }
        </div>
    )
}

export default Paginator