import React from "react";

// ! Imagen inicial de la página
function Hero() {
  return (
    <div className="max-w-[1640] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center rounded-xl">
          <h1 className="px-4 sm:text-4xl md: text-5xl lg:text-7xl font-bold">
            Los <span className="text-pink-600">Mejores</span>
          </h1>
          <h1 className="px-4 sm:text-4xl md: text-5xl lg:text-7xl font-bold">
            <span className="text-pink-600">Diseños</span> para ti
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover c rounded-xl"
          // src="https://images.pexels.com/photos/94843/pexels-photo-94843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src="https://images.pexels.com/photos/147637/pexels-photo-147637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="burger-main-img"
        />
      </div>
    </div>
  );
}

export default Hero;
