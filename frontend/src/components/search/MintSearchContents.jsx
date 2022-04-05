import { useState } from 'react'
import { Box, Typography } from '@mui/material'

import MintSearchBar from './MintSearchBar'
import MintHorizontalCard from '../common/MintHorizontalCard'

export default function MintSearchContents() {
  const [searchList, setSearchList] = useState([])
  const makeSearchList = () => {
    return
  }
  return (
    <Box sx={{ padding: '0 20px' }}>
      <Box
        sx={{
          position: 'absolute',
          padding: '10px 20px 0 20px',
          width: '100%',
          top: '52px',
          left: 0,
          boxSizing: 'border-box',
        }}>
        <MintSearchBar setSearchList={setSearchList} />
      </Box>
      <Box sx={{ marginTop: '55px' }}>
        {searchList.lenght === 0 ? (
          searchList.map(concert => <MintHorizontalCard key={concert.date} concertData={concert} />)
        ) : (
          <Typography
            sx={{
              color: 'text.primary',
              opacity: '.5',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%)',
            }}>
            검색결과가 없습니다
          </Typography>
        )}
        {/* {searchList.map(concert => (
        <MintHorizontalCard key={concert.date} concertData={concert} />
        ))} */}
      </Box>
    </Box>
  )
}
