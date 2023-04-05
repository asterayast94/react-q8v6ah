import '../../css/custom.css';
import React from 'react';
import { mypopup } from './feedbackApi';
var allClientsData = [
  {
    id: '173',
    user: '0',
    to: '0',
    rate: '5',
    feedback: 'du6d6d6r\n',
    tags: 'Customer Support',
    date: '2023-03-30 16:31:58.520711',
    customerId: '10011',
    customerName: 'Guest',
    type: 'Customer Support',
  },
];

var viewFeedbackDates = 10;
var viewFeedbackTypes = 'All';

export function refreshButton() {
  var dateButtonValue = document.getElementById('DatesToView').value;
  // console.log('last ' + dateButtonValue + ' day Feedbacks');
  viewFeedbackDates = dateButtonValue;

  var typeOfFeedbackValue = document.getElementById(
    'TypesofFeedbackToView'
  ).value;

  viewFeedbackTypes = typeOfFeedbackValue;
  console.log('FeedBack Type is  ' + viewFeedbackTypes + ' day Feedbacks');
  var notifier = document.getElementById('CustomerFeedbackINFOTEXT');
  notifier.innerHTML =
    ' refreshing ' +
    typeOfFeedbackValue +
    ' types of feedbacks for the last ' +
    dateButtonValue +
    ' days';
  getMyFeedbacks();
}

export async function getMyFeedbacks() {
  var xrotator = document.getElementById('rotator');
  if (xrotator.style.display === 'block') {
    xrotator.style.display = 'block';
  } else {
    xrotator.style.display = 'block';
  }

  var urlFeed = 'https://lovely.habeshasnet.com/cbe/feedback.php';

  var flags = 4;
  var dates = viewFeedbackDates;
  var feedtype = viewFeedbackTypes;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //     'Authorization': 'Bearer my-token',
      //     'My-Custom-Header': 'foobar'
    },
    body: JSON.stringify({ flag: flags, date: dates, FeedBackType: feedtype }),
  };

  var rest = await fetch(
    'https://lovely.habeshasnet.com/social/cbefeedbacks',
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      console.log('data yyyyyyyyyyyyy ++++++++++++++++++++++++++ ' + data);

      var feedbacks = data.data;
      var responseStatus = data.status;
      // xrotator.style.display = 'none';
      allClientsData = [];
      for (var i = 0; i < feedbacks.length; i++) {
        allClientsData.push(feedbacks[i]);
      }
      doer();
    });

  // return allClientsData;
}

function doer() {
  mypopup();

  var notifier = document.getElementById('CustomerFeedbackINFOTEXT');

  notifier.innerHTML =
    viewFeedbackTypes +
    ' types of feedbacks for the last ' +
    viewFeedbackDates +
    ' days refreshed, with total of ' +
    allClientsData.length +
    ' results';

  var xrotator = document.getElementById('rotator');
  if (xrotator.style.display === 'block') {
    xrotator.style.display = 'none';
  } else {
    xrotator.style.display = 'none';
  }

  var oldTableData = document.getElementById('listing-table');

  for (var i = 0; i < oldTableData.childNodes.length; i++) {
    oldTableData.removeChild(oldTableData.childNodes[i]); //you may need an if to only remove the images
  }

  jsp_change_page(1);
  // return data;

  paginagationSorter(10);
}

let jsp_current_pagers = 1;
var jsp_records_per_page = 10;
export function paginagationSorter(values) {
  console.log('paginagationSorter   -------------++++------ ' + values);

  var recordsPerPage = document.getElementById('recordsPerPageSorter').value;
  jsp_records_per_page = recordsPerPage;
  console.log(
    'recordsPerPageSorter ++++++++++++++++++++++ ' +
      recordsPerPage +
      '  per page'
  );

  // console.log('paginagationSorter   -------------++++------ ' + button);

  jsp_change_page(1);
}

function jsp_num_pages() {
  return Math.ceil(allClientsData.length / jsp_records_per_page);
}

