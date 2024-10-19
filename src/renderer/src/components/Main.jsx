import { CircularProgress, IconButton, Stack, styled } from '@mui/material'
import { Add } from '@mui/icons-material'

import Rule from './Rule'
import { useGetDiceQuery } from '../store/diceSlice'
import { useGetLightsQuery } from '../store/hueSlice'

const MainStack = styled(Stack)({
  gap: '8px',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '20px'
})

const AddStack = styled(IconButton)({
  width: '100%',
  padding: '8px',
  display: 'flex',
  justifyContent: 'center',
  background: '#414853',
  borderRadius: '3px'
})

const Main = () => {
  const { data: diceSettings, isLoading } = useGetDiceQuery()
  const { data: lights, isLightsLoading } = useGetLightsQuery()
  console.log(lights)
  if (isLoading) {
    return (
      <MainStack sx={{ justifyContent: 'center' }}>
        <CircularProgress />
      </MainStack>
    )
  }

  return (
    <MainStack>
      {diceSettings.rules.map((rule, idx) => {
        return <Rule key={idx} {...rule} />
      })}
      <AddStack>
        <Add />
      </AddStack>
    </MainStack>
  )
}

export default Main
