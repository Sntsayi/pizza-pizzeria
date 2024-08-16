import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  // important hint: when we use the fetcher.load, we actually wanna to load data (read data) of the own arbitary data  without page navigation,but when we need to write data own arbitary route , we need the feacher.Form component,this component just like a Form component provided by a modern react-router but only difference is ,in this component when  action data and send some data to arbitary api without any navigate,and this is important to understand. acutally this fetcher.Form is not navigate and just revalidate the page....so good

  const fetcher = useFetcher();

  return (
    // hint : when we need some change of the api ,we almost use PATCH requst.
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}
export default UpdateOrder;

// this action used in App.jsx and Order/:orderid route ..nonethless the  action not in order page but react smart enoght to understand that action in the child of the order claas

export async function action({ requset, params }) {
  // we not anything in our form,so we no need to use requset,,please campare with the When we use Form of the  modern react-router, that is used in CreateOrder.jsx action
  // in PATCH mode we just need the data object(cintain the key and value) of we have to change that value.

  //   this is so beautifull and excitable 😍😎when we learn new thing.
  //   thisis power of the revalidation of the fetcher.Form component
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

// another feature you can write this: 1) changea ddress 2) change phone number 3) delete  priority and also add priority.

/*concludion:
1)  the featcher.Form component :we can use it to update some data without causing navigation
2)  Form Component in modern react-router: we can write the data (whole data) in our fetch with cause navigation

3) if we are building a highly interactive web application you will use these all the time probably
*/
