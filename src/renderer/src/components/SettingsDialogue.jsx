import { Button, Dialog, DialogActions, DialogContent, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { useGetSettingsQuery } from '../store/settingsSlice'

const SettingsDialogue = ({ open, onClose }) => {
  const { data } = useGetSettingsQuery()

  const [hueBridgeIP, setHueBridgeIP] = useState('')
  const [hueGroupName, setHueGroupName] = useState('')
  const [hueUsername, setHueUsername] = useState('')

  useEffect(() => {
    if (data) {
      setHueBridgeIP(data.hue_bridge_ip)
      setHueGroupName(data.hue_group_name)
      setHueUsername(data.hue_username)
    }
  }, [data])

  const onSubmit = (evt) => {
      evt.preventDefault()
      const formData = new FormData()
      formData.append('hue_bridge_ip', hueBridgeIP)
      formData.append('hue_group_name', hueGroupName)
      formData.append('hue_username', hueUsername)

      fetch('/api/settings', {
          method: 'POST',
          body: formData
      }).then(fetchSettings)
  }

  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth
      PaperProps={{
        component: 'form',
        onSubmit
      }}    
    >
      <Typography variant='h6' sx={{ padding: 2}}>Hue Settings</Typography>
      <DialogContent styles={{ root: { paddingTop: '8px' }}} sx={{ flexDirection: 'column', display: 'flex', padding: 4, gap: 2, paddingTop: '8px' }}>
        <TextField size="small" label="Hue Bridge IP" value={hueBridgeIP} onChange={(e) => setHueBridgeIP(e.target.value)} />
        <TextField size="small" label="Hue Group Name" value={hueGroupName} onChange={(e) => setHueGroupName(e.target.value)} />
        <TextField size="small" label="Hue Username" value={hueUsername} onChange={(e) => setHueUsername(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type='submit'>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default SettingsDialogue
