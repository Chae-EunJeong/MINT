import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MintHorizontalCard from '../common/MintHorizontalCard'
import MintHorizontalSkeleton from '../skeleton/MintHorizontalSkeleton'
import MintCancelModal from './MintCancelModal'

export default function MintBuyList({ contractList, loading }) {
  const navigate = useNavigate()

  const [CancelOpen, setCancelOpen] = useState(false)
  const [targetConcertId, setTargetConcertId] = useState(null)

  const handleNavigation = id => {
    navigate(`/concert/detail/${id}`)
  }

  const handleCancelOpen = id => {
    setCancelOpen(true)
    setTargetConcertId(id)
  }
  const handlePayClose = () => {
    setCancelOpen(false)
    setTargetConcertId(null)
  }

  return (
    <Box>
      {loading ? (
        [0, 0, 0, 0, 0].map((v, i) => <MintHorizontalSkeleton key={i} notOpen={false} />)
      ) : (
        <>
          {contractList.length === 0 ? (
            <Typography
              sx={{
                color: 'text.primary',
                opacity: '.5',
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%)',
              }}>
              구매 내역이 없습니다
            </Typography>
          ) : (
            contractList.map((concert, index) => (
              <MintHorizontalCard
                key={`${concert.id}-${concert.startDate}-${index}`}
                concertData={{
                  ...concert,
                  isOpen:
                    new Date(concert.startDate.slice(0, 10)) <= new Date() &&
                    new Date(concert.endDate.slice(0, 10)) >= new Date(),
                  isBefore: new Date(concert.startDate.slice(0, 10)) > new Date(),
                }}
                passDetail={handleNavigation}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ width: '45%' }}
                  onClick={() => handleCancelOpen(concert.id)}>
                  예매 취소
                </Button>
              </MintHorizontalCard>
            ))
          )}
        </>
      )}
      <MintCancelModal open={CancelOpen} handleClose={handlePayClose} targetConcertId={targetConcertId} />
    </Box>
  )
}
