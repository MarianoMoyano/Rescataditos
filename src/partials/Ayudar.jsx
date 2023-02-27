import React from 'react';
import credit from '../images/credit-card-regular.svg';
import hand from '../images/handshake-regular.svg';

export default function Ayudar() {
    return (
<section className="relative block bg-gray-400" id="ayudanos">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-24">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Ayudanos
                </h2>
                <p className="text-lg font-semibold text-rose-100">
                  ¡Podés ayudarnos a seguir rescatando gatitos!
                </p>
                <p className="text-lg leading-relaxed mt-6 mb-3 text-gray-1000">
                Los aportes económicos nos ayudan a pagar las consultas veterinarias, traslados, estudios, alimentos y emergencias. También podés enviarnos donaciones de camitas, rascadores, juguetitos, medicamentos, mantitas, entre otros.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <img src={credit} />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-rose-200">
                  Transferencia
                </h6>
                <p className="mt-2 text-gray-1000">
                Alias: DONA.RESCATA.DITOS
                </p>
                <p className="mb-4 text-gray-1000">
                  Banco BBVA
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <img src={hand} />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-rose-200">
                  Mercado Pago
                </h5>
                <p className="mt-2 mb-4 text-gray-1000">
                    <p>Alias: dona.rescataditos</p>
                  <a href='https://www.mercadopago.com.ar/checkout/v1/payment/redirect/c27814ed-96e4-45c2-87ab-64feb9f18104/payment-option-form/?source=link&router-request-id=031a425d-d922-40ea-afb7-c0d2b3fbad44&preference-id=1212221756-55dfbc6d-b389-4740-9438-bea5da5bbad6&p=6dae8eaa101b9cd67b02227dc72c45fa#/' target={"_blank"} rel="noreferrer"> Click acá </a>
                </p>
              </div>
            </div>
          </div>
        </section>
                );
            }