import { NavLink } from "react-router-dom";

export default function NavCategory() {
  return (
    <nav>
      <NavLink to="AllRecipes">All Recipes</NavLink>
      <NavLink>Breakfast</NavLink>
      <NavLink>Lunch</NavLink>
      <NavLink>Dinner</NavLink>
      <NavLink>Dessert</NavLink>
    </nav>
  );
}