export function jsp_prev_page() {
  if (jsp_current_pagers > 1) {
    jsp_current_pagers--;
    jsp_change_page(jsp_current_pagers);
  }
}
export function jsp_next_page() {
  if (jsp_current_pagers < jsp_num_pages()) {
    jsp_current_pagers++;

    jsp_change_page(jsp_current_pagers);
  }
}

function jsp_change_page(page) {
  const btn_prev = document.getElementById('btn-prev');
  const btn_next = document.getElementById('btn-next');
  const listing_table = document.getElementById('listing-table');
  let page_span = document.getElementById('page');
  var totalClients = document.getElementById('numberOfClients');

  if (page < 1) {
    page = 1;
  }
  if (page > jsp_num_pages()) {
    page = jsp_num_pages();
  }

  // console.log(
  //   'tableerer dooooooooing --------- 2222222222222222222222 --------------------- ' +
  //     allClientsData.length
  // );

  listing_table.innerHTML = '';

  for (
    let i = (page - 1) * jsp_records_per_page;
    i < page * jsp_records_per_page && i < allClientsData.length;
    i++
  ) {
    let data = '';

    data += '<tr > ';
    // data += ' <td> <button onClick=  ' +    poptest ()   + '   >yy</button></td>';

    // data += '<td> <button onClick=  {'+handleClick(1)+'}     >yy</button></td>';
    // data += '<td> <button onClick=  {this.handleClick(1)}     >yy</button></td>';
    // data += '<td> <button onClick=  handleClick(1);     >yy</button></td>';
    // data += '<td> <button onClick=  handleClick(1); >nn</button></td>';

    // data += ' <td> <button onClick=  ' +    poptest    + '   >yy</button></td>';
    // data += "<td> <button onClick=  " +    poptest     + "    >yy</button></td>";

    // data += "<td> <button onClick=      poptest ()     >yy</button></td>";
    // data += "<td> <button onClick=    '   poptest ()   '  >yy</button></td>";
    // data += "<td> <button onClick=      poptest ()     >yy</button></td>";

    // data += "<td> <button onClick=  " + '   poptest ()'   + "    >yy</button></td>";
    // data += "<td> <button onClick=  " +  ' { poptest () } '  + "    >yy</button></td>";

    // data += ' <td> <button    onClick=  ' +   { poptest()}    + '     >xx</button></td>';
    // data += ' <td> <button    onClick=  ' +   { poptest }    + '     >xx</button></td>';
    // data += ' <td> <button    onClick=  ' +  {   poptest() }     + '     >xx</button></td>';

    data += '<td>' + i + '</td>';
    data += '<td>' + allClientsData[i].type + '</td>';
    data += '<td>' + allClientsData[i].customerId + '</td>';
    data += '<td>' + allClientsData[i].customerName + '</td>';
    data += '<td>' + allClientsData[i].rate + '</td>';
    data += '<td>' + allClientsData[i].feedback + '</td>';
    if (allClientsData[i].rate >= 4) {
      data += '<td style="color:blue">' + 'Satisfied' + '</td>';
    } else if (allClientsData[i].rate >= 3) {
      data += '<td style="color:green">' + 'farely Satisfied' + '</td>';
    } else if (allClientsData[i].rate >= 2) {
      data += '<td style="color:red">' + 'needs attention' + '</td>';
    } else {
      data += '<td style="color:red">' + 'warning' + '</td>';
    }
    data += '<td>' + allClientsData[i].date + '</td>';

    // data += '<td><button class="button" onclick="ShowInformationPopUPPage(0)">View</button></td>';

    //     data += ' <td><Button class="button"  onClick= "handleClick(${i} }"  >View</Button></td>';
    data += '</tr>';

    listing_table.innerHTML += data;

    // listing_table.innerHTML = but;
  }

  console.log('tableerer doneee -------++++++++++++++++---- ');

  page_span.innerHTML = `${page}/${jsp_num_pages()}`;

  btn_prev.style.display = page === 1 ? 'none' : 'inline-block';
  btn_next.style.display = page === jsp_num_pages() ? 'none' : 'inline-block';

  var name = 'Feedback';

  if (allClientsData) {
    if (allClientsData.length > 1) {
      name = 'Feedbacks';
    }
    totalClients.innerHTML = allClientsData.length + ' ' + name;
  } else {
    totalClients.innerHTML = 'No ' + name;
  }
}

