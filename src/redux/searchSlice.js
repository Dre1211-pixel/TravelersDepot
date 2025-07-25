import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  searchValue: '', //首頁Home.jsx專用：儲存搜尋關鍵字
  singleFilter: '', //首頁Home.jsx專用：儲存單一分類filter條件：鎮店之寶、新品上架
};
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
          state.searchValue = action.payload;
        },
        setSingleFilter: (state, action) => {
          state.singleFilter = action.payload;
        },
    },
});
export const { setSearchValue, setSingleFilter } = searchSlice.actions;
export default searchSlice.reducer;