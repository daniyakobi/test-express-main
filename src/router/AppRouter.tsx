import { Routes, Route } from "react-router-dom"
import { Categories } from "../modules/categories/Categories"
import { Subcategory } from "../modules/subcategory/Subcategory"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/:slag' element={<Subcategory />} />
      <Route path='/' element={<Categories />}/>
    </Routes>
  )
}