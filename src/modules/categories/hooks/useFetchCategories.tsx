import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch } from "../../../redux";
import { setCategoriesData, setLoad } from "../../../redux/reducer";

const API_CATEGORIES_URL = 'https://express-shina.ru/vacancy/catalog';

export const useFetchCategories = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(setLoad(true));  
      axios.get(API_CATEGORIES_URL).then((response) => {
        const data = response.data.categories;
  
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
  }, [dispatch]);
}