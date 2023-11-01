import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch } from "../../../redux";
import { setCategoriesData, setLoad } from "../../../redux/reducer";

export const useFetchCategories = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useLayoutEffect(() => {
    dispatch(setLoad(loading));
  }, [dispatch, loading]);

  useLayoutEffect(() => {
    dispatch(setCategoriesData(categories));
  }, [categories, dispatch]);

  useEffect(() => {
    try {
      setLoading(true);
  
      const apiCategoriesUrl = 'https://express-shina.ru/vacancy/catalog';
  
      axios.get(apiCategoriesUrl).then((response) => {
        const data = response.data.categories;
  
        if (data) {
          setCategories(data);
          setLoading(false);
        }
      });
  
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, []);
}