export function handleClick(index) {
  console.log('send a message to', index);
}

function poptest() {
  console.log('++  hereeeeeee teswt po p   pop po ');
}
window.onload = () => {
  document.getElementById('btn-prev').addEventListener('click', (e) => {
    e.preventDefault();
    jsp_prev_page();
  });

  document.getElementById('btn-next').addEventListener('click', (e) => {
    e.preventDefault();
    jsp_next_page();
  });

  jsp_change_page(1);
};

var SelectedElementid = -1;

function ShowInformationPopUPPage(a) {
  console.log('+++++++++++++++ po p   pop po ');
  // return;
  // var x = document.getElementById('clickerButton');
  // var xaprove = document.getElementById('clickerButtonAprove');
  // var xreject = document.getElementById('clickerButtonReject');
  // SelectedElementid = a;

  // document.getElementById('FeedbackNo').innerHTML = SelectedElementid;
  // document.getElementById('FeedbackCustomerId').innerHTML =
  //   'CustomerId: ' + allClientsData[a].customerId;

  // document.getElementById('FeedbackCustomerName').innerHTML =
  //   'CustomerName : ' + allClientsData[a].customerName;
  // document.getElementById('FeedbackRatings').innerHTML =
  //   'Ratings : ' + allClientsData[a].rate;

  // document.getElementById('FeedbackTag').innerHTML =
  //   'Tag: ' + allClientsData[a].tags;
  // document.getElementById('FeedbackFeedback').innerHTML =
  //   'Feedback : ' + allClientsData[a].feedback;
  // document.getElementById('FeedbackDate').innerHTML =
  //   'Date : ' + allClientsData[a].date;

  // x.click();
}

// $('#displayNotif').on('click', function(){
// 	var placementFrom = $('#notify_placement_from option:selected').val();
// 	var placementAlign = $('#notify_placement_align option:selected').val();
// 	var state = $('#notify_state option:selected').val();
// 	var style = $('#notify_style option:selected').val();
// 	var content = {};

// 	content.message = 'Turning standard Bootstrap alerts into "notify" like notifications';
// 	content.title = 'Bootstrap notify';
// 	if (style == "withicon") {
// 		content.icon = 'la la-bell';
// 	} else {
// 		content.icon = 'none';
// 	}
// 	content.url = 'index.html';
// 	content.target = '_blank';

// 	$.notify(content,{
// 		type: state,
// 		placement: {
// 			from: placementFrom,
// 			align: placementAlign
// 		},
// 		time: 1000,
// 	});
// });

export function exportExcel(data) {
  var CsvString = '';

  CsvString +=
    'No' +
    ',' +
    'Tags' +
    ',' +
    'Customer Id' +
    ',' +
    'customer Name' +
    ',' +
    'rate' +
    ',' +
    'Date' +
    ',' +
    'Feedback';
  CsvString += '\r\n';

  for (var i = 0; i < allClientsData.length; i++) {
    CsvString +=
      i +
      ',' +
      allClientsData[i].tags +
      ',' +
      allClientsData[i].customerId +
      ',' +
      allClientsData[i].customerName +
      ',' +
      allClientsData[i].rate +
      ',' +
      allClientsData[i].date +
      ',' +
      allClientsData[i].feedback;

    CsvString += '\r\n';
  }

  CsvString = 'data:application/csv,' + encodeURIComponent(CsvString);
  var x = document.createElement('A');
  x.setAttribute('href', CsvString);
  x.setAttribute('download', 'somedata.csv');
  document.body.appendChild(x);
  x.click();
}
