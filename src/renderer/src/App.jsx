import { useCallback, useEffect, useState } from 'react'
import { Stack, styled } from '@mui/material'

import Header from './components/Header'
import Main from './components/Main'
import { useGetSettingsQuery } from './store/settingsSlice'
import { useGetDiceQuery } from './store/diceSlice'

const AppBox = styled(Stack)({
  width: '100vw',
  height: '100vh'
})

const App = () => {
  return (
    <AppBox>
      <Header />
      <Main />
    </AppBox>
  )
}

export default App
