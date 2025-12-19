import React, { useState } from 'react';
import { Volume2, Music, Star } from 'lucide-react';

const FarmAnimals = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  const [volume, setVolume] = useState(1); // 1 is max, 0 is muted

  const animals = [
    {
      id: 1,
      name: "La Vaca",
      emoji: "🐮",
      color: "bg-white border-black",
      textColor: "text-black",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/cow.mp3",
      borderColor: "border-gray-800"
    },
    {
      id: 2,
      name: "El Cerdo",
      emoji: "🐷",
      color: "bg-pink-200 border-pink-400",
      textColor: "text-pink-800",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/pig.mp3",
      borderColor: "border-pink-400"
    },
    {
      id: 3,
      name: "El Gallo",
      emoji: "🐓",
      color: "bg-orange-100 border-orange-500",
      textColor: "text-orange-900",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/rooster.mp3",
      borderColor: "border-orange-500"
    },
    {
      id: 4,
      name: "La Oveja",
      emoji: "🐑",
      color: "bg-slate-100 border-slate-300",
      textColor: "text-slate-700",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/sheep.mp3",
      borderColor: "border-slate-300"
    },
    {
      id: 5,
      name: "El Pato",
      emoji: "🦆",
      color: "bg-green-100 border-green-600",
      textColor: "text-green-800",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/duck.mp3",
      borderColor: "border-green-600"
    },
    {
      id: 6,
      name: "El Caballo",
      emoji: "🐴",
      color: "bg-amber-800 border-amber-900",
      textColor: "text-white",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/horse.mp3",
      borderColor: "border-amber-950"
    },
    {
      id: 7,
      name: "El Gato",
      emoji: "🐱",
      color: "bg-gray-200 border-gray-400",
      textColor: "text-gray-800",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/cat.mp3",
      borderColor: "border-gray-500"
    },
    {
      id: 8,
      name: "El Perro",
      emoji: "🐶",
      color: "bg-yellow-100 border-yellow-600",
      textColor: "text-yellow-900",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/dog.mp3",
      borderColor: "border-yellow-600"
    },
    {
      id: 9,
      name: "El Pavo",
      emoji: "🦃",
      color: "bg-amber-100 border-amber-600",
      textColor: "text-amber-900",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/turkey.mp3",
      borderColor: "border-amber-600"
    },
    {
      id: 10,
      name: "La Abeja",
      emoji: "🐝",
      color: "bg-yellow-400 border-yellow-700",
      textColor: "text-yellow-950",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/bee.mp3",
      borderColor: "border-yellow-700"
    },
    {
      id: 11,
      name: "El Búho",
      emoji: "🦉",
      color: "bg-stone-200 border-stone-600",
      textColor: "text-stone-800",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/owl.mp3",
      borderColor: "border-stone-600"
    },
    {
      id: 12,
      name: "El Elefante",
      emoji: "🐘",
      color: "bg-slate-300 border-slate-600",
      textColor: "text-slate-900",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/elephant.mp3",
      borderColor: "border-slate-600"
    },
    {
      id: 13,
      name: "La Gallina",
      emoji: "🐔",
      color: "bg-red-50 border-red-400",
      textColor: "text-red-900",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/chicken.mp3",
      borderColor: "border-red-400"
    },
    {
      id: 14,
      name: "El León",
      emoji: "🦁",
      color: "bg-orange-300 border-orange-700",
      textColor: "text-orange-950",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/lion.mp3",
      borderColor: "border-orange-700"
    },
    {
      id: 15,
      name: "El Sapo",
      emoji: "🐸",
      color: "bg-emerald-300 border-emerald-700",
      textColor: "text-emerald-900",
      audioUrl: "https://www.google.com/logos/fnbx/animal_sounds/frog.mp3",
      borderColor: "border-emerald-700"
    }
  ];

  const playSound = (animal) => {
    if (volume === 0) return;

    // Set active animation state
    setActiveAnimal(animal.id);
    setTimeout(() => setActiveAnimal(null), 1000);

    // Create and play real audio
    const audio = new Audio(animal.audioUrl);
    audio.volume = volume;
    
    // Handle potential play errors (e.g., if user hasn't interacted yet)
    audio.play().catch(error => {
      console.error("Error al reproducir sonido:", error);
    });
  };

  return (
    <div className="min-h-screen bg-sky-300 font-sans p-4 relative overflow-hidden">
      {/* Background decoration - Clouds and Grass */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-green-500 z-0 rounded-t-[50px] border-t-8 border-green-600"></div>
      <div className="fixed top-10 left-10 text-white opacity-50 animate-pulse hidden md:block">☁️</div>
      <div className="fixed top-20 right-20 text-white opacity-50 animate-pulse hidden md:block">☁️</div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-8 bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl border-b-8 border-sky-600">
          <h1 className="text-3xl md:text-5xl font-black text-sky-600 tracking-wider flex items-center justify-center gap-3">
            <Star className="text-yellow-400 w-8 h-8 md:w-12 md:h-12 fill-current animate-spin-slow" />
            La Granja Divertida
            <Star className="text-yellow-400 w-8 h-8 md:w-12 md:h-12 fill-current animate-spin-slow" />
          </h1>
          <p className="text-gray-500 mt-2 font-medium text-lg">
            ¡Toca un animal para escuchar su sonido real!
          </p>
        </header>

        {/* Animals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-20">
          {animals.map((animal) => (
            <button
              key={animal.id}
              onClick={() => playSound(animal)}
              className={`
                relative group transition-all duration-150 transform
                ${activeAnimal === animal.id ? 'scale-95 translate-y-2' : 'hover:scale-105 hover:-translate-y-1'}
                ${animal.color}
                border-b-8 ${animal.borderColor}
                rounded-3xl p-6
                flex flex-col items-center justify-center
                shadow-xl cursor-pointer
                h-48 md:h-56
              `}
            >
              <div className={`text-6xl md:text-8xl mb-4 transition-transform duration-300 ${activeAnimal === animal.id ? 'animate-bounce' : 'group-hover:rotate-12'}`}>
                {animal.emoji}
              </div>
              <span className={`text-xl md:text-2xl font-black ${animal.textColor} uppercase tracking-wide`}>
                {animal.name}
              </span>
              
              {/* Sound visual indicator */}
              {activeAnimal === animal.id && (
                <div className="absolute top-2 right-2 animate-ping">
                  <Volume2 className={animal.textColor} size={24} />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Footer / Controls */}
        <div className="fixed bottom-4 right-4 z-20">
            <div className="bg-white p-3 rounded-full shadow-lg border-4 border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setVolume(v => v === 1 ? 0 : 1)}>
                <Music className={volume > 0 ? "text-green-500" : "text-gray-300"} size={24} />
            </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </div>
  );
};

export default FarmAnimals;