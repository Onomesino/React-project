import logo from './logo.svg';
import './App.css';
import clothing from './assets/image/clothing.jpeg'
import office from './assets/image/office.jpeg'
import confrence from './assets/image/confrence .png'
import service from './assets/image/service.jpeg'
import virtual from './assets/image/virtual.jpeg'
import meeting from './assets/image/meeting.jpeg'

function App() {
  return <div>
    <nav className="Nav navbar navbar-default navbar-fixed-top ">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">E.G Ventures</a>
            <img className="log" src={clothing} alt="logo" />
          </div>
      
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">About</a></li>
            </ul>
          </div>
          </nav>

      <img className="offi" src={office} />
      <h3 className="hall">OUR FACILITIES</h3>

      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img className="con" src={confrence} />
            <div className="caption">
              <h3>confrence Room</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Autem amet quisquam provident fuga, impedit ex repellendus ducimus
                cum similique perspiciatis fugiat vero ratione blanditiis!
                Aspernatur dolorem repudiandae pariatur. Earum, maxime!</p>
            </div>
          </div>
        </div>
        

        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img src={service} />
            <div className="caption">
              <h2>Service Office</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Voluptatem animi doloribus, enim error neque necessitatibus et deleniti fuga nemo,
                natus omnis blanditiis distinctio pariatur facilis porro,
              temporibus voluptates aperiam. Quibusdam!</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img src={virtual} />
            <div className="caption">
              <h2>Virtual Office</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem animi doloribus, enim error neque necessitatibus et deleniti fuga nemo,
                natus omnis blanditiis distinctio pariatur facilis porro,
                temporibus voluptates aperiam. Quibusdam!</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="thumbnail">
            <img src={meeting} />
            <div className="caption">
              <h2>Meeting Room</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quibusdam veniam dolores excepturi quaerat vel illum necessitatibus sequi! Libero
                 aliquam eveniet tenetur inventore labore tempore incidunt obcaecati,
                  voluptatibus aut minima molestiae!</p>
            </div>
          </div>
        </div>
        </div>

        <div className="container-footer">
        <h4 className="fot">Resident</h4>
        <h5 className="pla">Accra,Ghana, Abuja,Nigeria</h5>
        <p className="fit">Lorem ipsum dolor sitamet consectetur adipisicing elit.<br/>
         <span className="mid">Quibusdam veniam dolores excepturi.</span> </p>

         <h4 className="cen">Contact Us</h4>
         <h5 className="ter">Nigeria: +234 9136 408 780</h5>
         <h5 className="ter">Ghana: +233 5418 54 514</h5>

         <h4 className="us">Visti Us</h4>
         <h3 className="at">@</h3>
         <h5 className="ven">E.G Ventures@twitter.com</h5>
         <h5 className="ven">E.G Ventures@Facebook.com</h5>

         <h4 className="end">Our Website</h4>
         <h5 className="las">www.E.G Ventures.org</h5>
      </div>
      </div>
      
}

export default App;
