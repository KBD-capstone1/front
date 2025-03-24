import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        // disableClearable///
        options={existingUrls.map((option) => option.url)}  // refactor-url 입력하면 label로 표기되도록
        renderInput={(params) => (
          <TextField
            {...params}
            label="Url"
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
          />
        )}
      />
    </Stack>
  );
}

const existingUrls = [  
    { url: 'https://www.skuniv.ac.kr/', label: '서경대학교', logo: '사이트 로고 이미지' },
    { url: 'https://cs.skuniv.ac.kr/', label: '서경대학교 소프트웨어학과과', logo: '사이트 로고 이미지' },

];
