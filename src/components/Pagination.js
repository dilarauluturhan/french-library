import { BsArrowLeftSquare } from 'react-icons/bs';
import { BsArrowRightSquare } from 'react-icons/bs';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <article className='flex items-center justify-center gap-x-7'>
            <div>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <BsArrowLeftSquare size={32} />
                </button>
            </div>
            <div>
                <button className='text-lg md:text-2xl font-semibold'>
                    {currentPage}
                </button>
            </div>
            <div>
                <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                >
                    <BsArrowRightSquare size={32} />
                </button>
            </div>
        </article>
    )
}

export default Pagination;