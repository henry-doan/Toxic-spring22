import Carousel from 'react-bootstrap/Carousel'
import tNot from '../../images/axel.jpg';
import alex from '../../images/alex.png';
import Leo from '../../images/Leo.jpg';
import Twitter from '../../images/Twitter.svg';
import Be from '../../images/Be.svg';
import instagram from '../../images/instagram.svg';
import Spencer from '../../images/Spencer.png';
import Preston from '../../images/Preston.png';
const Teams = () => (
  <>
  {/* <h1>Team</h1> */}
  <Carousel>
  <Carousel.Item>
      
    <img style={{width: '700px', borderRadius: '20px', marginTop: '30px'}} src={tNot} 
      // className="d-block w-200"
      alt="First slide"
    />
    
   
    <h4 style={{color: 'white', textAlign: 'center', paddingTop:'20px'}}>Axel Segovia</h4>
    <p style={{color: 'white', textAlign: 'center'}} >Has 3 pets, married loves league of legends and plays some soccer. Looking to become a back-end web developer.</p>
    <img style={{width: '80px', paddingTop: '20px'}} src={Twitter, instagram, Be}  />
  
  </Carousel.Item>
  <Carousel.Item>
  <img style={{width: '600px', borderRadius: '20px', marginTop: '30px'}} src={alex} 
      // className="d-block w-200"
      alt="Second slide"
    />
    

    <h3 style={{color: 'white', textAlign: 'center', paddingTop:'20px'}}>Alex Briceno</h3>
    <p style={{color: 'white', textAlign: 'center'}} >By nature, I am energetic, hardworking, reliable, and eager to accept the challenges that come with supporting a virtualized environment.</p>
    <img style={{width: '80px', paddingTop: '20px'}} src={Twitter, instagram, Be}  />
  
  </Carousel.Item>
  <Carousel.Item>

  <img style={{width: '450px', borderRadius: '20px', marginTop: '30px'}} src={Leo} 
      className="d-block w-200"
      alt="Third slide"
    />
  
  
    <h3 style={{color: 'white', textAlign: 'center', paddingTop:'20px'}}>Leonardo Pallone</h3>
    <p style={{color: 'white', textAlign: 'center'}} >I believe in myself and live up to my standards, I treat others the way I want to be treated. I understand how precious time and I always look at the bright-side of things by nature. I ride bikes in the mountains and I love anything outdoors.</p>
    <img style={{width: '80px', paddingTop: '20px'}} src={Twitter, instagram, Be}  />
    
 
  </Carousel.Item>
  <Carousel.Item>

  <img style={{width: '450px', borderRadius: '20px', marginTop: '30px'}} src={Spencer} 
      className="d-block w-200"
      alt="Third slide"
    />
  
  
    <h3 style={{color: 'white', textAlign: 'center', paddingTop:'20px'}}>Spencer Savage</h3>
    <p style={{color: 'white', textAlign: 'center'}} >n/a</p>
    <img style={{width: '80px', paddingTop: '20px'}} src={Twitter, instagram, Be}  />
    
 
  </Carousel.Item>
  <Carousel.Item>

  <img style={{width: '450px', borderRadius: '20px', marginTop: '30px'}} src={Preston} 
      className="d-block w-200"
      alt="Third slide"
    />
  
  
    <h3 style={{color: 'white', textAlign: 'center', paddingTop:'20px'}}>Preston </h3>
    <p style={{color: 'white', textAlign: 'center'}} >n/a</p>
    <img style={{width: '80px', paddingTop: '20px'}} src={Twitter, instagram, Be}  />
    
 
  </Carousel.Item>
  

</Carousel>
  
  

  
  
  
  
  
  </>
)

export default Teams