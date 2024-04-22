// import React from 'react'

import HeaderTitle from '../components/sections/HeaderTitle';

function Contact() {
  return (
    <>
      <HeaderTitle title="Contact" />
      <section className="contact_section">
        <div className="container contact_section-container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h3>Pour nous contacter</h3>
            <p>
              Veuillez remplir le formulaire ci-dessous pour plus
              d&apos;information
            </p>
          </div>
          <div style={{ width: '100%', display: 'flex', gap: '2rem' }}>
            <div style={{ width: '70%' }}>
              <form action="">
                <div className="field_block">
                  <label className="field_block-label" htmlFor="fullname">
                    Nom et prénom(s)
                  </label>
                  <input
                    className="field_block-input"
                    type="text"
                    name="fullname"
                    id="fullname"
                  />
                </div>
                <div className="field_block">
                  <label className="field_block-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="field_block-input"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="field_block">
                  <label className="field_block-label" htmlFor="object">
                    Objet
                  </label>
                  <input
                    className="field_block-input"
                    type="text"
                    name="object"
                    id="object"
                  />
                </div>
                <div className="field_block">
                  <label className="field_block-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="field_block-input"
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div>
                  <button className="btn btn-primary btn-block" type="submit">Soumettre</button>
                </div>
              </form>
            </div>

            <div style={{ width: '30%' }}>
              <div>
                <div>logo</div>
                <div>
                  <h5>Téléphone:</h5>
                  <ul>
                    <li>+(229) 91- 43 - 63 - 63</li>
                    <li>+(229) 55 - 06 - 18 - 18</li>
                  </ul>
                </div>
              </div>

              <div>
                <div>logo</div>
                <div>
                  <h5>Email:</h5>
                  <ul>
                    <li>
                      <a href="mailto:welcome@finab.bj">welcome@finab.bj</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div>logo</div>
                <div>
                  <h5>Adresse:</h5>
                  <p>BÉNIN - C/7004, Haie Vive, Cotonou</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
