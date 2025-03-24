import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FixedTags() {
  const fixedOptions = [];
  const [value, setValue] = React.useState();

  return (
    <Autocomplete
      multiple
    //   id="fixed-tags-demo"
      id="tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([
          ...newValue.filter((option) => !fixedOptions.includes(option)),
        ]);
      }}
      options={existingKeyword}
      getOptionLabel={(option) => option.keyword}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => {
          const { key, ...tagProps } = getTagProps({ index });
          return (
            <Chip                       // refactor-커스텀 수정 필요
              key={key}
              label={option.keyword}
              {...tagProps}
              disabled={fixedOptions.includes(option)}
            />
          );
        })
      }
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Keywors" placeholder="Keywors" />
      )}
    />
  );
}

const existingKeyword = [
    { keyword: '1학년', year: 1975 },
    { keyword: '2학년', year: 1975 },
    { keyword: '3학년', year: 1975 },
    { keyword: '4학년', year: 1975 },
    { keyword: '해커톤', year: 1975 },
    { keyword: '코딩테스트', year: 1975 },
    { keyword: 'sw', year: 1975 },
    { keyword: '졸업요건', year: 1975 },
];
