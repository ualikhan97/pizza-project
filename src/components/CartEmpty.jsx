import cartEmptyImg from "../assets/img/empty-cart.png";
import { Link } from "react-router-dom";
const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          Корзина пустая <icon>🤥</icon>{" "}
        </h2>
        <p>
          Вероятней всего, вы еще не заказывали пиццу. <br />
          Для того, чтобы заказать пиццу, перейдите на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty Cart" />
        <Link to="/" class="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
