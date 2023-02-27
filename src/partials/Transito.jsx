import React from 'react';
import transito from '../images/transito.jpg'
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';

export default function Transito() {
    return (
<section className="relative py-20 transition duration-300 ease-in-out" id="transita">
          <div className="container mx-auto px-4">
            <div className="h-96 overflow-hidden relative rounded-lg shadow-lg">
              <div className="w-full absolute left-0 top-1/2 opacity-80" style={{ transform: "translate(0, -60%)"}} >
                <img
                  alt="..."
                  className="max-w-full "
                  src={transito}
                />
              </div>
              <div className="w-full md:w-1/2 absolute left-5 md:left-20 top-1/4 text-black font-semibold">
                <div className="md:pr-12">
                  <h3 className="text-3xl">
                    Sumate como hogar de tránsito
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-black">
                  Transitamos gatitos en nuestras casas 🏡
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-black">
                  Brindamos nuestro hogar para que se recuperen y luego cada Rescatadito pueda encontrar la mejor familia.
                  </p>
                  <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfsee9hd-pN_nNrbMPvPJHqcgxDb2w17OExWDcfPsyDcQ-4tQ/viewform" target='_blank' className="btn-sm text-gray-100 bg-gray-500 hover:bg-rose-300 mt-10">Formulario de tránsito</Link>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
            );
        }
