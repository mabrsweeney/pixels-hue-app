import { Settings } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import { useState } from 'react'

import SettingsDialogue from './SettingsDialogue'
import { useGetSettingsQuery } from '../store/settingsSlice'

const Header = () => {
  const { isLoading } = useGetSettingsQuery()

  const [open, setOpen] = useState(false)
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton disabled={isLoading} onClick={() => setOpen(true)}>
          <Settings />
        </IconButton>
      </Toolbar>
      <SettingsDialogue open={open} onClose={() => setOpen(false)} />
    </AppBar>
  )
}

export default Header
