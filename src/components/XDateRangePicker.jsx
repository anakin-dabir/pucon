import React, {useState} from 'react';
import {InputAdornment, IconButton} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {DateRangePicker} from '@mui/x-date-pickers-pro';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import XTextfield from './XTextfield';
import {ReactComponent as CalendarIcon} from '../img/calendarIcon.svg';
import {ReactComponent as CrossIcon} from '../img/crossIcon.svg';
import menu_top_left from '../img/menu_top_left.svg';
import menu_top_right from '../img/menu_top_right.svg';
import menu_bottom_right from '../img/menu_bottom_right.svg';
import menu_bottom_left from '../img/menu_bottom_left.svg';
import clsx from 'clsx';
// import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
// import {useSelector} from 'react-redux';

const XDateRangePicker = ({
  selectedDate = ['12/11/2021', '12/11/2023'],
  selectedDateSet,
  placeholder = 'DD/MM/YYYY - DD/MM/YYYY',
  className = '',
  ...props
}) => {
  const [calenderOpen, calenderOpenSet] = useState(false);
  console.log(selectedDate);
  return (
    <>
      <div className={clsx('w-72', className)}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            value={[selectedDate[0], selectedDate[1]] || null}
            open={calenderOpen}
            onClose={() => calenderOpenSet(false)}
            onOpen={() => calenderOpenSet(true)}
            PopperProps={{
              sx: {
                '&.MuiPickersPopper-root': {
                  backgroundColor: 'rgba(7, 50, 79, 0.92) !important',
                  background: `
                                  url(${menu_top_left}) top left,
                                  url(${menu_top_right}) top right,
                                  url(${menu_bottom_right}) bottom right,
                                  url(${menu_bottom_left}) bottom left`,
                  backgroundRepeat: 'no-repeat',
                  clipPath: `polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)`,
                },
              },
            }}
            onChange={value => {
              selectedDateSet?.([
                value[0]?.toLocaleDateString('en-US', {
                  month: '2-digit',
                  day: '2-digit',
                  year: 'numeric',
                }) || '',
                value[1]?.toLocaleDateString('en-US', {
                  month: '2-digit',
                  day: '2-digit',
                  year: 'numeric',
                }) || '',
              ]);
            }}
            renderInput={() => (
              <XTextfield
                placeholder={placeholder}
                value={
                  selectedDate[0] && selectedDate[1]
                    ? [
                        new Date(selectedDate[0]).toLocaleDateString('en-GB'),
                        new Date(selectedDate[1]).toLocaleDateString('en-GB'),
                      ].join('-')
                    : ''
                }
                onKeyDown={e => {
                  if (e.code === 'Backspace') selectedDateSet?.(['', '']);
                }}
                type='text'
                inputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      {selectedDate[0] && selectedDate[1] && (
                        <IconButton onClick={() => selectedDateSet?.(['', ''])}>
                          <CrossIcon />
                        </IconButton>
                      )}
                      <IconButton
                        onClick={() => {
                          calenderOpenSet?.(prev => !prev);
                        }}
                      >
                        <CalendarIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default XDateRangePicker;