import React from "react";
import fuksifoormi from  "../fuksifoorumi.png"

class Banner extends React.Component {
    reloadPage () {
        window.location.reload()
    }
  render() {

    return (


          <div className="banner" >
            <img className="logo" src={fuksifoormi} onClick={() => this.reloadPage()}/>

              { /* src={"~lauriaus/projektij4/fuksifoorumi.png"} */
                  /* src={fuksifoorumi}*/}
            <form className={"haku"}>
              <input placeholder="Hae kysymyksiä"/>
            </form>
          </div>
    )}
}
export default Banner;

