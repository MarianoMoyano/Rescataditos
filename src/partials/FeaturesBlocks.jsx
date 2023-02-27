import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="featuresBlocksPhotoCats top-0 absolute inset-0" aria-hidden="true">
        <img src="/src/images/cats.jpg" alt="" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 textWhite">Rescataditos en adopción</h2>
            <p className="text-xl text-gray-600 textWhite">Acá te presentamos algunos de los consejos que te podemos ofrecer.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <Card img="/src/images/howtorescueacat.jpg" title="Rescata" description="Consejos para que puedas atrapar al gato dentro de una transportadora." />
            {/* 2nd item */}
            <Card img="/src/images/howtorescueacat.jpg" title="Castración" description="Explicacion del porque hay que castrar a los gatos." />

            {/* 3rd item */}
            <Card img="/src/images/complaints.jpg" title="Denuncias" description="Lista de datos y pasos para efectuar una denuncia por violencia animal." />

            {/* 4th item */}
            <Card img="/src/images/donations.jfif" title="Donar" description="Si esta en tus posibilidades cada peso nos ayuda a seguir." />

            {/* 5th item */}
            <Card img="/src/images/adopt.jpg" title="Adopta" description="Te mostramos a algunos gatos con sus nuevas familias." />

            {/* 6th item */}
            <Card img="/src/images/ifoundacat.jpg" title="Encontre un gato" description="Pasos para que un gato callejero entre a tu casa." />

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
