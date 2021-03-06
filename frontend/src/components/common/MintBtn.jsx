import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function MintBtn({ name, color, link, passData, available }) {
  /*
    primary : main purple color
    secondary : main grey sub color
    info : black for information button
  */
  const navigate = useNavigate()
  const handleLink = () => {
    if (link.handleClick) {
      link.handleClick()
    } else {
      link ? navigate(`/${link}`, { state: { ...passData } }) : alert('이동할 주소가 없습니다')
    }
  }

  return (
    <Box sx={{ margin: '20px 31px' }}>
      <Button variant="contained" color={color} sx={btnStyle} onClick={handleLink} disabled={available}>
        {name}
      </Button>
    </Box>
  )
}

// styles
const btnStyle = { width: '100%', height: '35px' }

// default props
MintBtn.defaultProps = {
  name: '초기값',
  color: 'primary',
}

export default MintBtn
