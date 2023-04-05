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
  paginagationSorter,jsp_next_page,jsp_prev_page,ShowInformationPopUPPage,poptest,handleClick,
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
                <Row>
                  <div class="float-container">
                    <div class="float-child">
                      <div class="green">Filter Feedbacks</div>

                      <div>
                        {/* <button onclick={ }> Filter Feedbacks </button> */}

                        <select class="form-control" id="TypesofFeedbackToView">
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
                    </div>

                    <div class="float-child">
                      <div class="blue">Last Dates back</div>

                      {/* <button onclick={caller()}> click </button> */}

                      <select class="form-control" id="DatesToView">
                        <option>1</option>
                        <option>5</option>
                        <option>10</option>
                        <option>30</option>
                        <option>60</option>
                        <option>90</option>
                        <option>120</option>
                      </select>
                    </div>

                    <div class="float-child">
                      <button onClick={refreshButton} class="btn btn-success">
                        Refresh Feedback
                      </button>
                      <div id="rotator">
                        <div class="spinner-border text-primary" role="status">
                          <span class="visually-hidden">.. + .. + </span>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                </Row>

                <p
                  id="CustomerFeedbackINFOTEXT"
                  class="table table-striped table-striped-bg-default mt-3"
                ></p>

              
                      
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
 
 <button onClick={exportExcel} style={{width:100}} >Export To Excel</button>
 <button onClick= {() => { mypopup();} }   style={{width:100}} >pop  Test </button> 
 <button onClick= {() => { handleClick(1);} }   style={{width:100}} >pop  Test </button>
           </div> 
 
            
                </div>
              </div>
            </div>
          </div>

          <div class="fullRightPage">
            <div class="ext-box">
              <div class="int-box">
                <h2>Important Links</h2>
                <p>bla bla bla</p>
                <p>bla bla bla</p>
                <p>bla bla bla</p>
                <p>bla bla bla</p>
                <p>bla bla bla</p>
                <p>bla bla bla</p>
                <p>bla bla bla</p>
                <p>bla bla bla</p>
                <p>bla bla bla</p>
                <p>bla bla bla</p>

                <button onClick={ }>alert</button>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );

}
