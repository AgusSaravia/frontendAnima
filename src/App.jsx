import { useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateUserToken, logoutUser, setLoading } from './features/auth/authSlice';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import CTASection from './components/CTASection';
import { Card } from "./components/Card";
import { Categories } from "./components/Categories";
import Login from './pages/Login';
import Register from './pages/Register';

// Protected route component
const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, currentUser } = useSelector((state) => state.auth);
  // const dispatch = useDispatch(); // Dispatch will now be handled by App component for initial load

  // useEffect(() => {
  //   if (isLoading) { 
  //       dispatch(validateUserToken());
  //   }
  // }, [dispatch, isLoading]); 
  // Initial validation is now handled by the main App component.
  // This component will just reflect the loading state for UI purposes.

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

// Public route component (redirects to home if already logged in)
const PublicRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

// Layout component for authenticated routes
const AuthenticatedLayout = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <SearchBar />
    <Outlet />
  </div>
);

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    model: "C1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
    imageUrl: "/src/assets/c1.jpg",
    current: 15990,
    timeLeft: "5h 23m",
    bids: 5,
  },
  {
    id: 2,
    model: "C3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
    imageUrl: "/src/assets/c3.jpg",
    current: 18990,
    timeLeft: "4h 10m",
    bids: 8,
  },
  {
    id: 3,
    model: "C4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
    imageUrl: "/src/assets/c4.jpg",
    current: 21990,
    timeLeft: "3h 45m",
    bids: 12,
  },
  {
    id: 4,
    model: "C5",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
    imageUrl: "/src/assets/c5.jpg",
    current: 40990,
    timeLeft: "2h 30m",
    bids: 20,
  },
  {
    id: 5,
    model: "C3 Aircross",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
    imageUrl: "/src/assets/c3aircross.jpg",
    current: 23990,
    timeLeft: "2h 30m",
    bids: 20,
  },
];

// Categories data
const categories = [
  { name: "CARS", img: "/src/assets/categorias/cars.jpg" },
  { name: "ESTATE", img: "/src/assets/categorias/casa.jpg" },
  { name: "ALCOHOL", img: "/src/assets/categorias/alcohol.png" },
  { name: "MOTORCICLES", img: "/src/assets/categorias/motorcicle.jpg" },
  { name: "MUEBLES", img: "/src/assets/categorias/muebles.jpg" },
  { name: "COMPUTERS", img: "/src/assets/categorias/computadoras.jpg" },
  // { name: "TOOLS", img: "/src/assets/categorias/tools.jpg" },
];

// Home component
const Home = () => (
  <div className="flex-1">
    {/** Categories Section **/}
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Categorías</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category, index) => (
          <Categories key={index} name={category.name} img={category.img} />
        ))}
      </div>
    </section>

    {/** Featured Products Section **/}
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Los más elegidos hoy:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {featuredProducts.map((prod) => (
          <Card
            key={prod.id}
            model={prod.model}
            description={prod.description}
            imageUrl={prod.imageUrl}
            current={prod.current}
            timeLeft={prod.timeLeft}
            bids={prod.bids}
          />
        ))}
      </div>
    </section>

    {/** Call-to-Action Section **/}
    <CTASection />
  </div>
);

function App() {
  const dispatch = useDispatch();
  const { tokenExpiryTime, isAuthenticated, isLoading: isAuthLoading, currentUser } = useSelector((state) => state.auth);

  // Effect for initial token validation if isLoading is true from initial state
  useEffect(() => {
    // This handles the case where the app loads and no token was found (isLoading=true),
    // or if a token was found but getInitialAuthState decided it needs validation (though current getInitialAuthState sets isLoading=false if token is prima facie valid).
    // The main purpose is to resolve the initial isLoading=true state set by getInitialAuthState when no token is present.
    if (isAuthLoading && !currentUser && !localStorage.getItem('token')) { // Only run if loading and no user/token yet, to avoid re-validating if already done
      dispatch(validateUserToken());
    }
  }, [dispatch, isAuthLoading, currentUser]); // Dependencies ensure it runs if these critical states change

  useEffect(() => {
    let intervalId;
    if (isAuthenticated && tokenExpiryTime) {
      const checkExpiry = () => {
        if (tokenExpiryTime <= Date.now() + 10000) { // 10s buffer
          console.log('[App.jsx] Token expired, dispatching logout.');
          dispatch(logoutUser());
        } else {
          // For debugging: console.log('[App.jsx] Token still valid.');
        }
      };
      
      // Check immediately and then set interval
      checkExpiry(); 
      intervalId = setInterval(checkExpiry, 30 * 1000); // Check every 30 seconds
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAuthenticated, tokenExpiryTime, dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Public routes that redirect if logged in */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AuthenticatedLayout />}>
            <Route path="/" element={<Home />} />
            {/* Add more protected routes here */}
          </Route>
        </Route>
        
        {/* 404 route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
    // // <div className="w-full max-w-screen-xl mx-auto px-1 md:px-8 py-8">
    // //   <div className="w-full text-center pb-5 ">
    // //     <Search />
    // //   </div>
    // //   <span>
    // //     <h1 className="text-[#485C11] font-roboto text-5xl font-bold mb-3">
    // //       Los mas elegidos hoy:
    // //     </h1>
    // //   </span>
    // //   <div className="bg-[#485C11] p-5 py-8 rounded-2xl">
    // //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
    // //       {products.map((product, index) => (
    // //         <Card key={index} {...product} />
    // //       ))}
    // //     </div>
    // //   </div>
    // //   <Info />
    // //   <span>
    // //     <h1 className="mt-10 text-[#485C11] font-roboto text-5xl font-bold mb-3">
    // //       Categories
    // //     </h1>
    // //   </span>
    // //   <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full">
    // //     {categories.map((category, index) => (
    // //       <Categories key={index} {...category} />
    // //     ))}
    // //   </div>
    // // </div>
  );
}

export default App;
