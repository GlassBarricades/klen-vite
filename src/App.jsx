import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LayoutPage from "./components/LayoutPage";
import { set, ref, remove } from "firebase/database";
import { db } from "./firebase";
import "./app.css";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/About-us";
import Service from "./pages/Service";
import Catalog from "./pages/Catalog";
import MetalWork from "./pages/Metalwork";
import Coloring from "./pages/Coloring";
import Price from "./pages/Price";
import Admin from "./pages/Admin";
import useFetchData from "./hooks/useFetchData";

const App = () => {
    const [products] = useFetchData(`/products/`)
		const [categories] = useFetchData(`/category/`)

    const createCategoriesNameArray = array => {
			const arr = array.map(item => {
				return item.name
			})
			return arr
		}

		const categoryPriceData = createCategoriesNameArray(categories)

		const openedHandler = () => {
			setOpened(false)
		}

  const writeToDatabase = (link, data, reset, close) => (e) => {
    e.preventDefault();
    set(ref(db, link), {
      ...data,
    });

    reset();
    close();
  };

  const handleDelete = (link) => {
    remove(ref(db, link));
  };

  const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<LayoutPage />}>
					<Route index element={<HomePage />} />
					<Route
						path='price'
						element={<Price data={products} category={categoryPriceData} />}
					/>
					<Route path='/contacts' element={<ContactPage />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/service' element={<Service />} />
					<Route path='/catalog/*' element={<Catalog />}>
						
					</Route>
					<Route path='/admin' element={<Admin />} />
					<Route path='/metalwork' element={<MetalWork />} />
					<Route path='/coloring' element={<Coloring />} />
				</Route>
			</>
		)
	)

  return (
      <RouterProvider router={router}></RouterProvider>
  );
};
export default App;
