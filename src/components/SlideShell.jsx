import React from 'react'
import { Box } from '@mui/material'
import { colors } from '../theme'

export default function SlideShell({ children, sx = {}, center = false }) {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: center ? 'center' : 'center',
        alignItems: center ? 'center' : 'flex-start',
        textAlign: center ? 'center' : 'left',
        px: { xs: 4, md: 10 },
        py: 8,
        borderBottom: '2px solid rgba(0,0,0,0.35)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: `linear-gradient(90deg, ${colors.pink} 0%, ${colors.teal} 50%, transparent 100%)`,
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
