import './ChildCards.css'

const ChildCards=()=>{
    return(
        <>
            <div class="cards-list">
                <h1 class="rpa-heading">AI + RPA is what we do</h1>
                <img class="images" src="./images/robot.png" alt="Info-Image"></img>
                <p class="description">Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</p>
                <a class="links" href="">
                    AI + RPA Automation
                    <span class="link-arrow">&rarr;</span>
                </a>
            </div>

            <div class="cards-list">
                <h1 class="rpa-heading">Make Bolder Choices</h1>
                <img class="images" src="./images/teams.png" alt="Info-Image"></img>
                <p class="description">Digital focused strategies to realize market-changing ideas</p>
                <a class="links" href="">
                    Build Better Apps
                    <span class="link-arrow">&rarr;</span>
                </a>
            </div>

            <div class="cards-list">
                <h1 class="rpa-heading">Innovate with Speed</h1>
                <img class="images" src="./images/office.png" alt="Info-Image"></img>
                <p class="description">Create higher quality software, deliver oncustomer expectations and business goals</p>
                <a class="links" href="">
                    DevOps
                    <span class="link-arrow">&rarr;</span>
                </a>
            </div>

            <div class="cards-list">
                <h1 class="rpa-heading">Embrace Cloud</h1>
                <img class="images" src="./images/phones.png" alt="Info-Image"></img>
                <p class="description">With Cloud-First accelerate innovation and optimize performance</p>
                <a class="links" href="">
                    Cloud Services
                    <span class="link-arrow">&rarr;</span>
                </a>
            </div>

            <button id="button">Get in touch</button>
            <hr color="black"></hr><br></br><br></br>
        </>
    );
}
export default ChildCards;