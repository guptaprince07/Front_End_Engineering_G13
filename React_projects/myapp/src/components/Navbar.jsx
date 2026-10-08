import React, { useState } from 'react' // 1. Import useState
import './Navbar.css'
import signin from './Login' // 2. Import your Signin component (ensure the file name/path matches)

function Navbar() {
  // 3. Add state to track if the sign-in page is active
  const [isSigningIn, setIsSigningIn] = useState(false);

  return (
    <div className="container">
        <div className="box"> 
          <nav>
            <span onClick={() => setIsSigningIn(false)} style={{ cursor: 'pointer' }}>home</span>
            <span onClick={() => setIsSigningIn(false)} style={{ cursor: 'pointer' }}>about</span>
            
            {/* 4. When clicked, change state to true */}
            <span onClick={() => setIsSigningIn(true)} style={{ cursor: 'pointer' }}>sign in</span>
            
            <span>sign out</span>
            <span>Add</span>
          </nav> 
        </div>
        
        <div className="boxe">Sidebar</div>
        
        {/* 5. Dynamically switch what displays inside .boxer */}
        <div className="boxer">
            {isSigningIn ? (
                <Signin />
            ) : (
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quod porro ipsa hic debitis quasi reiciendis dolore odio repellendus dolorum sequi vel, natus, quae impedit architecto quia consequatur? Magnam, magni. Eligendi a vel explicabo hic unde repellendus! Quod deserunt fuga possimus neque inventore, iste nam reprehenderit quas iusto corporis voluptas eligendi animi incidunt voluptates tempora debitis totam dolore aut in illum ratione ullam expedita sed? Delectus quibusdam magni ipsa quas a eveniet optio quaerat ducimus excepturi, pariatur iure molestias, at sit soluta. Recusandae fuga fugiat repellendus, nam voluptatibus aliquam placeat eius veniam distinctio vel ea, repudiandae, qui soluta sapiente nostrum! Qui ea, suscipit ex hic sed quod reiciendis nesciunt dolore obcaecati dolorem quas, aperiam dolor blanditiis id ab, aspernatur earum dolores eius eaque. Iusto voluptatem, harum dicta eum iste nam similique esse, officia sit eos, perferendis vero laborum illum aspernatur. Voluptatibus, labore nesciunt. Nostrum harum aliquam labore, voluptatibus qui, ipsum facilis cupiditate ducimus expedita, asperiores quos dolorum quisquam reprehenderit ipsa! Nam, deserunt ipsam et eaque deleniti atque fugiat iure pariatur qui, impedit commodi dicta labore nostrum voluptate? Distinctio illo reiciendis asperiores quaerat obcaecati, tempora aspernatur qui sequi eos praesentium sint provident nostrum rerum iure? Pariatur accusantium maiores ullam! Reprehenderit libero, voluptas minima voluptatibus non similique nulla aut a quidem rerum explicabo, repellendus aliquid deserunt ea possimus consequatur dolor aliquam praesentium inventore repudiandae! Deserunt possimus modi laboriosam cumque rerum ducimus exercitationem, nulla distinctio velit impedit! Fuga deserunt vero, quo accusantium vel velit. Beatae vel fuga odit perspiciatis?</p>
            )}
        </div>
    </div>
  )
}

export default Navbar