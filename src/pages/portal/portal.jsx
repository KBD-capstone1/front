import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// import Footer from '../components/footer.jsx';


// 로그인 후 첫 시작페이지로 사용자 서재. 필기 파일 처럼 과목, 강의, 등을 그리드로 보이기

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  
export default function Portal() {
  return (
    <>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                    키보듣
                    키보듣은 키워드로 보고 듣는 
                    뉴스레터
                    위키 필기 플랫폼 서비스 입니다
                    자세히 알아보기

                    공지1
                    공지2

                    
                </Box>
            </Container>
        </React.Fragment>

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                    <Item>{index + 1}</Item>
                </Grid>
                ))}
            </Grid>
        </Box>

        <Stack spacing={2}>
        <Pagination count={10} />
        </Stack>
    
    </>
  );
}

