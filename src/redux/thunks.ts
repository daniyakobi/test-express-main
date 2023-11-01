import { createAsyncThunk } from "@reduxjs/toolkit";
import { APP_STORE_KEY } from "./selectors";
import { setLoad, setCategoriesData } from "./reducer";
import axios from "axios";

const actionType = APP_STORE_KEY + '/fetchCategories';

export const fetchCategories = createAsyncThunk(actionType, async (key, { dispatch, getState }) => {
  try {
    dispatch(setLoad(true));

    const apiCategoriesUrl = 'https://express-shina.ru/vacancy/catalog';

    axios.get(apiCategoriesUrl).then((response) => {
      const data = response.data;

      if (data) {
        dispatch(setCategoriesData(data));
        dispatch(setLoad(false));
      }
    });

  } catch (error) {
    console.log({ error });
  } finally {
    dispatch(setLoad(false));
  }
});