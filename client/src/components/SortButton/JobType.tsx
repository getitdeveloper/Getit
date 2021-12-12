import React, { useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RadioButton from '@components/RadioButton';
import { SortButton, useStyles } from './styles';

export default function JobType(): JSX.Element {
  const classes = useStyles();
  const [filterList, setFilterList] = useState([
    { text: '개발자', value: 'developer', checked: true },
    { text: '디자이너', value: 'designer', checked: true },
    { text: '기획자', value: 'pm', checked: true },
  ]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [anchorEl],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [anchorEl]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // 라디오버튼 선택
  const handleJobSort = useCallback(
    (event: any) => {
      const { name } = event.target;
      switch (name) {
        case 'developer': {
          setFilterList([
            {
              text: '개발자',
              value: 'developer',
              checked: !filterList[0].checked,
            },
            filterList[1],
            filterList[2],
          ]);
          break;
        }
        case 'designer': {
          setFilterList([
            filterList[0],
            {
              text: '디자이너',
              value: 'designer',
              checked: !filterList[1].checked,
            },
            filterList[2],
          ]);
          break;
        }
        case 'pm': {
          setFilterList([
            filterList[0],
            filterList[1],
            { text: '기획자', value: 'pm', checked: !filterList[2].checked },
          ]);
          break;
        }
        default:
          console.log('empty select');
      }
    },
    [filterList],
  );

  const tabletSize = useMediaQuery({
    query: '(max-width: 960px)',
  });

  // TODO 백엔드 api 만들어지면 selectTab 값에 따른 요청
  // console.log(filterDeveloper, filterDesigner, filterPm);

  return (
    <>
      {/* 테블릿 사이즈 너비 960px */}
      {/* 테블릿 이하 사이즈 직업 필터 버튼 */}
      {tabletSize ? (
        <div>
          <SortButton aria-describedby={id} onClick={handleClick}>
            <span>직업 필터</span>
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
            <Typography className={classes.radioButton}>
              <RadioButton item={filterList} onClick={handleJobSort} />
            </Typography>
          </Popover>
        </div>
      ) : (
        <RadioButton item={filterList} onClick={handleJobSort} />
      )}
    </>
  );
}
