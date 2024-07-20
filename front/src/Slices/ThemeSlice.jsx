import { createSlice } from '@reduxjs/toolkit'

const ThemeSlice = createSlice({
    name : 'ToggleTheme',
    initialState : {value : true},
    reducers : {
        ChangeTheme : (state) => {state.value = !state.value}
    }
})

export const {ChangeTheme} = ThemeSlice.actions
export default ThemeSlice.reducer