import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        nihil, distinctio, alias et commodi hic illum dolores beatae eligendi
        voluptatum magnam consequatur nesciunt.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((list, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === list.menu_name ? "All" : list.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                src={list.menu_image}
                alt=""
                className={category === list.menu_name ? "active" : ""}
              />
              <p>{list.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
