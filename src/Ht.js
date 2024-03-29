import React from "react";

function Navs(){
    return(
        <>
        `<nav class="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
<a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#"> Dashboard</a>

<ul class="navbar-nav px-3">
<li class="nav-item text-nowrap">
<a class="nav-link" href="#">Logout</a>
</li>
</ul>   
</nav>
<div class="container-fluid">
<div class="row">
 
  <div class="col-md-2 bg-light d-none d-md-block sidebar">
    <div class="left-sidebar">
        <ul class="nav flex-column sidebar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                Candidates
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                Jobs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                Orders
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                Invoices
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                Reports
              </a>
            </li>
          </ul>
    </div>
  </div>
</div>
</div>

<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
<h3>Candidates</h3>

<div class="table-responsive">
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Position</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>Project Manager</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>JS developer</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>Bird</td>
        <td>Back-end developer</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Martin</td>
        <td>Smith</td>
        <td>Back-end developer</td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>Kate</td>
        <td>Mayers</td>
        <td>Scrum master</td>
      </tr>
    </tbody>
  </table>
</div>
</main>   
<h3>Invoice</h3>
<hr>
<div class="row">
<div class="col-sm-6">
<div class="card">
<div class="card-body">
  <h5 class="card-title">Invoice #184382</h5>
  <p class="card-text">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
  <a href="#" class="btn btn-primary">Print</a>
</div>
</div>
</div>
<div class="col-sm-6">
<div class="card">
<div class="card-body">
  <h5 class="card-title">Invoice #184386</h5>
  <p class="card-text">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
  <a href="#" class="btn btn-primary">Print</a>
</div>
</div>
</div>

</div>




</hr>  `
</>
    )
}

export default Navs;
