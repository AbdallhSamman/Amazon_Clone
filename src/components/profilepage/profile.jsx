import React from 'react'
import '../profilepage/profile.css'
import { useStateValue } from '../../StateProvider'
function Profile() {
  const [{ user }] = useStateValue()
  return (
    <div>
      <section className="profile_section">
        <div className="right">
          <h2 className="profile_h2">Your Order's</h2>
          <section className="order-card">
            <div className="card-header">
              <span>Order Placed</span>
              <span>22/2/2022</span>
            </div>
            <div className="card-body">
              <div className="order-details">
                <div className="order-method">
                  <h1>Pre-order</h1>
                  <h3>
                    order within : <strong>5days</strong>{' '}
                  </h3>
                </div>
                <div className="order-detaile">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASDxANDxIQEA8PDw8PEA8OEhAQDw8PFRIWFhUSFRUYHSggGBolGxUVITEhJSktLi4uFx8zODMsNygtLisBCgoKDg0OFQ8PGisfFR03MisrKy8rKy0uKzgwKzErLSstLSsrKystKy0rLS03LS0tLi0tLS0rKys3LS0tKy0rLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABOEAABAgMCCAUPCQcEAwAAAAAAAQIDBBEFEgYTITFRVJTSBxZBcZEUFRcyNVJhdJKTobG00eIiIzM2YoGEs8IIQlNygsHwJrLh8SRDZP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAIhEBAAICAAYDAQAAAAAAAAAAAAERAhIDEyExUWEUMkEE/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACF8Llsx5SyokaWesOK+LBgpEb2zGud8pW6FolK+E49ZiW/MQmzEGam3Q33rrlnHNVaOVq5FfXOinUeHfuOvjUv61NFwcdy5fnj/AJzzXhYRlNSz4mU4xcIr1twj1ia274x1uwj1ia274zp55U9Hx8fbHn5OZ9bsI9Ymtu+Mdb8ItYmtu+M6XQUHx8fac/JzTrfhFrE1t3xlet+EWsTW2/GdJoLpfj4e05+Tm3UGEWsTW2/GOt+EWsTW2/GdKRhW6T4+Htefm5r1vwi1ia274x1vwi1ia234zpZSg+Ph7Ofk5r1uwi1ia274x1uwi1ia274zpiIVoPj4+zn5OZdbcI9Ymtu+MdbMI9Ymtu+M6dQE+Pj7XnZOY9a8JNYmtu+Mp1rwk1ia274zp4oPj4nOycv62YSaxNbd8Y614SaxNbd8Z1G6Lo5GJzsnOuD3CK04VtwbPmpiNFSI98GNCjRVjNRcU56K1VVaKlEzaTvx88WP9bofjjvZFPoc8mUVMw9MTcQAAigAAAAAAAAAAAAAAAAAA51w8dx/xcv63Gq4MoKLZUsqryx/z3m14ee4/wCLl/W41HBn3KlueP8AnvNuD9mXF+qVYhukYhNJ5VClD1dfLz3HgdBTSW1hlzKKFtJW7qCiFy6UuFtHgpQu3BcFpS1dF0vXCtwWUs0F0v3RdJa0s3St0vXRcFlLN0rQu3CqMFrS1QrdLqMKowlrTk1k/W9njjvZFPoc+ebM+uDPHHeyKfQx4cu8vZj2gAByoAAAAAAAAAAAAAAAAAAOc8PXcf8AFy/6jX8FsOtkSy+GY/PiGfw+dx/xcv8AqLXBNDrY0qvhmPaIhpw5qXGcXCQ4oYkzsSMSb7stGDihijPxJTFDc0YOLGLM3FDFDc0YWLGLM3FjFjc0YeLGLMzFjFjc0YmLGLMvFlcWTY0YmLGLMy4Lg2XRiYsqkMysWMWTY1WEYekYheuC6S3VOLSSf6yb46vsin0IfPkp9c08dX2RT6DMJ7tYAAQAAAAAAAAAAAAAAAAAABzfh97jp45L/qIJgpwhOlLMgScGAj4sPHViRXfNoror3JRrcq5HaUJ3w+9x08cl/wBRF+D+wJSPZcu+NAhve7HIr/lNiLSM9EytXQidA3jDrKxjOXSEencNLQju+dmHsYq9pA+Zank5V+9VM+BCvtvI5yqvKrlVek3c9gFKP+hiRIL05LyRWdDqL6TXQsGpyAvyLsdiLlRi3Iic7Hf2VTXHj4T+0zy4Ocfi1CtKZgLWHFitpyI913oXIb2zOEKM2jY7GRU75Pm3+jIvQa6NLKqUiMdDdoe1W+sj9oSjmqa9JZ9YdgsvCqTj0RImLcv7sajeh2b0m8RtcqZU0pmU+dmTKtNxZeFkxA+jiOane1qzyVyEnHwsZeXcbguHPrL4TEyJMQ2u+1DW6vQuT1Eqs/C+Ri0pFSGq8kVLvpzek4mJh3ExLb3BcL0J7XJeY5r2r+8xUcnSh6ukt1THuFbhfui4Syli4LhfunmI5rUq5UamlyogspauC4Y0a2Jdud6L/KiqYsTCeVTIrndB1UubhtLguGBCwhlXZMZSvfIqGdAnIL+0iQ3eBrmqvQSbWKlxGX+uieOr7IfQR8/Qvrr+NX2Q+gTJ0AAAAAAAAAAAAAAAAAAAAAObcP3cdPHJf9RouDWau2XLIrWuRFj5Vz/TPN7w/wDcdPHJf1PIvweS9bMgP0rGrTk+eeZcX6teD9kxdPN/hpyZnKidBTrhD5WOSufLUwlplSuXoPD28n9kVDzvVUNl1XBXJVyc6IqKhjzNmS0VKLdXwp8lUqa58NydqjV5lopaWPpRWr/UhYymOyTjE92JaGAbXVWDFVq6Hojk6UoRqfwNnYdVRjYqJ/CdVehaL0Ew6uVErecic9aIG20tMj2uRc2Zam+P9Gce2OX8+E+nOHWZMotFgxkXwscnrQvwpGaTNDieon/X9P3mtdpoi1LkG1WPWjYcWtf4avT0obR/T5hjl/N4lFLOfPQ1qy+xdKPRq+hSUSGFdospeex6aIl13pTL6TaS8Oq5YUKn24LUX0UMtZSXXPBhLzMahtGW0dmE46zVvMrh26nzsKGq6Yb1b6FRTzMYfd7DY3+Zyu9VCrrJlFzwWJ/Krm+pTEjYNSjsyRGL9mI5f91RWPgvLyxZvDaK7JjKeBiI37q5zUx7fVyqqqqrpctTOmsD25VhxnV0P96GnmsG5hnfKiZlbRU9B3FOJue4+11VM/gzmN1eun1GNEs+ImdVr7jHWA/NVfQW0pm9VL/2eFml75UXwLREMDEu/wARCisfmylsp4wKeq4SyrlVVVZl2Vcqr/47j6ZPmHAP6xylc/VDvyHH08eSe8vRHYABFAAAAAAAAAAAAAAAAAABzXh/7jp45L+p5oeDWbpZUsy4q0WPlRXIn0715FN9+0B3HTxyX9TyFYApMrIQLiMxaLGu1cqL9K+tUppqccTGZjo04UxE9XQlma5MiZeVVWvpLT4nhbz0VTROk5heWE3y3GQyRiKnyovksRPWqmMcLLw35mPlnPRuemXQlUqYMaE563WfKy0VFqitReVHIZUGQhplWrl0uVV9Bnw1REomTmO44E/qTxY/GPDsOBncjnr9tyqnQZcOzoCJRGN6CqPPaON4xiPxjOUz+vTJZidq1qcyIh6WHzHi+VSIVzMPLoa6C26Gpfxp5WKh1cudYWFYpS6peWIgxhdk0haSp6RVLl8XxsmjHiwGO7ZqLzpl6TGiWPLuzw0+5VQ2N4reLsateyxpdP8A1ovOqqZUKSgt7WHDTma2pfRUK1QbJq5RZSf6wYia4ubxVT6LPnSy/rizxxfZlPosyl2AAgAAAAAAAAAAAAAAAAAADmv7QHcdvjkv6nkZ4OslmQOeN+c8kv7QHcdvjsv6nnFrJwym5aC2XhYnFsvXb8NXO+U5XLVb2lVLE0O0Iq/cVRTkHZFn9MDzS7w7I0/pl/NLvHWy9HYb56R5xxOEaf0y/ml3ivZHn9Mv5pd4mxbsqRD1jDjHZHtDTL+aXeHZHtDTL+aXeFrbtGNKLGOL9kef0wPNLvDsjz+mB5pd4XBbsqxSixDjfZGn9MDzS7xTsiz+mB5pd4twjsmNGOON9kWf0wPNLvDsiz+mB5pd4bQjsmPK48412RJ/TA80u8U7Ic/pgeaXeG0Ds/VBXqg4v2Q5/TA82u8OyHP6YHml3i7QO09UFeqDivZDn9MDzS7x6ThDn9MDzS7w2hOreWMtcLoa/wD2L7Mp9HHy5wfTz4+EElMRKYyLMq511KNriXJkT7kPqM4lQAEAAAAAAAAAAAAAAAKKoFS3MR2sar3qjWpnVTDtO02QW1cuVe1amdf+PCRCftB8V1565E7VqZm/5pLQxcPpls7BxD2IsFr2vRrs6uSqI5elchz52C0oiVWE2vIiVqqk2nVqhrkYnKiLz0CI23BSUupehMvctFd7zw3BaTypiGrXMqOd8mmeuXKSpITNDehCqQWd63oQCKcVZPkgtdVMlHORU8OXOVdgpJotMSi50uq5yLWmTKStILO9b0IesUzPRvQgES4pyaUVYKeFFVyenkPLcE5SlXQUTLpdlzZqErjsaiJRqKtU5EWnKeP6U8lPcBF+KUrl+ZRErkWrlydIXBOVrkgtu8mVyqnPWhKf6U8lPcKfZTyU9wEVdgnK1yQW0yIqVdXNlzlH4KSuREgt7XLVXZVrnrycxLKJ3qeSnuF1O9TyU9wETfgpK5KQURctaq5a6M2YouC0pT6FqOz1VXKipy0T+5Lbqd6nkp7hcTvU8lPcBEeK0rRawUReR1XUpzaVDcFpXL8wi8iKiuREXlVUXkJeyGirlankpkLqy7NDehAIU3BeVy/MtclFzK5MvIvhKNwXla/QtVOVEc5F6cpNup2aG9CFOp2d63oQCFpgvK5sU2vO73jirLqtEhtTQmVSZ9TM0N6EPKy7dDehAI9g5YcOXmoUxCajYkJ15jqZloqZvvU7ZY1ttjIjXUZFp2vI7wt9xziWhpeqbaGuZUzpmVBQ6OCOWRbuaHGXwJE0/wA3vJE11SKqAAAAAAAAAAAAAHlyHoARu3rEnIz2PgTEKEjEclHwViVrTlvJoNbxatTXZbZl3ibACE8WbU12W2Zd4pxZtTXZbZl3ibgCEcWbU12W2Zd4cWbU12W2Z28TcAQjixamuy2zO3hxZtTXZbZnb5NwBCOLFqa7LbM7fHFi1Ndl9mdvk3AEI4sWprsvszt8cWLU12X2Z2+TcAQjixamuy+zu3xxYtTXZfZ3b5NwBCOLFqa7L7M7fHFi1Ndl9mdvk3AEI4sWprsvszt8cWLU12X2Z2+TcAQfixamuy+zO3xxYtTXZfZnb5OALEH4sWprstszt8cWLU12W2Z2+TgAQfixamuy2zO3yvFm1Ndltmdvk3AEITBe01yOnZdWrSqJLLWldN8mMvDcjUR6orqZVal1F+4vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z"
                    className="order-img"
                  />
                  <div className="product-name">
                    <span>
                      <strong>product name: </strong>{' '}
                    </span>
                    <span className="product-price">price: $500</span>
                    <span className="product-decs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam, minus esse. Perspiciatis ex quibusdam ullam ducimus
                      quod, eveniet modi minus, blanditiis quam doloribus veniam
                      nemo officia adipisci voluptatem. Maiores, nesciunt.
                    </span>
                  </div>

                  <button className="cansel-order">cancel Order</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="left">
          <h2 className="profile_h2" style={{ textAlign: 'center' }}>
            User Profile
          </h2>

          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              alt="John"
              style={{ width: '50%' }}
            />
            <h1>{user?.email}</h1>
            <p className="title">{user?.phone}</p>
            <p>Harvard University</p>
            <div style={{ margin: '24px 0' }}></div>
            <p>
              <button className="change_info">Contact</button>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Profile
