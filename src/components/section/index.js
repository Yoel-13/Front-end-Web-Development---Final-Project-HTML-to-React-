import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Section() {

  const [section, setSection] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3004/section").then(res => console.log('res section ->', res.data))
  }, [])
    
        return (
            <div>
           <div id="#top" />
  <section id="home">
    <div className="banner-container">
      <img src="images/banner-bg.jpg" alt="banner" />
      <div className="container banner-content">
        <div id="da-slider" className="da-slider">
          <div className="da-slide">
            <h2>Responsive Website</h2>
            <p>Amazing free responsive website for free, use it for your personal or commercial needs</p>
            <div className="da-img" />
          </div>
          <div className="da-slide">
            <h2>Bootstrap</h2>
            <p>Bootstrap, a sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.</p>
            <div className="da-img" />
          </div>
          <div className="da-slide">
            <h2>HTML5/CSS3</h2>
            <p>HTML5 is a markup language used for structuring and presenting content for the World Wide Web and a core technology of the Internet</p>
            <div className="da-img" />
          </div>
          <div className="da-slide">
            <h2>JavaScript/jQuery</h2>
            <p>jQuery: The Write Less, Do More, JavaScript Library.</p>
            <div className="da-img" />
          </div>
          <nav className="da-arrows">
            <span className="da-arrows-prev" />
            <span className="da-arrows-next" />
          </nav>
        </div>
      </div>
    </div>
  </section>
  <section id="aboutUs" className="page-section darkBg pDark pdingBtm30">
    <div className="container">
      <div className="heading text-center">
        {/* Heading */}
        <h2>About Us</h2>
        <p>At lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
      </div>
      <div>
        <h3>Our Company</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <h3><i className="fa fa-desktop color" />&nbsp; What we do?</h3>
          {/* Paragraph */}
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.</p>
        </div>
        <div className="col-md-4 col-sm-4">
          {/* Heading */}
          <h3><i className="fa fa-cloud color" />&nbsp;Why choose us?</h3>
          {/* Paragraph */}
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.</p>
        </div>
        <div className="col-md-4 col-sm-4">
          {/* Heading */}
          <h3><i className="fa fa-home color" />&nbsp;Where are we?</h3>
          {/* Paragraph */}
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.</p>
        </div>
      </div>
    </div>
    {/*/.container*/}
  </section>
  <section id="services" className="page-section">
    <div className="container">
      <div className="heading text-center">
        {/* Heading */}
        <h2>Services</h2>
        <p>At lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
      </div>
      <div className="row">
        {/* item */}
        <div className="col-md-4 text-center">
          <i className="fa fa-arrows fa-2x circle" />
          <h3>Responsive <span className="id-color">Design</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue.</p>
        </div>
        {/* end: */}
        {/* item */}
        <div className="col-md-4 text-center">
          <i className="fa fa-css3 fa-2x circle" />
          <h3>HTML5/CSS3 <span className="id-color">Dev</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue.</p>
        </div>
        {/* end: */}
        {/* item */}
        <div className="col-md-4 text-center">
          <i className="fa fa-lightbulb-o fa-2x circle" />
          <h3>JavaScript <span className="id-color">jQuery</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer ultricies sed elit impe.</p>
        </div>
        {/* end: */}
        {/* item */}
        <div className="col-md-4 text-center">
          <i className="fa fa-globe fa-2x circle" />
          <h3>Web <span className="id-color">Designing</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet conempus.</p>
        </div>
        {/* end:*/}
        {/* item */}
        <div className="col-md-4 text-center">
          <i className="fa fa-desktop fa-2x circle" />
          <h3>Wordpress <span className="id-color">Dev</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer ultricies sed elit imperdiet congue. Integer ultricies sed ligula eget tempus.</p>
        </div>
        {/* end: */}
        {/* item */}
        <div className="col-md-4 text-center">
          <i className="fa fa-tablet fa-2x circle" />
          <h3>Mobile <span className="id-color">Dev</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue. Integer ultricies sed ultricies sed ligula eget tempus.</p>
        </div>
        {/* end:*/}
      </div>
    </div>
    {/*/.container*/}
    <div id="demo" className="clients">
      <div className="container">
        <div className="heading text-center">
          {/* Heading */}
          <h2>Oure Clients</h2>
          <p>At lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
        </div>
        <div className="row">
          <div className="span12">
            <div className="customNavigation">
              <a className="prev"><i className="fa fa-chevron-circle-left" /></a>
              <a className="next"><i className="fa fa-chevron-circle-right" /></a>
            </div>
            <div id="owl-demo" className="owl-carousel">
              <div className="item">
                <span className="helper">
                  <img src="images/clients/client-1.png" alt="client" /></span>
              </div>
              <div className="item">
                <span className="helper">
                  <img src="images/clients/client-2.png" alt="client" /></span>
              </div>
              <div className="item">
                <span className="helper">
                  <img src="images/clients/client-3.png" alt="client" /></span>
              </div>
              <div className="item">
                <span className="helper">
                  <img src="images/clients/client-4.png" alt="client" /></span>
              </div>
              <div className="item">
                <span className="helper">
                  <img src="images/clients/client-5.png" alt="client" /></span>
              </div>
              <div className="item">
                <span className="helper">
                  <img src="images/clients/client-6.png" alt="client" /></span>
              </div>
              <div className="item">
                <span className="helper">
                  <img src="images/clients/client-7.png" alt="client" /></span>
              </div>
              <div className="item">
                <span className="helper">
                  <img src="images/clients/client-8.png" alt="client" /></span>
              </div>
              <div className="item">
                <span className="helper">
                  <img src="images/clients/client-9.png" alt="client" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="portfolio" className="page-section section appear clearfix">
    <div className="container">
      <div className="heading text-center">
        {/* Heading */}
        <h2>Portfolio</h2>
        <p>At lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
      </div>
      <div className="row">
        <nav id="filter" className="col-md-12 text-center">
          <ul>
            <li><a href="#" className="current btn-theme btn-small" data-filter="*">All</a></li>
            <li><a href="#" className="btn-theme btn-small" data-filter=".webdesign">Web Design</a></li>
            <li><a href="#" className="btn-theme btn-small" data-filter=".photography">Photography</a></li>
            <li><a href="#" className="btn-theme btn-small" data-filter=".print">Print</a></li>
          </ul>
        </nav>
        <div className="col-md-12">
          <div className="row">
            <div className="portfolio-items isotopeWrapper clearfix" id={3}>
              <article className="col-sm-4 isotopeItem webdesign">
                <div className="portfolio-item">
                  <img src="images/portfolio/img1.jpg" alt />
                  <div className="portfolio-desc align-center">
                    <div className="folio-info">
                      <a href="images/portfolio/img1.jpg" className="fancybox">
                        <h5>Project Name</h5>
                        <i className="fa fa-plus-circle fa-2x" /></a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="col-sm-4 isotopeItem photography">
                <div className="portfolio-item">
                  <img src="images/portfolio/img2.jpg" alt />
                  <div className="portfolio-desc align-center">
                    <div className="folio-info">
                      <a href="images/portfolio/img2.jpg" className="fancybox">
                        <h5>Project Name</h5>
                        <i className="fa fa-plus-circle fa-2x" /></a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="col-sm-4 isotopeItem photography">
                <div className="portfolio-item">
                  <img src="images/portfolio/img3.jpg" alt />
                  <div className="portfolio-desc align-center">
                    <div className="folio-info">
                      <a href="images/portfolio/img3.jpg" className="fancybox">
                        <h5>Project Name</h5>
                        <i className="fa fa-plus-circle fa-2x" /></a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="col-sm-4 isotopeItem print">
                <div className="portfolio-item">
                  <img src="images/portfolio/img4.jpg" alt />
                  <div className="portfolio-desc align-center">
                    <div className="folio-info">
                      <a href="images/portfolio/img4.jpg" className="fancybox">
                        <h5>Project Name</h5>
                        <i className="fa fa-plus-circle fa-2x" /></a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="col-sm-4 isotopeItem photography">
                <div className="portfolio-item">
                  <img src="images/portfolio/img5.jpg" alt />
                  <div className="portfolio-desc align-center">
                    <div className="folio-info">
                      <a href="images/portfolio/img5.jpg" className="fancybox">
                        <h5>Project Name</h5>
                        <i className="fa fa-plus-circle fa-2x" /></a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="col-sm-4 isotopeItem webdesign">
                <div className="portfolio-item">
                  <img src="images/portfolio/img6.jpg" alt />
                  <div className="portfolio-desc align-center">
                    <div className="folio-info">
                      <a href="images/portfolio/img6.jpg" className="fancybox">
                        <h5>Project Name</h5>
                        <i className="fa fa-plus-circle fa-2x" /></a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="col-sm-4 isotopeItem print">
                <div className="portfolio-item">
                  <img src="images/portfolio/img7.jpg" alt />
                  <div className="portfolio-desc align-center">
                    <div className="folio-info">
                      <a href="images/portfolio/img7.jpg" className="fancybox">
                        <h5>Project Name</h5>
                        <i className="fa fa-plus-circle fa-2x" /></a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="col-sm-4 isotopeItem photography">
                <div className="portfolio-item">
                  <img src="images/portfolio/img8.jpg" alt />
                  <div className="portfolio-desc align-center">
                    <div className="folio-info">
                      <a href="images/portfolio/img8.jpg" className="fancybox">
                        <h5>Project Name</h5>
                        <i className="fa fa-plus-circle fa-2x" /></a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="col-sm-4 isotopeItem print">
                <div className="portfolio-item">
                  <img src="images/portfolio/img9.jpg" alt />
                  <div className="portfolio-desc align-center">
                    <div className="folio-info">
                      <a href="images/portfolio/img9.jpg" className="fancybox">
                        <h5>Project Name</h5>
                        <i className="fa fa-plus-circle fa-2x" /></a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="team" className="page-section">
    <div className="container">
      <div className="heading text-center">
        {/* Heading */}
        <h2>Our Team</h2>
        <p>At variations of passages of Lorem Ipsum available, but the majority have suffered alteration..</p>
      </div>
      {/* Team Member's Details */}
      <div className="team-content">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-6">
            {/* Team Member */}
            <div className="team-member pDark">
              {/* Image Hover Block */}
              <div className="member-img">
                {/* Image  */}
                <img className="img-responsive" src="images/photo-1.jpg" alt />
              </div>
              {/* Member Details */}
              <h4>John Doe</h4>
              {/* Designation */}
              <span className="pos">CEO</span>
              <div className="team-socials">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-google-plus" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6">
            {/* Team Member */}
            <div className="team-member pDark">
              {/* Image Hover Block */}
              <div className="member-img">
                {/* Image  */}
                <img className="img-responsive" src="images/photo-2.jpg" alt />
              </div>
              {/* Member Details */}
              <h4>Larry Doe</h4>
              {/* Designation */}
              <span className="pos">Art Director</span>
              <div className="team-socials">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-google-plus" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6">
            {/* Team Member */}
            <div className="team-member pDark">
              {/* Image Hover Block */}
              <div className="member-img">
                {/* Image  */}
                <img className="img-responsive" src="images/photo-3.jpg" alt />
              </div>
              {/* Member Details */}
              <h4>Ranith Kays</h4>
              {/* Designation */}
              <span className="pos">Manager</span>
              <div className="team-socials">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-google-plus" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6">
            {/* Team Member */}
            <div className="team-member pDark">
              {/* Image Hover Block */}
              <div className="member-img">
                {/* Image  */}
                <img className="img-responsive" src="images/photo-4.jpg" alt />
              </div>
              {/* Member Details */}
              <h4>Joan Ray</h4>
              {/* Designation */}
              <span className="pos">Creative</span>
              <div className="team-socials">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-google-plus" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/.container*/}
  </section>
  <section id="contactUs" className="page-section">
    <div className="container">
      <div className="row">
        <div className="heading text-center">
          {/* Heading */}
          <h2>Contact Us</h2>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </div>
      </div>
      <div className="row mrgn30">
        <form method="post" action id="contactfrm" role="form">
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="name" id="name" placeholder="Enter name" title="Please enter your name (at least 2 characters)" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" title="Please enter a valid email address" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="comments">Comments</label>
              <textarea name="comment" className="form-control" id="comments" cols={3} rows={5} placeholder="Enter your message…" title="Please enter your message (at least 10 characters)" defaultValue={""} />
            </div>
            <button name="submit" type="submit" className="btn btn-lg btn-primary" id="submit">Submit</button>
            <div className="result" />
          </div>
        </form>
        <div className="col-sm-4">
          <h4>Address:</h4>
          <address>
            WebThemez Company<br />
            134 Stilla. Tae., 414515<br />
            Leorislon, SA 02434-34534 USA
            <br />
          </address>
          <h4>Phone:</h4>
          <address>
            12345-49589-2<br />
          </address>
        </div>
      </div>
    </div>
    {/*/.container*/}
  </section>
  <section className="maps">
    <iframe src="http://maps.google.com/maps?f=q&t=m&z=15&ll=-7.269152,112.733127&output=embed" width="100%" height={250} frameBorder={0} />
  </section>

        </div>
        )
    
}

