import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import Contact from  '../Contact/Contact';
import './Home.css'

const Home = () => {
    return (
     
<div> 
<div class = "firstmain">
<Carousel>
<Carousel.Item interval={1000}>
      <div class="row"> 
<div class="col-lg-6 slider-text">
<h2 class="texts"> Quran says about Kaaba</h2>
<h4 class="textsone">In it are clear signs and the standing-place of Abraham. Whoever enters it should be safe. Pilgrimage to this House is an obligation by Allah upon whoever is able among the people.1 And whoever disbelieves, then surely Allah is not in need of ˹any of His˺ creation.</h4>
<h5 class="sura" >Surah Al Imran, 97.</h5>

</div>
<div class="col-lg-6 slider-image">
  <img src="https://as1.ftcdn.net/v2/jpg/02/30/10/92/1000_F_230109278_7nLwvci9VgoWlrxGWVkd8XwxWElkowbl.jpg" class="d-block w-100" alt="..."  weidth="700"
          height="600"/>
 
</div>
</div>
</Carousel.Item>
      <Carousel.Item interval={1000}>
      <div class="row"> 
<div class="col-lg-6 slider-text">
<h2 class="texts"> Masjudul Haram</h2>
<h3 class="textstwo">The Kaaba also spelled Ka'bah or Kabah, is a building at the center of Islam's most important mosque, the Masjid al-Haram in Mecca, Saudi Arabia. It is the most sacred site in Islam.It is considered by Muslims to be the Bayt Allah  and is the qibla for Muslims around the world when performing salah. The current structure was built after the original building was damaged during the siege of Mecca in 683.</h3>
</div>
<div class="col-lg-6 slider-image">
  <img src="https://cdn.dhakapost.com/media/imgAll/BG/2022March/itikaf-masjid-al-haram-20220324154910.jpg" class="d-block w-100" alt="..." weidth="700"
          height="600"/>    
</div>
</div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div class="row"> 
<div class="col-lg-6 slider-text">
<h2 class="texts">Al-Masjid an-Nabawi</h2>
<h3 class="textsthree">Al-Masjid an-Nabawi known in English as the Prophet's Mosque, is a mosque built by the Islamic prophet Muhammad in the city of Medina in the Al Madinah Province of Saudi Arabia. It was the second mosque built by Muhammad in Medina, after Quba Mosque, and is the second largest mosque and second holiest site in Islam, both titles ranking after the Masjid al-Haram in Mecca. The mosque is located at the heart of Medina and is a major pilgrimage site that falls under the purview of the Custodian of the Two Holy Mosques.

</h3>
</div>
<div class="col-lg-6 slider-image">
  <img src="https://i.ytimg.com/vi/je4v3PUptgA/maxresdefault.jpg" class="d-block w-100" alt="..."  weidth="700"
          height="600"/>  
</div>
</div>
</Carousel.Item>
<Carousel.Item interval={1000}>
      <div class="row"> 
<div class="col-lg-6 slider-text">
<h2 class="texts">What is Hajj Mabroor?</h2>
<h3 class="textsfour"> Sayyiduna Khuwajah Hasan Basri رَحْمَةُ اللّٰەِ عَلَيْه has stated: Hajj Maqbool is the one after which a Haji becomes uninterested in Dunya, and interested in the matters of the Hereafter. (Mirat-ul-Manajih, vol. 5, pp. 441; Fath-ul-Baari, vol. 4, pp. 329, Taht-al-Hadees: 1521)
<br></br> <br></br> <br></br>
      Hajj Mabroor is: Perfectly fulfilling those commandments (Arkaan, conditions, Wajib acts, etc.) of Hajj which a person has been commanded to fulfil.
</h3>
</div>
<div class="col-lg-6 slider-image">
  <img src="https://as1.ftcdn.net/v2/jpg/02/98/81/12/1000_F_298811255_MHROBbKsgQSqgWPlzPgzcHxTYdKQOvca.jpg" class="d-block w-100" alt="..." weidth="700"
          height="600"/>   
</div>
</div>
</Carousel.Item>
      </Carousel>

</div>




<div> 
<h1 class="servicetexts"> Our Services</h1>
<Services/> 
</div>






<div>
      <Contact/>
</div>










<div class="footermain">
      <h1 class="footerone">keep up to date</h1>
      <h2 class="footertwo">Thanks to you for visiting my erbsite</h2>
      <h3 class="footethree"> Copyright @ Helal Faruk Monna ,C201132 . All Rights are Reserved.
</h3>
</div>




</div>
    );
};

export default Home;


   
