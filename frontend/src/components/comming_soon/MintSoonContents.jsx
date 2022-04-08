import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getRequest } from '../../api/requests'
import checkNotAddress from '../../functions/util/checkNotAddress'

import MintHorizontalCard from '../common/MintHorizontalCard'
import MintHorizontalSkeleton from '../skeleton/MintHorizontalSkeleton'

export default function MintSoonContents() {
  const navigate = useNavigate()
  const [notOpenConcerts, setNotOpenConcerts] = useState([])

  const getNotOpenConcertList = async () => {
    try {
      const response = await getRequest('api/concert', { status: 0, size: 10 })
      setNotOpenConcerts(response.data)
    } catch {
      navigate('/error404')
    }
  }
  useEffect(() => {
    if (checkNotAddress(() => navigate('/address'))) {
      getNotOpenConcertList()
    }
  }, [])

  const handleNaviation = id => {
    navigate(`/concert/detail/${id}`)
  }

  return (
    <Box sx={{ padding: '14px 20px 0 20px' }}>
      {notOpenConcerts.length === 0
        ? [0, 0, 0, 0, 0].map((v, i) => <MintHorizontalSkeleton key={i} notOpen={false} />)
        : notOpenConcerts.map(concert => (
            <MintHorizontalCard
              key={concert.id}
              concertData={{
                ...concert,
                isOpen:
                  new Date(concert.startDate.slice(0, 10)) <= new Date() &&
                  new Date(concert.endDate.slice(0, 10)) >= new Date(),
                isBefore: new Date(concert.startDate.slice(0, 10)) > new Date(),
              }}
              passDetail={handleNaviation}
            />
          ))}
    </Box>
  )
}
