
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const coffeeProducts = [
  {
    name: "Espresso",
    description: "A concentrated, full-bodied shot of coffee brewed by forcing hot water through finely-ground coffee beans.",
    price: "$20.99",
    img: "/Espresso.jpeg",
  },
  {
    name: "Cappuccino",
    description: "A perfectly balanced espresso drink topped with equal parts steamed milk and thick milk foam.",
    price: "$19.99",
    img: "/cappuccino.png",
  },
  {
  name: "Mocha",
  description: "A decadent combination of rich espresso, sweet chocolate syrup, and steamed milk, topped with whipped cream.",
    price: "$15.99",
    img: "Mocha-coffee.jpg",
  },
  {
  name: "Caffè Latte",
    description: "A smooth and creamy beverage combining a single shot of espresso with plenty of steamed milk and a thin layer of foam.",
    price: "$19.99",
    img: "/Caffe-latte.jpg",
  },
  {
  name: "Americano",
    description: "A rich espresso shot diluted with hot water, offering a similar strength to drip coffee but with a distinct flavor profile.",
    price: "$25.99",
    img: "/Americano.jpeg",
  },
  {
    name: "Caramel Macchiato",
    description: "Freshly steamed milk with vanilla-flavored syrup, marked with espresso and topped with a sweet caramel drizzle.",
    price: "$20.99",
    img: "/Caramel Macchiato.avif",
  },
];

const Products = () => {
  return (
    <section className="products-section" id="coffee">

      {/* TITLE */}
      <div className="products-header">
        <span className="products-subtitle">
          Premium Collection
        </span>

        <h2 className="products-title">
        Our Finest Blends
        </h2>

        <p className="products-text">
        Discover our collection of    coffees, from rich and bold classics to smooth, creamy favorites and distinctive Ethiopian specialties.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="products-grid">
        {coffeeProducts.map((coffee, index) => (
          <motion.div
            key={coffee.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="product-card"
          >

            <div className="product-image-wrapper">
              <img
                src={coffee.img}
                alt={coffee.name}
                className="product-image"
              />
            </div>

            <div className="product-content">

              <h3 className="product-name">
                {coffee.name}
              </h3>

              <p className="product-description">
                {coffee.description}
              </p>

              <div className="product-footer">
                <span className="product-price">
                  {coffee.price}
                </span>

                <Link to='/'>
                <button className="product-btn">
                  Order Now
                </button>
                </Link>
              </div>

            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Products;