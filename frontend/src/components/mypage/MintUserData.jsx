import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'

import { isLight, lightColor, darkColor } from '../../functions/util/color.js'
import { Typography } from '@mui/material'
import useBrightness from '../../hooks/useBrightness.js'

export default function MintUserDate({ value, setValue, balance, userAddress }) {
  const [bright, _] = useBrightness()

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%', height: '160px', backgroundColor: `${isLight(bright) ? lightColor : darkColor}` }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '40px 60px 10px 60px',
          fontSize: '26px',
          fontWeight: 'bold',
          boxSizing: 'border-box',
        }}>
        <Typography sx={{ fontSize: '25px', fontWeight: '800' }}>{balance} SSF</Typography>
      </Box>
      <Box sx={{ padding: '0 60px' }}>
        <Box sx={{ position: 'relative', color: 'text.primary' }}>
          <input
            type="text"
            value={userAddress ? `${userAddress.slice(0, 7)}...${userAddress.slice(-4)}` : 'undefined'}
            disabled
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '50px',
              padding: '0 30px',
              boxSizing: 'border-box',
              border: 'none',
              backgroundColor: 'rgba(0,0,0,.15)',
              marginBottom: '20px',
            }}
          />
          <img
            src="currency.png"
            style={{
              position: 'absolute',
              width: '18px',
              top: '6px',
              left: '7px',
            }}
            alt=""
          />
        </Box>
      </Box>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: `${isLight(bright) ? lightColor : darkColor}`,
          }}>
          <TabList onChange={handleChange}>
            <Tab label="?????? ??????" value="1" />
            <Tab label="?????????" value="2" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  )
}
