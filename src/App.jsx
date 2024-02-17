import React from 'react';
import Navigation from './components/Navbar';
import CustomTabPanel from './components/tabs'
import Categories from './components/cards';
import category from './components/categoty';
import Footer from './components/footer';

function App(){
    return(
    <div>
        <Navigation />
        <CustomTabPanel />
        <div className="category-container">
            {category.map(noteItem => (
                <Categories
                    key = {noteItem.key}
                    image = {noteItem.img}
                    title = {noteItem.title}
                    content = {noteItem.content}
                />
            ))}
        </div>
        <Footer />
    </div>
    )
}

export default App;