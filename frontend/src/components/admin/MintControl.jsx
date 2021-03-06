import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import MintConcertResist from './MintConcertResist'

export default function MintControl() {
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 100,
        backgroundColor: 'antiquewhite',
        overflowY: 'scroll',
      }}>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="콘서트 목록" />
            <Tab label="콘서트 등록" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MintConcertResist />
        </TabPanel>
      </Box>
    </Box>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}
