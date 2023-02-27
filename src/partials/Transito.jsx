import React from 'react';
import transito from '../images/transito.jpg'

export default function Transito() {
    return (
<section className="relative py-20" id="transita">
          <div className="container mx-auto px-4">
            <div className="h-96 overflow-hidden relative rounded-lg shadow-lg">
              <div className="w-full absolute left-0 top-1/2 " style={{ transform: "translate(0, -50%)"}} >
                <img
                  alt="..."
                  className="max-w-full "
                  src={transito}
                />
              </div>
              <div className="w-full md:w-1/2 absolute left-5 md:left-20 top-1/4 text-white font-semibold">
                <div className="md:pr-12">
                  <h3 className="text-3xl">
                    Sumate como hogar de tránsito
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-100">
                  Transitamos gatitos en nuestras casas 🏡
                  Brindamos nuestro hogar para que se recuperen y luego cada Rescatadito pueda encontrar la mejor familia.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <h4 className="text-gray-100">
                        Los gastos están cubiertos.
                        </h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
            );
        }
