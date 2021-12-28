import React, { useState, useCallback } from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SortButton, useStyles } from './styles';

export default function NewFamous(): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectTab, setSelectTab] = useState<string>('최신순');

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [anchorEl],
  );

  const handlePostSort = useCallback(
    (event: any) => {
      return alert('서비스 준비중 입니다.');
      setSelectTab(event.target.innerHTML);
      setAnchorEl(null);
    },
    [selectTab, anchorEl],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [anchorEl]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // TODO 백엔드 api 만들어지면 selectTab 값에 따른 요청

  return (
    <div>
      <SortButton aria-describedby={id} onClick={handleClick}>
        <span>{selectTab}</span>
        <ArrowDropDownIcon />
      </SortButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography} onClick={handlePostSort}>
          최신순
        </Typography>
        <Typography className={classes.typography} onClick={handlePostSort}>
          인기순
        </Typography>
      </Popover>
    </div>
  );
}
