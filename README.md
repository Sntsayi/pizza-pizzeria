# React-Vite : pizza-pizzeria
### The idea of this project for Jonas Schmedtmann

## features:
#### hooks: useState , useEffect, this hooks provided by new react-router: useFetcher , useActionData , useRouteError, useNavigation
#### I used new and modern react-router do make app single page application and this new way have a some best features like loader to call api and action for send data from that route to the api  and error handling for page like errorElement property, 
#### This new way of react-router have some feature to handle remote state managment by i said earlier , loader and action property.
#### The loader of the new react router is for :This is a new feature of the react router ,that is fetching api with data loading :
        The idea behind the loader that,somewhere in our code we create a function that fetches some data from an api we then provide that loader function to one of our routes and that route will fetch that data as soon as aplication goes to that route and in the end once that data has arrived,it will be provided to the page component itself using a custom hook called useLoaderData().
        we do this in three step : 1)first we create the loader function in that your route component ,2)second we provide the loader in our routes , 3)third,we provide the data to the page by useLoaderData() custoom hook
         with this loader , The React-Router will actually start fetching the data at the same time as it starts rendering the correct route...and this is som powerful and good thing ...and this is better than the use useEffect hook because in useEffect the components first rendered and then after components was already  rendered is when then  would start the fetch data.
#### I used redux-tooklit for UI state managment 
#### I used tailwindcss to styled all of the component 
