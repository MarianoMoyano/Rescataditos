import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import howtorescueacat from "/src/images/howtorescueacat.jpg"
import castrationmatters from "/src/images/castrationmatters.jpg"
import complaints from "/src/images/complaints.jpg"
import donations from "/src/images/donations.jfif"
import adopt from "/src/images/adopt.jpg"
import ifoundacat from "/src/images/ifoundacat.jpg"


function FeaturesBlocks() {
  return (
    <section className="relative overflow-hidden" id="home">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="featuresBlocksPhotoCats left-0 top-1/2 absolute" style={{ transform: "translate(0, -60%)"}} aria-hidden="true">
        <img src="/src/images/cats.jpg" alt="" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 textWhite">Rescataditos en adopción</h2>
            <p className="text-xl text-gray-900 textWhite"></p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <Card img={howtorescueacat} title="Rescatá" description="Consejos para atrapar al gato dentro de una transportadora." href="https://www.instagram.com/p/CZj5vZIFoZh/" />
            {/* 2nd item */}
            <Card img={castrationmatters} title="Castrá" description="Castrá un gato y salvá miles de vidas." href="https://www.instagram.com/p/BwJ7E5nBNxc/" />

            {/* 3rd item */}
            <Card img={complaints} title="Denuncias" description="Lista de datos y pasos para efectuar una denuncia por violencia animal." href="https://www.instagram.com/p/BsHRki1jA1H/" />

            {/* 4th item */}
            <Card img={donations} title="Doná" description="Si está en tus posibilidades cada peso nos ayuda a seguir." href="https://www.mercadopago.com.ar/payment-link/v1/redirect?preference-id=1212221756-55dfbc6d-b389-4740-9438-bea5da5bbad6&source=link" />

            {/* 5th item */}
            <Card img={adopt} title="Adoptá" description="Te mostramos a algunos gatos con sus nuevas familias." href="https://www.instagram.com/rescataditosenadopcionn/" />

            {/* 6th item */}
            <Card img={ifoundacat} title="Transitá" description="Transitar salva vidas ♥️ Sumate como hogar de tránsito." href="https://www.instagram.com/p/CoshXVDDddu/" />

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
