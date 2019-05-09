import React from "react";
import fuksifoorumi from  "../fuksifoorumi.png"

class Banner extends React.Component {

  render() {

    return (


          <div className="banner" >
            <img className="logo" src={fuksifoorumi} alt={fuksifoorumi}/>
              { /* src={"~lauriaus/projektij4/fuksifoorumi.png"} */
                /* src={fuksifoorumi}*/}
              <form className={"haku"}>
              <input placeholder="Hae kysymyksiä"/>
            </form>
          </div>
    )}
}
export default Banner;