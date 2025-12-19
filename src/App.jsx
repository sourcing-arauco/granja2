import React, { useState } from 'react';
import { Volume2, VolumeX, Music, Cloud, Sun } from 'lucide-react';

const FarmLandscape = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  const [volume, setVolume] = useState(1);
  const [playingName, setPlayingName] = useState("");

  // Función auxiliar para generar URLs confiables
  const getGoogleSound = (animal) => `https://www.google.com/logos/fnbx/animal_sounds/${animal}.mp3`;

  const animals = [
    // --- CIELO ---
    {
      id: 11,
      name: "El Búho",
      emoji: "🦉",
      audioUrl: getGoogleSound("owl"),
      x: 14, y: 18, // En la rama del árbol
      size: "text-5xl",
      isFlying: false
    },
    {
      id: 10,
      name: "La Abeja",
      emoji: "🐝",
      audioUrl: getGoogleSound("bee"),
      x: 85, y: 15,
      size: "text-4xl",
      isFlying: true
    },
    
    // --- ESTRUCTURAS ---
    {
      id: 3,
      name: "El Gallo",
      emoji: "🐓",
      audioUrl: getGoogleSound("rooster"),
      x: 50, y: 28,
      size: "text-6xl",
      zIndex: 20
    },

    // --- AGUA ---
    {
      id: 5,
      name: "El Pato",
      emoji: "🦆",
      audioUrl: getGoogleSound("duck"),
      x: 90, y: 80,
      size: "text-5xl",
      isInWater: true
    },
    {
      id: 15,
      name: "El Sapo",
      emoji: "🐸",
      audioUrl: getGoogleSound("frog"),
      x: 78, y: 88,
      size: "text-4xl",
    },

    // --- CAMPO ABIERTO ---
    {
      id: 1,
      name: "La Vaca",
      emoji: "🐄",
      audioUrl: getGoogleSound("cow"),
      x: 35, y: 55, // MOVIDA: Más a la derecha para no tapar el árbol
      size: "text-9xl",
      flip: true
    },
    {
      id: 6,
      name: "El Caballo",
      emoji: "🐎",
      audioUrl: getGoogleSound("horse"),
      x: 80, y: 50,
      size: "text-8xl",
      flip: true
    },
    {
      id: 4,
      name: "La Oveja",
      emoji: "🐑",
      audioUrl: getGoogleSound("sheep"),
      x: 50, y: 65, // Ajustada ligeramente para dar espacio a la vaca
      size: "text-6xl",
    },
    
    // --- CERCA DEL GRANERO ---
    {
      id: 13,
      name: "La Gallina",
      emoji: "🐓",
      audioUrl: getGoogleSound("chicken"),
      x: 25, y: 70, // MOVIDA: Lejos del árbol
      size: "text-5xl",
      flip: true
    },
    {
      id: 7,
      name: "El Gato",
      emoji: "🐈",
      audioUrl: getGoogleSound("cat"),
      x: 70, y: 60,
      size: "text-4xl",
    },

    // --- PRIMER PLANO ---
    {
      id: 2,
      name: "El Cerdo",
      emoji: "🐖",
      audioUrl: getGoogleSound("pig"),
      x: 60, y: 80, // Ajustado
      size: "text-7xl",
    },
    {
      id: 8,
      name: "El Perro",
      emoji: "🐕",
      audioUrl: getGoogleSound("dog"),
      x: 72, y: 75,
      size: "text-6xl",
      flip: true
    },
    {
      id: 9,
      name: "El Pavo",
      emoji: "🦃",
      audioUrl: getGoogleSound("turkey"),
      x: 92, y: 45,
      size: "text-6xl",
      flip: true
    },
    
    // --- ESQUINAS ---
    {
      id: 12,
      name: "El Elefante",
      emoji: "🐘",
      audioUrl: getGoogleSound("elephant"),
      x: 12, y: 85, // En la esquina inferior izquierda
      size: "text-8xl",
      flip: true
    },
    {
      id: 14,
      name: "El León",
      emoji: (
        <div className="relative w-28 h-24 flex items-end">
           <svg viewBox="0 0 100 80" className="absolute bottom-0 left-0 w-full h-full text-amber-600 drop-shadow-sm">
              <path d="M20,45 Q25,35 45,35 L65,35 Q85,35 85,55 L85,75 Q85,80 75,80 L70,80 L70,60 L40,60 L40,80 L25,80 Q15,80 15,60 Z" fill="currentColor" />
              <path d="M15,60 Q5,50 10,30" stroke="currentColor" strokeWidth="4" fill="none" />
              <circle cx="10" cy="30" r="4" fill="currentColor" />
           </svg>
           <div className="absolute top-0 right-2 text-6xl drop-shadow-md transform translate-y-2">
             🦁
           </div>
        </div>
      ),
      audioUrl: getGoogleSound("lion"),
      x: 35, y: 85, // Ajustado para acompañar
      size: "", 
      flip: false
    }
  ];

  const playSound = (animal) => {
    if (volume === 0) return;

    setActiveAnimal(animal.id);
    setPlayingName(animal.name);
    
    setTimeout(() => {
        setActiveAnimal(null);
        setPlayingName("");
    }, 2000);

    const audio = new Audio(animal.audioUrl);
    audio.volume = volume;
    
    audio.play().catch(error => {
        console.error(`Error al reproducir el sonido de ${animal.name}:`, error);
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans select-none bg-sky-200">
      
      {/* --- CIELO (Gradient Suave) --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-300 to-sky-100 z-0"></div>

      {/* Sol Brillante */}
      <div className="absolute top-8 right-12 text-yellow-300 animate-pulse-slow z-0">
        <Sun size={100} fill="#FDB813" stroke="none" className="drop-shadow-lg" />
      </div>

      {/* Nubes */}
      <div className="absolute top-20 left-10 text-white/80 opacity-90 animate-float-slow">
        <Cloud size={90} fill="currentColor" className="drop-shadow-sm" />
      </div>
      <div className="absolute top-10 right-1/3 text-white/60 opacity-70">
        <Cloud size={60} fill="currentColor" />
      </div>

      {/* --- PAISAJE --- */}
      
      {/* Montaña lejana */}
      <div className="absolute bottom-[20%] left-0 w-full h-full bg-emerald-800 rounded-t-[100%] scale-x-150 translate-y-1/2 opacity-60 z-0"></div>
      
      {/* Colina Principal */}
      <div className="absolute bottom-0 w-full h-[65%] bg-gradient-to-t from-green-800 via-green-600 to-green-500 rounded-t-[30%] scale-110 z-1 shadow-2xl"></div>

      {/* --- ELEMENTOS DECORATIVOS --- */}

      {/* Lago Grande (Derecha) */}
      <div className="absolute bottom-0 right-[-5%] w-[40%] h-[35%] z-2">
        <div className="w-full h-full bg-blue-500 rounded-tl-[100px] border-l-8 border-t-8 border-green-700/40 opacity-90 shadow-inner"></div>
      </div>

      {/* Árbol (Izquierda) */}
      <div className="absolute top-[15%] left-[2%] w-64 h-96 z-2">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-48 bg-amber-900 rounded-lg"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-green-800 rounded-full shadow-lg translate-y-10"></div>
        <div className="absolute top-5 left-4 w-48 h-48 bg-green-700 rounded-full shadow-lg"></div>
      </div>

      {/* Granero (Centro-Atrás) */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center drop-shadow-xl scale-90 md:scale-100">
        <div className="relative z-20">
            <div className="w-0 h-0 border-l-[120px] border-l-transparent border-r-[120px] border-r-transparent border-b-[90px] border-b-red-900"></div>
        </div>
        <div className="w-60 h-44 bg-red-700 border-x-8 border-red-900 relative shadow-inner">
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(transparent_90%,#000_90%)] bg-[length:10px_20px]"></div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-32 bg-amber-950 p-2 rounded-t-lg shadow-inner">
                <div className="w-full h-full border-2 border-amber-800 bg-amber-900/50"></div>
             </div>
             <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-sky-900 rounded-full border-4 border-white"></div>
        </div>
      </div>

      {/* --- ANIMALES --- */}
      {animals.map((animal) => (
        <button
          key={animal.id}
          onClick={() => playSound(animal)}
          style={{ 
            left: `${animal.x}%`, 
            top: `${animal.y}%`,
            zIndex: animal.zIndex || 10 
          }}
          className={`
            absolute transform -translate-x-1/2 -translate-y-1/2
            transition-all duration-300 ease-out cursor-pointer
            group focus:outline-none select-none
            ${activeAnimal === animal.id ? 'scale-125 z-50' : 'hover:scale-110 hover:-translate-y-2'}
            ${animal.isFlying ? 'animate-float' : ''}
            ${animal.isInWater ? 'animate-float-slow' : ''}
          `}
          aria-label={animal.name}
        >
          {/* Sombra sutil debajo del animal */}
          {!animal.isFlying && !animal.isInWater && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-black/20 rounded-full blur-sm group-hover:w-full transition-all"></div>
          )}

          {/* Renderizado condicional: Si es JSX (León) o String (Emoji normal) */}
          <div className={`
            ${animal.size} 
            drop-shadow-md filter 
            ${animal.flip ? '-scale-x-100' : ''}
            ${activeAnimal === animal.id ? 'animate-wiggle' : ''}
          `}>
            {animal.emoji}
          </div>
          
          {/* Etiqueta flotante */}
          <div className={`
            absolute -top-12 left-1/2 -translate-x-1/2 
            bg-white/90 text-gray-800 px-3 py-1 rounded-xl text-sm font-bold shadow-lg
            whitespace-nowrap pointer-events-none transition-all duration-300 border-2 border-sky-400
            ${activeAnimal === animal.id ? 'opacity-100 scale-110' : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'}
          `}>
            {animal.name}
          </div>
          
        </button>
      ))}

      {/* --- TARJETA DE NOMBRE ACTIVO --- */}
      {playingName && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 animate-fade-in-down w-full max-w-md px-4">
          <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-4 border-b-8 border-green-500 flex items-center justify-center gap-4 transform transition-all">
             <div className="bg-green-100 p-3 rounded-full animate-pulse">
                <Volume2 className="text-green-600 w-8 h-8" />
             </div>
             <div className="text-center">
                 <p className="text-xs text-green-600 font-bold uppercase tracking-widest mb-1">SONIDO DE</p>
                 <h2 className="text-4xl font-black text-gray-800 tracking-tight">{playingName}</h2>
             </div>
          </div>
        </div>
      )}

      {/* --- CONTROL DE VOLUMEN --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
            onClick={() => setVolume(v => v === 1 ? 0 : 1)}
            className="bg-white p-4 rounded-full shadow-2xl hover:bg-gray-50 transition-all transform hover:scale-110 border-4 border-sky-400"
        >
            {volume > 0 ? (
                <Music className="text-sky-600 w-6 h-6" />
            ) : (
                <VolumeX className="text-gray-400 w-6 h-6" />
            )}
        </button>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          50% { transform: translate(-50%, -50%) rotate(3deg); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg) scale(1.2); }
          25% { transform: rotate(-10deg) scale(1.3); }
          75% { transform: rotate(10deg) scale(1.3); }
        }
        @keyframes fade-in-down {
            from { opacity: 0; transform: translate(-50%, -30px); }
            to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 0.6s ease-in-out infinite; }
        .animate-fade-in-down { animation: fade-in-down 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}} />

    </div>
  );
};

export default FarmLandscape;
