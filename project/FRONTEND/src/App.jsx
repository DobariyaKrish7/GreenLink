import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { Menu, X, Leaf, ShoppingCart, Phone, Mail, MapPin, Globe, Users, Recycle, Award } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Marketplace from './pages/Marketplace';
import BuyMaterials from './pages/BuyMaterials';
import SellMaterial from './pages/SellMaterial';
import Cart from './pages/Cart';
import AuthWrapper from './components/AuthWrapper';
import Logout from './pages/Logout';
import Sidebar from './pages/sidebar';
import Homepage from './pages/Homepage';
import MarqueeSection from './components/Homepage/MarqueeSection';
import FooterSection from './components/Homepage/FooterSection';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    //  Load cart from localStorage when component mounts
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [listedMaterials, setListedMaterials] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [availableMaterials, setAvailableMaterials] = useState({

    raw: [

    ],

    sustainable: [

    ]
  });

  const navigate = useNavigate();
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    window.addEventListener('storage', checkAuthStatus);
    checkAuthStatus(); // Check on mount

    return () => window.removeEventListener('storage', checkAuthStatus);
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  //  Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  // Add logout handler if not already present
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate('/login');
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    setAvailableMaterials(prev => ({
      raw: prev.raw.map(material =>
        material.id === item.id
          ? { ...material, quantity: material.quantity - 1 }
          : material
      ),
      sustainable: prev.sustainable.map(material =>
        material.id === item.id
          ? { ...material, quantity: material.quantity - 1 }
          : material
      )
    }));

    setListedMaterials(prev =>
      prev.map(material =>
        material.id === item.id
          ? { ...material, quantity: material.quantity - 1 }
          : material
      )
    );

    if (existingItem) {
      //  Keep maxQuantity unchanged while updating quantity
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      //  Store maxQuantity when adding new items
      setCartItems([...cartItems, { ...item, quantity: 1, maxQuantity: item.maxQuantity }]);
    }
  };



  const removeFromCart = (itemId) => {
    const removedItem = cartItems.find(item => item.id === itemId);
    if (removedItem) {
      setAvailableMaterials(prev => ({
        raw: prev.raw.map(material =>
          material.id === itemId
            ? { ...material, quantity: material.quantity + removedItem.quantity }
            : material
        ),
        sustainable: prev.sustainable.map(material =>
          material.id === itemId
            ? { ...material, quantity: material.quantity + removedItem.quantity }
            : material
        )
      }));
    }
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) => {
      const currentItem = prevCartItems.find(item => item.id === itemId);
      if (!currentItem) return prevCartItems; // If item doesn't exist, return previous state

      //  Ensure quantity stays between 1 and maxQuantity
      newQuantity = Math.max(1, Math.min(newQuantity, currentItem.maxQuantity));

      const quantityDifference = currentItem.quantity - newQuantity;

      //  Update available materials stock
      setAvailableMaterials(prev => ({
        raw: prev.raw.map(material =>
          material.id === itemId
            ? { ...material, quantity: material.quantity + quantityDifference }
            : material
        ),
        sustainable: prev.sustainable.map(material =>
          material.id === itemId
            ? { ...material, quantity: material.quantity + quantityDifference }
            : material
        )
      }));

      //  Update cartItems correctly using `prevCartItems`
      const updatedCart = prevCartItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );

      localStorage.setItem("cartItems", JSON.stringify(updatedCart)); //  Save to localStorage
      return updatedCart; //  Return new cart state
    });
  };



  const addListedMaterial = (material) => {
    setListedMaterials([...listedMaterials, material]);
  };


  const AboutPage = () => (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About GreenFuel Market</h1>
          <p className="text-xl text-gray-600">Building a sustainable future through circular economy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At GreenFuel Market, we're committed to accelerating the transition to a circular economy by creating the most efficient marketplace for sustainable materials.
            </p>
            <p className="text-lg text-gray-600">
              We believe that every material has value, and our platform makes it easier than ever to buy and sell recycled materials, reducing waste and environmental impact.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
              alt="Sustainable Materials"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-12 mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Tons Materials Traded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
              <div className="text-gray-600">Carbon Reduction</div>
            </div>
          </div>
        </div>

        <div>
          {/* <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              // {
              //   name: "Malay Virpariya",
              //   role: "CEO & Founder",
              //  // image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300"
              //  image: "/images/malay.jpg" 

              // },
              // {
              //   name: "Divy Vaghani",
              //   role: "Head of Operations",
              //   image: ""
              // },

            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
    };

    return (
      <div className="bg-gray-50 min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              We're here to help and answer any questions you might have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">Nutan Park Society, Nadiad, Gujarat, India</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+91 8141424177</p>
                      <p className="text-gray-600">+91 7567563355</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">mpcvirpariya@gmail.com</p>
                      <p className="text-gray-600">divyvaghani1610@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <nav className="bg-green-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <Leaf className="h-8 w-8 text-white" />
                <span className="ml-2 text-white text-xl font-bold">GreenFuel Market</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-green-200 px-3 py-2 text-sm font-medium">Home</Link>
              <Link to="/marketplace" className="text-white hover:text-green-200 px-3 py-2 text-sm font-medium">Marketplace</Link>
              <Link to="/about" className="text-white hover:text-green-200 px-3 py-2 text-sm font-medium">About</Link>
              <Link to="/contact" className="text-white hover:text-green-200 px-3 py-2 text-sm font-medium">Contact</Link>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  {/* Cart Button */}
                  <button
                    onClick={() => navigate('/cart')}
                    className="flex items-center text-white hover:text-green-200 relative"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {cartItems.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {cartItems.length}
                      </span>
                    )}
                  </button>
                  {/* Profile Icon (Opens Sidebar) */}
                  <button
                    className="text-white text-2xl"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <FaUser />
                  </button>

                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate('/login')}
                    className="bg-white text-green-600 hover:bg-green-50 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate('/signup')}
                    className="bg-green-500 text-white hover:bg-green-400 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-green-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-green-600 pb-4">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block text-white hover:bg-green-500 px-3 py-2 rounded-md text-base font-medium">
                  Home
                </Link>
                <Link to="/marketplace" className="block text-white hover:bg-green-500 px-3 py-2 rounded-md text-base font-medium">
                  Marketplace
                </Link>
                <Link to="/about" className="block text-white hover:bg-green-500 px-3 py-2 rounded-md text-base font-medium">
                  About
                </Link>
                <Link to="/contact" className="block text-white hover:bg-green-500 px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </Link>

                <button
                  onClick={() => navigate('/cart')}
                  className="flex items-center text-white hover:bg-green-500 px-3 py-2 rounded-md text-base font-medium w-full"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                  {cartItems.length > 0 && (
                    <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartItems.length}
                    </span>
                  )}
                </button>

                {isAuthenticated ? (
                  <div className="pt-4 space-y-2">
                    <button
                      onClick={() => setSidebarOpen(true)}
                      className="w-full flex items-center text-white hover:bg-green-500 px-3 py-2 rounded-md text-base font-medium"
                    >
                      <FaUser className="mr-2" />
                      Profile
                    </button>
                    <button
                      onClick={() => navigate('/logout')}
                      className="w-full bg-red-500 text-white hover:bg-red-400 px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 space-y-2">
                    <button
                      onClick={() => navigate('/login')}
                      className="w-full bg-white text-green-600 hover:bg-green-50 px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => navigate('/signup')}
                      className="w-full bg-green-500 text-white hover:bg-green-400 px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
      <MarqueeSection />
      {sidebarOpen && (
        <Sidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          handleLogout={handleLogout}
        />
      )}

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AuthWrapper><AboutPage /></AuthWrapper>} />
        <Route path="/contact" element={<AuthWrapper><ContactPage /></AuthWrapper>} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/marketplace" element={<AuthWrapper><Marketplace /></AuthWrapper>} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/marketplace/buy"
          element={
            <AuthWrapper>
              <BuyMaterials
                addToCart={addToCart}
                cartItems={cartItems}
                listedMaterials={listedMaterials}
                availableMaterials={availableMaterials}
              />
            </AuthWrapper>
          }
        />
        <Route
          path="/marketplace/sell"
          element={
            <AuthWrapper>
              <SellMaterial
                onListMaterial={addListedMaterial} />
            </AuthWrapper>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthWrapper>
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateCartItemQuantity}
                setCartItems={setCartItems} // ✅ Pass setCartItems
              />
            </AuthWrapper>
          }
        />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;

