import { Box, Typography, useTheme } from '@mui/material';
import { CircularProgressContainer, StyledBox } from './index.styles';

const CircularProgress = () => {
  const progress = 85;
  const radius = 130;
  const strokeWidth = 25;
  const normalizedRadius = radius - strokeWidth * 0.6;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const theme = useTheme();
  return (
    <StyledBox>
      <Box sx={{ position: 'relative', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: theme.palette.textDark.main,
            opacity: 0.9,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '17px'
          }}
        >
          Perpetual
        </Typography>
          <Box 
            component="span" 
            sx={{ 
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.6)'
            }}
          >
            i
          </Box>
      </Box>

      <CircularProgressContainer>
        <svg
          height={radius * 2}
          width={radius * 2}
          style={{ transform: 'rotate(15deg)'}}
        > 
          <circle
            stroke="#117d61"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#00d483"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F5A0" />
              <stop offset="100%" stopColor="#00D085" />
            </linearGradient>
          </defs>
        </svg>
        
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#fff',
              fontWeight: 600,
              fontSize: '36px',
              mb: 1
            }}
          >
            5,824,213
          </Typography>
          <Typography 
            sx={{ 
              color: 'rgba(255,255,255,0.5)',
              fontSize: '14px'
            }}
          >
            Label
          </Typography>
        </Box>
      </CircularProgressContainer>

     
    </StyledBox>
  );
};

export default CircularProgress;