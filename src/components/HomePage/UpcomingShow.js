import React from 'react';
import M1 from '../../images/M1.png';
import M2 from '../../images/M2.png';
import M3 from '../../images/M3.png';
import M4 from '../../images/M4.png';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';

const UpcomingShow = () => {
    const showsData=[
        { id:1,
          image: M1,
          label:"Folk",
          name:"Benny Dayal",
      },
        { id:2,
          image: M2,
          label:"Bollywood",
          name:"Vijay Yesudas",
      },
        { id:3,
          image: M3,
          label:"Folk",
          name:"Andrea Jeremiah",
      },
        { id:4,
          image: M4,
          label:"Folk",
          name:"Shilpa Rao",
      }
  ]
    return (
        <div className="shows__container">
        <div className="container">
         <div className="py-5">
          <div className="d-flex justify-content-between mb-5">
              <h3 className="text-white after__border" style={{fontFamily: "'Libre Baskerville', serif"}}>Upcoming Shows</h3>
              <button className="btn text-warning">View all</button>
          </div>
          <div className="row">
              {
                showsData.map(info => <ActorData info={info} key={info.id}/>) 
              }
          </div>
            
         </div>
        </div>
        </div>
    );
};

const ActorData = (props) => {
    const {image, label, name} = props.info;
  
     return (
     <div className="col-md-3">
        <div className="mx-4 mb-md-0 mb-4">
        <div className="card" style={{width: '15rem'}}>
        <img src={image} class="card-img-top" alt="..." />
        <div className="card-body">
             <button className="btn btn-warning btn-sm px-3">{label}</button>
            <h5 className="card-title text-white my-3">{name}</h5>
            <div className="d-flex justify-content-between">
                <span className="text-primary" style={{cursor: "pointer"}}>More Info <ArrowRightAltOutlinedIcon/> </span>
                <span className="text-primary" style={{cursor: "pointer"}}><ConfirmationNumberOutlinedIcon/></span>
            </div>
        </div>
        </div>      
      </div>
      </div>
         
     )
  };

export default UpcomingShow;