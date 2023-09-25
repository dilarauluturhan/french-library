import { BsArrowLeftCircle } from 'react-icons/bs';
import { BsArrowRightCircle } from 'react-icons/bs';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <article className='flex items-center justify-center gap-x-5'>
            <div>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <BsArrowLeftCircle size={32} />
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
                    <BsArrowRightCircle size={32} />
                </button>
            </div>
        </article>
    )
}

export default Pagination;