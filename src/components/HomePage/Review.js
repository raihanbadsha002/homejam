import React from 'react';
import R1 from '../../images/R1.png';
import R2 from '../../images/R2.png';
import R3 from '../../images/R3.png';
import F1 from '../../images/united-kingdom.png';
import F2 from '../../images/united-states.png';
import F3 from '../../images/germany.png';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import ArrowLeftAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';


const Review = () => {
    const reviewsData=[
        { id:1,
          image: R1,
          label:"Palo Alto, CA",
          name:"Hellen Jummy",
          flag: F1
      },
        { id:2,
          image: R2,
          label:"Palo Alto, CA",
          name:"Isaac Oluwatemilorun",
          flag: F2
      },
        { id:3,
          image: R3,
          label:"Palo Alto, CA",
          name:"Hellen Jummy",
          flag: F3
      }
  ]
    return (
        <div className="shows__container">
        <div className="container">
         <div className="py-5">
          <div className="d-flex justify-content-between mb-5">
              <h3 className="text-white after__border" style={{fontFamily: "'Libre Baskerville', serif"}}>Reviews</h3>
              <button className="btn text-white-50">1/12 <ArrowRightAltOutlinedIcon/><ArrowLeftAltOutlinedIcon/></button>
          </div>
          <div className="row">
              {
                reviewsData.map(review => <ReviewInfo infoReview={review} key={review.id}/>) 
              }
          </div>
            
         </div>
        </div>
        </div>
    );
};

const ReviewInfo = (props) => {
    const {image, label, name, flag} = props.infoReview;
  
     return (
     <div className="col-md-4">
        <div className="mx-4 mb-md-0 mb-5">
        <div className="border-warning p-3" style={{border:"1px solid", padding:"5px", borderRadius: "15px", boxShadow: "11px -11px 0px 0px #36baba", cursor: "pointer"}}>
         <div className="d-flex">
            <img src={image} alt="" className="img-fluid" /> 
            <div className="ml-4">
                <span className="text-white">{name}</span> <br/>
                <span className="text-warning"><img src={flag} style={{width: "16%"}} alt="" className="img-fluid mr-3" />{label}</span>
            </div>
         </div>  
         <p className="text-white-50 mt-3" style={{fontSize:".9rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. </p> 
      </div>
      </div>
      </div>
         
     )
  };

export default Review;