// import React from 'react'

import HeaderTitle from '../components/sections/HeaderTitle';

function Contact() {
  return (
    <>
      <HeaderTitle title="Contact" />
      <section>
        <div>
          <div>
            <h3>Pour nous contacter</h3>
            <p>
              Veuillez remplir le formulaire ci-dessous pour plus
              d&apos;information
            </p>
          </div>
          <div>
            <div>
              <form action="">
                <div>
                  <label htmlFor="fullname">Nom et prénom(s)</label>
                  <input type="text" name="fullname" id="fullname" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div>
                  <label htmlFor="object">Objet</label>
                  <input type="text" name="object" id="object" />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div>
                  <button type="submit">Envoyer</button>
                </div>
              </form>
            </div>
                      <div>
                          
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
