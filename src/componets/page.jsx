import React, { Component } from "react";
import Movies from "./movies";

class Page extends Component {
  state = {};
  render() {
    return (
      <>
        <Movies />
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Page;
