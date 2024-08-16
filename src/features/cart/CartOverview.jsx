import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  // redux recommend that do manipulation an calculation insede the selector and not out of this ,btu the recommneded of the redux is do calculation of the slice and export that and used here ,I'm also use it,,I use thiw teqnique when i have complex selector

  // const totalCartQuantity = useSelector((state) =>
  //   state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0)
  // );
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  // const totalCartPrice = useSelector((state) =>
  //   state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0)
  // );
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
