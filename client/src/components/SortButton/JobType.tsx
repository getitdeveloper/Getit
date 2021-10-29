import * as React from 'react';
import { useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RadioButton from '@components/RadioButton';
import { SortButton, useStyles } from './styles';

const filterList = [
  { text: '개발자', value: 'developer', checked: true },
  { text: '디자이너', value: 'designer', checked: true },
  { text: '기획자', value: 'pm', checked: true },
];

export default function JobType(): JSX.Element {
  const classes = useStyles();
  const [filterDeveloper, setFilterDeveloper] = useState(filterList[0]);
  const [filterDesigner, setFilterDesigner] = useState(filterList[1]);
  const [filterPm, setFilterPm] = useState(filterList[2]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // 라디오버튼 선택
  const handleRecuitDeveloper = useCallback(() => {
    setFilterDeveloper({
      ...filterDeveloper,
      checked: !filterDeveloper.checked,
    });
  }, [filterDeveloper]);

  const handleRecuitDesigner = useCallback(() => {
    setFilterDesigner({
      ...filterDesigner,
      checked: !filterDesigner.checked,
    });
  }, [filterDesigner]);

  const handleRecuitPm = useCallback(() => {
    setFilterPm({
      ...filterPm,
      checked: !filterPm.checked,
    });
  }, [filterPm]);

  const tabletSize = useMediaQuery({
    query: '(max-width: 960px)',
  });

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
              <RadioButton
                item={filterDeveloper}
                onClick={handleRecuitDeveloper}
              />
            </Typography>
            <Typography className={classes.radioButton}>
              <RadioButton
                item={filterDesigner}
                onClick={handleRecuitDesigner}
              />
            </Typography>
            <Typography className={classes.radioButton}>
              <RadioButton item={filterPm} onClick={handleRecuitPm} />
            </Typography>
          </Popover>
        </div>
      ) : (
        <div>
          <RadioButton item={filterDeveloper} onClick={handleRecuitDeveloper} />
          <RadioButton item={filterDesigner} onClick={handleRecuitDesigner} />
          <RadioButton item={filterPm} onClick={handleRecuitPm} />
        </div>
      )}
    </>
  );
}
