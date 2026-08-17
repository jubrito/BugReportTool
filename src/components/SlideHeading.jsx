import React from 'react'
import { Typography } from '@mui/material'
import { colors } from '../theme'

export default function SlideHeading({ children, variant = 'h2', accentColor, sx = {} }) {
  const isH1 = variant === 'h1'
  const emColor = accentColor ?? (isH1 ? colors.teal : colors.pink)
  return (
    <Typography
      variant={variant}
      sx={{
        fontSize: isH1
          ? 'clamp(2.8rem, 4.5vw, 4rem)'
          : 'clamp(2rem, 3vw, 2.8rem)',
        fontWeight: 800,
        letterSpacing: isH1 ? '-0.025em' : '-0.02em',
        lineHeight: isH1 ? 1.08 : 1.12,
        mb: isH1 ? '22px' : '36px',
        '& em': {
          color: emColor,
          fontStyle: 'normal',
        },
        ...sx,
      }}
    >
      {children}
    </Typography>
  )
}
