import React from "react";
import fuksifoormi from  "../fuksifoorumi.png"

class Banner extends React.Component {

  render() {
    return (

          <div className="banner" >
            <img className="logo" src={fuksifoormi}/>

            <form className={"haku"}>
              <input placeholder="Hae kysymyksiä"/>
            </form>
          </div>
    )}
}
export default Banner;