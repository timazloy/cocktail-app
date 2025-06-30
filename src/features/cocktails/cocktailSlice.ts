import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Cocktail } from '../../entities/cocktail'
const cocktailCodes = ['margarita', 'mojito', 'a1', 'kir'] as const
export type CocktailCode = (typeof cocktailCodes)[number]

type State = {
  data: Record<CocktailCode, Cocktail[]>
  loading: boolean
  error: string | null
}

const initialState: State = {
  data: {} as Record<CocktailCode, Cocktail[]>,
  loading: false,
  error: null,
}

export const fetchCocktails = createAsyncThunk('cocktails/fetch', async (code: CocktailCode) => {
  const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`)
  return { code, drinks: res.data.drinks ?? [] }
})

const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.data[action.payload.code] = action.payload.drinks
        state.loading = false
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Unknown error'
      })
  },
})

export default cocktailSlice.reducer
