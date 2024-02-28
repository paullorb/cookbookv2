import { NavLink } from "react-router-dom";
import "../App.css";

export default function NavCategory() {
  return (
    <nav className="CatNavBar">
      <NavLink to="AllRecipes">All Recipes</NavLink>
      <NavLink
        to="Breakfast"
        style={{ backgroundColor: "rgba(195, 0, 255, 0.5)" }}
      >
        Breakfast
      </NavLink>
      <NavLink to="Lunch" style={{ backgroundColor: "rgba(0, 255, 255, 0.5)" }}>
        Lunch
      </NavLink>
      <NavLink
        to="Dinner"
        style={{ backgroundColor: "rgba(46, 139, 86, 0.5)" }}
      >
        Dinner
      </NavLink>
      <NavLink
        to="Dessert"
        style={{ backgroundColor: "rgba(236, 232, 10, 0.5)" }}
      >
        Dessert
      </NavLink>
    </nav>
  );
}
