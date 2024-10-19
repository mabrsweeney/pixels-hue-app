import { Button, Stack, styled } from "@mui/material"

import { useRollDiceMutation } from "../store/diceSlice"

const FaceButton = styled(Button)({
    width: '30px',
    border: '1px solid gray',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#414853',
    color: 'white',
    minWidth: '30px',
    padding: 0,

})

const RuleStack = styled(Stack)({
    width: '100%',
    padding: '8px',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'center',
    background: '#414853',
})

const Face = ({ face }) => {
    const [rollDice] = useRollDiceMutation()
    return (
        <FaceButton onClick={() => rollDice({ face })}>{face}</FaceButton>
    )
}

const Rule = ({ faces }) => {
    return (
        <RuleStack sx={{ background: '#32363f'}}>
            <Stack flexDirection='row' gap='4px'>
                Faces: 
                {faces.map((face) => <Face key={face} face={face} />)}
            </Stack>
        </RuleStack>
    )
}

export default Rule