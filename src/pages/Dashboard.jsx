import React, {Component} from 'react';
import '../App.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Child from './Child';

const Dashboard = () => {
  const history = useHistory();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem('auth')) history.push('/');
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('auth');
    setLogout(true);
  };

  class ProfilePage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        firstName: '',
        lastName: '',
      };
    }
    handleInputChange = (event) => {
      const {name, value} = event.target;
      this.setState({[name]: value});
    };

    handleSaveClick = () => {
      axios
        .post('https://fakeapi.com/login', {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
        })
        .then((response) => {
          alert('Data saved successfully!');
        })
        .catch((error) => {
          console.error(error);
        });
    };
  }
  return (
    <>
      <div className="button-container">
        <button onClick={logoutHandler} className="btn btn-primary text-left">
          Logout
        </button>
      </div>

      <hr />

      <div class="panel">
        <div className="App">
          <b>System Page</b>
        </div>
        <br></br>
        <form>
          <form class="row gx-3 gy-2 align-items-center">
            <div class="col-sm-3">
              <div class="col-sm-3">
                <label class="visually-hidden" for="specificSizeSelect">
                  Language
                </label>
                <select class="form-select" id="specificSizeSelect">
                  <option selected>English...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="col-sm-3">
                <label class="visually-hidden" for="specificSizeSelect">
                  FontSize
                </label>
                <select class="form-select" id="specificSizeSelect">
                  <option selected>Medium...</option>
                  <option value="1">English</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </form>
          <br></br>
          <br></br>
          <div class="row">
            <div class="col-sm-3">
              <label class="visually-hidden" for="specificSizeSelect">
                <b>Theme</b>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <img src="images/dd.png" alt="Image 1" class="img-fluid" />
              <div class="form-checked">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radioOptions"
                  id="radioOption1"
                  value="option1"
                />

                <label class="form-check-label" for="radioOption1">
                  Dark
                </label>
              </div>
            </div>

            <div class="col-sm-3">
              <img src="images/dd.png" alt="Image 2" class="img-fluid" />
              <div class="form-checked">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radioOptions"
                  id="radioOption2"
                  value="option2"
                />
                <label class="form-check-label" for="radioOption2">
                  Light
                </label>
              </div>
            </div>
            <br></br>
            <br></br>
            <div class="col-sm-3">
              <img src="images/dd.png" alt="Image 3" class="img-custom" />
              <div class="form-checked">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radioOptions"
                  id="radioOption3"
                  value="option3"
                />
                <label class="form-check-label" for="radioOption3">
                  White
                </label>
              </div>
            </div>
          </div>

          <br />
          <form class="row gx-3 gy-2 align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-sm-3">
                  <label class="visually-hidden" for="specificSizeSelect">
                    <b className="contain-text"> Data Mode</b>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-checked">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioOptions"
                      id="radioOption2"
                      value="option2"
                    />
                    <label class="form-check-label" for="radioOption2">
                      26 Apr 2023
                    </label>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-checked">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioOptions"
                      id="radioOption3"
                      value="option3"
                    />
                    <label class="form-check-label" for="radioOption3">
                      2023/04/26
                    </label>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-checked">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioOptions"
                      id="radioOption4"
                      value="option4"
                    />
                    <label class="form-check-label" for="radioOption4">
                      2023-04-26
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </form>
      </div>
      <br></br>
      <br></br>
      <div class="panel-container">
        <div className="App">
          <b>Profile Page</b>
        </div>
        <br></br>
        <div class="row">
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your first name"
            />
          </div>

          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your last name"
            />
          </div>

          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Display Name
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Display name"
            />
          </div>
        </div>

        <br></br>
        <br></br>
        <div class="row">
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Gender
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter Gender"
            />
          </div>

          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Designation
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Designation"
            />
          </div>
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Iam...
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Individual"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Industry
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="PR & Marketing"
            />
          </div>

          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Country
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Country"
            />
          </div>
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Website
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="morismedia.com"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Address Line
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Address"
            />
          </div>

          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your City"
            />
          </div>
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              State
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your State"
            />
          </div>
        </div>
        <br></br>
        <h4 class="text-contain">
          {' '}
          <hr />
          WORK DETAILS
        </h4>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Company / Organization Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Organization name"
            />
          </div>

          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Company Type
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Partnership"
            />
          </div>
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Seniority Level
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Seniority "
            />
          </div>
        </div>

        <br></br>
        <br></br>
        <div class="row">
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Company Headcount
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Headcount"
            />
          </div>

          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Work Email Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Email Address"
            />
          </div>
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Work Phone Number
            </label>
            <input
              type="number"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Phone Number"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Company Website
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Company Website"
            />
          </div>

          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Company Headquarters
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Headquarters"
            />
          </div>
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Work Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Work Address"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Work City
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Work City"
            />
          </div>

          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Work State
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Work State"
            />
          </div>
          <div class="col-md-3">
            <label for="inputEmail4" class="form-label">
              Work Country
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Enter your Country"
            />
            <br></br>
            <div className="button-custom">
              <button className="btn btn-success text-left">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
