/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'
import arrowLeft from '../../static/assets/icons/arrow-left.svg';
import arrowRight from '../../static/assets/icons/arrow-right2.svg';
import ReactPaginate from 'react-paginate';
import { navigate } from '@reach/router';

const Pager = ({ data }) => {
  const { previousPagePath,
    nextPagePath,
    humanPageNumber,
    limit,
    numberOfPages,
    pageNumber,
    skip } = data;
  console.log({ data, test: "test" })


  const handlePageClick = (event) => {
    console.log(event)
    navigate(event.selected === 0 ? '/blog/' : `/blog/${event.selected + 1}/`)
  }
  return (
    <div sx={{
      maxWidth: '1190px',
      mx: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      px: '48px',
      pt: '3rem',
      pb: ['none', null, '5rem'],
      a: { 'color': '#667085' }
    }}>

      <div sx={{
        display: ['none', null, 'flex'],
        width: '100%',
        ul: {
          listStyleType: 'none',
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        },

        a: {
          color: '#667085',
          px: '14px',
          py: '10px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          '&:hover': {
            color: '#CE212B',
            background: '#F6F0F0',
            borderRadius: '8px',
          }
        },
        '.next': {
          ml: 'auto'
        },
        '.previous': {
          mr: 'auto'
        },
        '.disabled': {
          cursor: 'not-allowed'
        }
      }}>
        <ReactPaginate
          className='pagination'
          breakLabel="..."
          nextLabel={<>

            <span>Next</span>
            <img src={arrowRight} alt="" />
          </>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={numberOfPages}
          previousLabel={<>
            <img src={arrowLeft} alt="" />
            <span>Previous</span>
          </>}
          forcePage={pageNumber}
          renderOnZeroPageCount={null}
        />
      </div>

      {/* mobile */}

      <div sx={{
        display: ['block', null, 'none'],
        width: '100%',
        ul: {
          listStyleType: 'none',
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        },

        a: {
          color: '#667085',
          px: '14px',
          py: '10px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          '&:hover': {
            color: '#CE212B',
            background: '#F6F0F0',
            borderRadius: '8px',
          }
        },
        '.next': {
          ml: 'auto'
        },
        '.previous': {
          mr: 'auto'
        },
        '.disabled': {
          cursor: 'not-allowed'
        }
      }}>
        <ReactPaginate
          className='pagination'
          breakLabel="..."
          nextLabel={<>

            {/* <span>Next</span> */}
            <img src={arrowRight} alt="" />
          </>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={numberOfPages}
          previousLabel={<>
            <img src={arrowLeft} alt="" />
            {/* <span>Previous</span> */}
          </>}
          forcePage={pageNumber}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}

export default Pager