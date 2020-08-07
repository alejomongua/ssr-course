import React from 'react'

function Home() {
  return (
    <div>
      <div>Hello cruel world</div>
      <button onClick={() => alert("You rebel!")}>Do not press me</button>
    </div>
  )
}

Home.propTypes = {

}

export default Home

