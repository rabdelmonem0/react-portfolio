import React from "react";

function Jumbotron() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h1>Rwan Abdelmonem</h1>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#about-me">
                About Me <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#work">
                Work
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <p class="lead text-center">
            Thank you for visiting my website! I put together this webpage to
            showcase my projects. Feel free to explore and contact me for any
            additional information and collaboration!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;