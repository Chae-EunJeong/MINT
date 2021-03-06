import React from 'react'
import { Box, Typography } from '@mui/material'
import MintPageTemplate from '../common/MintPageTemplate'
import MintFooter from '../footer/MintFooter'
import MintSubHeader from '../header/MintSubHeader'
import MintBtn from '../common/MintBtn'

import '../../styles/MintNotice.css'

function MintNotice1(props) {
  return (
    <MintPageTemplate header={<MintSubHeader content="메인으로" />} contents={<Contents />} footer={<MintFooter />} />
  )
}

function Contents() {
  return (
    <Box sx={{ paddingBottom: '60px' }}>
      <Box sx={{ padding: '0 24px' }}>
        <Typography sx={{ fontSize: '26px', fontWeight: '600', marginBottom: '10px', marginTop: '50px' }}>
          지갑 생성하기
        </Typography>
        <Typography sx={subHeader}>1. SSAFY Wallet 설치</Typography>
        <Box sx={subCon}>
          <img src={'/img/notice1_1.png'} style={imgStyle} />
          <Typography>
            1. APK파일을 내려받아 주세요.
            <a style={{ color: '#8811DD', textDecoration: 'underline', cursor: 'pointer' }}>https://t.ly/YZwL</a>
          </Typography>
        </Box>
        <Box sx={subCon}>
          <img src="/img/notice1_2.png" style={imgStyle} />
          <Typography>2. SSAFY GIT에 등록된 이메일 주소를 인증해주세요.</Typography>
        </Box>
        <Box sx={subCon}>
          <img src="/img/notice1_3.png" style={imgStyle} />
          <Typography>3. 수신 이메일을 확인 후 인증코드를 입력해주세요.</Typography>
        </Box>
        <Box sx={subCon}>
          <img src="/img/notice1_4.png" style={imgStyle} />
          <Typography>4. 지갑 생성이 완료되었습니다. 확인버튼을 눌러 지갑을 확인해주세요.</Typography>
        </Box>
        <Typography sx={{ ...subHeader, marginTop: '60px' }}>주의사항</Typography>
        <ul style={{ paddingLeft: '20px', marginBottom: '60px' }}>
          <li>현재 지갑 앱은 안드로이드 버전만 지원하고 있으며, APK 파일을 내려받아 설치하시기바랍니다.</li>
          <li>
            지갑 생성 후에 앱 초기화, 재설치 등으로 인해 재인증할 경우 기록해둔 시드 구문을 활용하여 이전 주소와 보유
            토큰 복원이 가능합니다.
          </li>
          <li>
            재인증을 할 때 복원이 아닌 새로운 지갑 생성을 하는 경우, 이전에 사용하던 주소와 보유토큰은 다시 복원되지
            않음에 유의 바랍니다.
          </li>
        </ul>
      </Box>
      <MintBtn name="메인으로" link="home" />
    </Box>
  )
}

// styles
const subHeader = { fontWeight: '800', fontSize: '18px', marginTop: '30px', marginBottom: '20px' }
const subCon = { marginTop: '40px' }
const subCon2 = { marginTop: '10px' }
const imgStyle = { width: '100%' }

export default MintNotice1
