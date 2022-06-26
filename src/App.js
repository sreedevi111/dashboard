import React from 'react'
import ExploreCourse from './components/ExploreCourse'
import FeaturedCourse from './components/FeaturedCourse'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import "./App.css"
// import LoginInput from './components/LoginInput';


function App() {
  return (
    <div className='app'>
      <Header />
      <ExploreCourse />
      <FeaturedCourse />
      <Signup />
      <Categories />
      <Testimonials />
      <Footer />
      {/* <LoginInput /> */}
    </div>
  )
}

export default App