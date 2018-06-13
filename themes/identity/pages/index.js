import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import avatar from '../images/avatar.jpg';
import profile from '../images/profile.jpg';


import '../styles/main.scss';

export default function Index({ data }) {

  // document.body.classList.add('is-loading');

  return (
			<div id="wrapper">
				{/* <!-- Main --> */}
					<section id="main">
						<header>
							<span className="avatar"><img src={profile} alt="" /></span>
							<h1>Kunal Sinha</h1>
							<p>Tech Enthusiast, Soccer Fan, and Developer</p>
						</header>

						<footer>
							<ul className="icons">
                                <li><a href="https://www.facebook.com/kunal.sinha.355" target="_blank" className="fa-facebook">Facebook</a></li>
								<li><a href="https://twitter.com/sinhaRMA" target="_blank" className="fa-twitter">Twitter</a></li>
								<li><a href="https://www.linkedin.com/in/kunalsinha98/" target="_blank" className="fa-linkedin">LinkedIn</a></li>
                                <li><a href="https://github.com/KunalSinha7/" target="_blank" className="fa-github">Github</a></li>
                                <li><a href="https://drive.google.com/file/d/1jnPqufpDrwDktmO85mkmhTKVg3pvwhPL/view?usp=sharing" target="_blank" className="fa-file">Resume</a></li>
							</ul>
						</footer>
					</section>

				{/* <!-- Footer --> */}
					<footer id="footer">
						<ul className="copyright">
							<li><a href="https://kunal.app">Kunal Sinha</a></li>
                            <li>Made w/ GatsbyJS</li>
                            <li>#HALAMADRID</li>
						</ul>
					</footer>

			</div>
  );
}
