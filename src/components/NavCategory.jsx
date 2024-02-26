import { NavLink } from "react-router-dom";
import "../App.css";

export default function NavCategory() {
  return (
    <nav className="CatNavBar">
      <NavLink to="AllRecipes">All Recipes</NavLink>
      <NavLink to="Breakfast">Breakfast</NavLink>
      <NavLink to="Lunch">Lunch</NavLink>
      <NavLink to="Dinner">Dinner</NavLink>
      <NavLink to="Dessert">Dessert</NavLink>
    </nav>
  );
}
