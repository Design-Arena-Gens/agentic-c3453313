"use client";

import { Package, Clock, Phone, MapPin, ShoppingBag, Heart, Zap, CheckCircle } from "lucide-react";

export default function Home() {
  const whatsappNumber = "2331252947";
  const whatsappLink = `https://wa.me/52${whatsappNumber}`;

  const services = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Fondas y Restaurantes",
      description: "Tu comida favorita directo a tu puerta",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Tiendas y Abarrotes",
      description: "Lo que necesites del súper o tienda",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Farmacias",
      description: "Medicamentos cuando los necesites",
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Ferreterías",
      description: "Herramientas y materiales a domicilio",
    },
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Servicio 24/7",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Entregas rápidas",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      text: "Atención personalizada",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Pago en efectivo o transferencia",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-3xl">⚜️</div>
            <div>
              <h1 className="text-2xl font-bold text-mayin-primary">MAYIN EXPRESS</h1>
              <p className="text-xs text-gray-600">GRUPO MAYIN</p>
            </div>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all shadow-md hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Pedir ahora</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-mayin-accent/20 text-mayin-primary px-4 py-2 rounded-full mb-6">
            <span className="font-semibold">🚀 Tu aliado de entregas 24/7</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Lo que necesites,<br />
            <span className="text-mayin-primary">cuando lo necesites</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            El servicio de entregas a domicilio de confianza en Zaragoza, Puebla y municipios cercanos.
            Compramos y entregamos de cualquier local hasta tu puerta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mayin-primary hover:bg-mayin-secondary text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Hacer mi pedido</span>
            </a>
            <a
              href="#servicios"
              className="border-2 border-mayin-primary text-mayin-primary hover:bg-mayin-primary hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-mayin-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                {feature.icon}
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué entregamos?
          </h3>
          <p className="text-xl text-gray-600">
            De cualquier local o tienda en la región
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-mayin-primary mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona?
            </h3>
            <p className="text-xl text-gray-600">
              Tan fácil como 1, 2, 3
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-mayin-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Contáctanos</h4>
              <p className="text-gray-600">
                Mándanos mensaje por WhatsApp diciendo qué necesitas y de dónde
              </p>
            </div>
            <div className="text-center">
              <div className="bg-mayin-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Compramos por ti</h4>
              <p className="text-gray-600">
                Vamos al local, compramos tu pedido y te confirmamos el costo total
              </p>
            </div>
            <div className="text-center">
              <div className="bg-mayin-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Te lo llevamos</h4>
              <p className="text-gray-600">
                Entregamos en tu domicilio y pagas en efectivo o transferencia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-mayin-primary to-mayin-secondary rounded-2xl p-8 md:p-12 text-white text-center">
          <MapPin className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Cobertura en toda la región
          </h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Zaragoza, Puebla y municipios cercanos. Si no estás seguro si llegamos a tu zona, ¡pregúntanos!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para tu pedido?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Estamos disponibles 24/7 para atenderte por WhatsApp
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            <Phone className="w-6 h-6" />
            <span>Enviar mensaje al {whatsappNumber}</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="text-3xl">⚜️</div>
              <div>
                <h4 className="text-2xl font-bold">MAYIN EXPRESS</h4>
                <p className="text-sm text-gray-400">Parte de GRUPO MAYIN</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Tu mejor aliado en Zaragoza, Puebla
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>{whatsappNumber}</span>
              </a>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 GRUPO MAYIN. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
