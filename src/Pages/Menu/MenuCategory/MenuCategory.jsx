import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover image={coverImg} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-8 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div>
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline btn-accent">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
