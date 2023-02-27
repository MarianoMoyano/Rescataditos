import React from 'react';
import adopta from '../images/adopta.jpg'
import { Link } from 'react-router-dom';

export default function Adopta() {
    return (
<section className="relative py-20" id="transita">
          <div className="container mx-auto px-4">
            <div className="h-96 overflow-hidden relative rounded-lg shadow-lg">
              <div className="w-full absolute left-0 top-1/2" style={{ transform: "translate(0, -55%)"}} >
                <img
                  alt="..."
                  className="max-w-full "
                  src={adopta}
                />
              </div>
              <div className="w-full md:w-1/2 absolute right-5 md:right-20 top-1/4 font-semibold text-right text-white">
                <div className="md:pr-12">
                  <h3 className="text-3xl">
                    Adoptá un Rescatadito
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed">
                  Completá el formulario de adopción.
                  </p>
                  <Link to="https://docs.google.com/forms/d/1E2zJnvBNi6am_x8IpFVC54jUqK4OGgHEhIMadtJRN-o/viewform?chromeless=1&edit_requested=true" target='_blank' className="btn-sm text-gray-100 bg-gray-500 hover:bg-rose-300 mt-10">Formulario de adopción</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
            );
        }
