import './App.css'

function App() {
  return (
    <>
      <header>
        <div className='container-hero'>
          <div className='container hero'>

            <div className='customer-support'>
              <i className="fa-solid fa-headset" ></i>
              <div className="content-customer-support">
                <span className="text">Soporte al liente</span>
                <span className="number">123-456-789</span>
              </div>
            </div>


            <div className="container-logo">
              <i className="fa-solid fa-mug-hot"></i>
              <h1 className='logo'><a href="/"></a></h1>
            </div>

            <div className="container-user">
              <i className="fa-solid fa-user"></i>
              <i className="fa-solid fa-basket-shopping"></i>
              <div className="content-shopping-cart">
                <span className="text"></span>
                <span className="number"></span>
              </div>
            </div>

          </div>
        </div>
        <div className="container-navbar">
          <nav className="navbar container">
            <ul className="menu">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Blusas</a></li>
              <li><a href="#">Pantalones</a></li>
              <li><a href="#">Sueter</a></li>
              <li><a href="#">Zapatod</a></li>
              <li><a href="#">Sombreros</a></li>
            </ul>
            <form action="" className='search-form'>
              <input type="search" placeholder='Buscar'/>
              <button className="search"></button>
            <i className="f-solid fa-magnifying-glass"></i>
            </form>

          </nav>

        </div>
      </header>


    </>
  )
}

export default App
