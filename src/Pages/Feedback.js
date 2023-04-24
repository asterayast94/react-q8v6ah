import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from 'mdb-react-ui-kit';
import {
  caller,
  viewFeedbackTypeChanger,
  getFeedbacksList,
  plusSlides,
  viewFeedbackDatesChanger,
} from './Api/feedbackApi';

import {
  Feedbacks,
  getMyFeedbacks,
  refreshButton, 
  exportExcel,
  paginagationSorter,ratingsSorter,jsp_next_page,jsp_prev_page,ShowInformationPopUPPage,poptest,handleClick,
} from './Api/feedbackApiRequest';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React, { useMemo, useState, useEffect } from 'react';
 
import data from './tables/data.json';
import { useEffect, useState } from 'react';
import '../css/custom.css';
import DrawerPAge from '../Navigation/Left';

export default function Main(props) {


  const [data, setData] = useState([]);
  var mydata = [];

 
  async function componentDidMount() {
    // POST request using fetch with set headers
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer my-token',
        'My-Custom-Header': 'foobar',
      },
      body: JSON.stringify({ title: 'React POST Request Example' }),
    };
    fetch('https://reqres.in/api/posts', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('data  ' + data);
        setData(FeedbacksData);
        // return data;
      });

    // .then(data => this.setState({ postId: data.id }));
  }
  // async function  getMyFeedbacks() {

  //   var urlFeed = 'https://lovely.habeshasnet.com/cbe/feedback.php';

  //   var flags = 4;
  //   var dates = 50;
  //   var feedtype = "All";

  //   const requestOptions = {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       //     'Authorization': 'Bearer my-token',
  //       //     'My-Custom-Header': 'foobar'
  //       },
  //       body: JSON.stringify({ flag: '4', date: '50', FeedBackType:'All' })
  //   };
  //   fetch('https://lovely.habeshasnet.com/social/cbefeedbacks', requestOptions)
  //       .then(response => response.json())
  //       .then((data) => {
  //         console.log('data  ' +data);
  //             let feedbacks = data.data;
  //  let responseStatus = data.responseStatus;

  //         setData(feedbacks);
  //         // return data;
  //       });

  // }
  function doer(xxx) {
    console.log('data  returned ' + xxx);
    // var mydatax =   await    getFeedbacks();
    //  var mydatax =         FeedbacksList();
    var mydatax = await getMyFeedbacks().then(setData(mydatax));
  }

  // useEffect(() => {
  //   var mydatax =          getMyFeedbacks();
  //   doer(mydatax);
  //   // setData(mydatax);
  //   // getMyFeedbacks()
  //   // fetchData();
  // }, []);

  useEffect(() => {
    getMyFeedbacks().then((data) => {
      console.log('data  returned ' + data);
      setData(data);
      // doer(data);
 
      // setData(data);
    });
  }, []);

  return (
    <div>
      <div class="fullWidth" style={{ display: '' }}>
        <Row>

          {/* { 
    screen.width < 720 ? <h1> hidden drawer { screen.width}</h1> :  */}

          <div class="fulldrawer">{DrawerPAge()}  </div>

         {/* } */}

          <div class="fullCenterBody">
            <div class="ext-box">
              <div class="int-box">
                <Row  >
                 
                 
                <div  class="form-control"  >
                    <Row   >
                     
              <Col>

                      <div>
                     Filter Feedbacks 
                  
                        <select id="TypesofFeedbackToView">
                          <option onClick={viewFeedbackTypeChanger('All')}>
                            All
                          </option>
                          <option
                            onClick={viewFeedbackTypeChanger('User Interface')}
                          >
                            User Interface
                          </option>
                          <option
                            onClick={viewFeedbackTypeChanger(
                              'Customer Support'
                            )}
                          >
                            Customer Support
                          </option>
                          <option onClick={viewFeedbackTypeChanger('Network')}>
                            Network
                          </option>
                        </select>
                   
                        </div>

              </Col>
                     
  <Col>
            <div>       
                        Feedbacks of the Last 
                    
              <input  list="feedDates" name="feedDates" id="DatesToView"/>
              <datalist id="feedDates">
                <option value="1"> days </option>
                <option value="5"> days</option>
                <option value="10"> days</option>
                <option value="30"> days</option>
                <option value="60"> days</option>
                <option value="120"> days</option>
                <option value="180"> days</option>
                <option value="180"> days</option>
              </datalist> 
                
                
            </div>
  </Col>     
 
                  
              
  
                
 
  <Col>
 
 <button onClick={refreshButton} class="btn btn-success">
                         Refresh Feedback
                       </button>
                    
  
  
                       </Col>
                           </Row>
 
                   
          
           
 

                 
                    
</div>


                </Row>



                <div  class="form-control"  >
                <div id="rotator">
                    <div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">.. + .. + </span>
                    </div>
                  </div>

                <p
                  id="CustomerFeedbackINFOTEXT"
                  class="table table-striped table-striped-bg-default mt-3"
                ></p>

              </div>
                      
                <div className="fullTableSize">
                  <div className="App">
                    <table class="table table-bordered">
                      <tr class= "fullTableSizeHeader">
                        <th>No.</th>
                        <th>Tag</th>
                        <th>Customer Id</th>
                        <th>Customer Name</th>

                        <th>Ratings</th>
                   

                        <th>Feedback</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>View</th>
                      </tr>

<tbody id="listing-table"></tbody>
 
                   
                    </table>

                 
                  </div>
                  <p
                      id="numberOfClients"   style={{width:100}}
                    ></p> 
                </div>
               
             
              

                 
         
                <div class="row">
<button onClick={jsp_prev_page} id="btn-prev"  style={{width:50}}>Prev</button>
   <button onClick={jsp_next_page} id="btn-next"  style={{width:50}}>Next</button>
                  <p  style={{width:100}}>
                    Page <span id="page"></span>
                  </p> 
                  <p
                  id="counterLocal"
                  class="table table-striped table-striped-bg-default mt-3"
                ></p>
                  </div>   
 
               
                <div class="card-footer">
                  <p
                    id="counterTaskWeb"
                    class="table table-striped table-striped-bg-default mt-3"
                  ></p>

                  <div class="row">
                    <select class="form-control" id="recordsPerPageSorter" style={{width:100}}>
                      <option onClick={ }>5</option>
                      <option onClick={ }>10</option>
                      <option onClick={ }>30</option>
                      <option onClick={ }>50</option> 
                      <option onClick={ }>100</option>
                    </select>

                    <button onClick={paginagationSorter}  style={{width:100}} >Records Per PAge</button>
 
           </div> 
 
 
           <div class="row">

           <select class="form-control" id="filterByRating" style={{width:100}}>
                      <option onClick={ratingsSorter }>All Ratings</option>
                      <option onClick={ ratingsSorter}>5</option>
                      <option onClick={ratingsSorter }>4</option>
                      <option onClick={ ratingsSorter}>3</option> 
                      <option onClick={ ratingsSorter}>2</option>
                      <option onClick={ratingsSorter }>1</option>
                    </select>

                    <button onClick={ratingsSorter}  style={{width:100}} >Filter Ratings Below</button>
  
 
 <button onClick={exportExcel} style={{width:100}} >Export To Excel</button> 
           </div> 
 
            
                </div>
              </div>
            </div>
          </div>

          <div class="fullRightPage">
            <div class="ext-box">
              <div class="int-box">
                <h2>Important Links</h2>
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p> 
 
              </div>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );

}
