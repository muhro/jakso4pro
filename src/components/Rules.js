import React from 'react'
import Button from 'react-bootstrap/Button';
import Rule from './Rule'
import Modal from 'react-bootstrap/Modal';




class Rules extends React.Component {

  constructor(props, context) {
    super(props, context)
      this.handleClick = this.handleClick.bind(this)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
      this.state = { visible: false }
    this.state = {
      roomName: '',
      show: false
    }

  }
    handleClick() {
        this.setState(prev => ({ visible: !prev.visible }))
    }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render () {
    return (
        <>
          <Button className="tausta" variant="primary" onClick={this.handleShow}>
            Ohjeet
          </Button>

          <Modal className="tyhja" show={this.state.show} onHide={this.handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>  Ohjeet</Modal.Title>
            </Modal.Header>
            <Modal.Body className="row">
                Ohjeet tarkoittavat sivustolla kiellettyä sisältöä.
                Laiton materiaali
                Tähän sisältyy lapsiporno ja lasten seksualisointi (myös selvästi lasta esittävät piirroshahmot jne.), eläinporno, tosielämässä tapahtuva väkivalta, eläinrääkkäys, laiton kaupankäynti ja muu laiton materiaali.
                Asiattomuudet tai muiden keskustelijoiden haukkuminen
                Tämä sisältää myös runsaan kiroilun.
                Roskapostitus
                Roskapostitus tarkoittaa toistuvaa esimerkiksi sisällöttömien, samansisältöisten tai aiheeseen liittymättömien viestien tai kysymysten lähettämistä.
                Mainostaminen
                Et saa mainostaa Fuksifoorumin keskusteluissa ilman ylläpidon kirjallista suostumusta. Tämä sisältää myös referrer-linkit, joiden klikkaamisesta hyötyy joku muu henkilö, kuin klikkaaja.
                Haitalliset tiedostot tai linkit
                Kaikkien haitallisten tiedostojen ja linkkien lähettäminen on kielletty. Tähän sisältyy esimerkiksi haittaohjelmat, virukset, selauslaitteelle haittaa aiheuttavat tiedostot tai -sivustot tai linkittäminen näihin. Tähän sisältyy myös linkinlyhentimet.
                Alastomuus tai pornografia
                Alastomuudeksi lasketaan esimerkiksi intiimialueiden näkyminen ja lähikuvat niukasti peitetyistä intiimialueista.

                Moderaattorin esittäminen sivustolla on ehdottomasti kiellettyä.
                Lähettämällä tiedoston Fuksifoorumille, luovutat sen vapaaseen ei-kaupalliseen jakeluun. Kaupallisen käytön tekijänoikeudet säilyvät yhä sinulla.
                Sääntöjä voidaan ilman erillistä ilmoitusta lisätä, poistaa tai muuttaa.
                Ilmoitamme kaikista ilmoitusvelvollisuuden alaisista lakirikkeistä viranomaisille.

                Hyväksyt nämä ehdot käyttämällä tätä sivustoa.

            </Modal.Body>

          </Modal>
        </>
    )
  }
}


export default Rules;