import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const Progressbar = ({likes, sumLikesDislikes}) => {
  const ratio = likes / sumLikesDislikes * 100
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={ratio} />
    </Box>
  );
}

export default Progressbar