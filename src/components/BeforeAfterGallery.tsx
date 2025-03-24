
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const BeforeAfterGallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const galleryItems = [
    {
      title: "Гостиная",
      before: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Генеральная уборка после длительного проживания"
    },
    {
      title: "Кухня",
      before: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      description: "Комплексная чистка кухонных поверхностей"
    },
    {
      title: "Санузел",
      before: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Дезинфекция и удаление сложных загрязнений"
    },
    {
      title: "Офис",
      before: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      description: "Еженедельная уборка офисного помещения"
    }
  ];

  return (
    <section id="gallery" className="section-container">
      <div className="text-center mb-12">
        <div className="chip bg-clean-100 text-clean-700 mb-4">Примеры работ</div>
        <h2 className="section-title">До и После</h2>
        <p className="section-subtitle">
          Взгляните на результаты нашей работы. Фотографии сделаны до и после оказания услуг клининга.
        </p>
      </div>

      <div className="relative">
        {/* Main slides */}
        <div className="relative bg-neutral-100 rounded-2xl overflow-hidden shadow-xl">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "transition-opacity duration-500",
                activeSlide === index ? "opacity-100" : "opacity-0 absolute inset-0"
              )}
            >
              <div className="relative h-[500px] md:h-[600px] w-full">
                {/* Comparison slider */}
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  {/* Before image (full width) */}
                  <div className="absolute inset-0">
                    <img 
                      src={item.before} 
                      alt={`До: ${item.title}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="bg-black/60 text-white px-6 py-2 rounded-full font-medium">До</span>
                    </div>
                  </div>
                  
                  {/* After image (partial width based on slider) */}
                  <div 
                    className="absolute inset-y-0 right-0 bg-white overflow-hidden"
                    style={{ width: "50%" }}
                  >
                    <img 
                      src={item.after}
                      alt={`После: ${item.title}`}
                      className="absolute h-full object-cover"
                      style={{ 
                        width: "200%", 
                        right: "0",
                        objectPosition: "right center" 
                      }}
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <span className="bg-clean-500/90 text-white px-6 py-2 rounded-full font-medium">После</span>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div 
                    className="absolute inset-y-0 pointer-events-none"
                    style={{ left: "50%" }}
                  >
                    <div className="absolute inset-y-0 w-0.5 bg-white shadow-lg"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <svg 
                        className="w-6 h-6 text-neutral-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M8 7h8M8 12h8M8 17h8M3 3v18M21 3v18"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={() => setActiveSlide(prev => (prev === 0 ? galleryItems.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
        >
          <svg 
            className="w-6 h-6 text-neutral-800" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        
        <button 
          onClick={() => setActiveSlide(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
        >
          <svg 
            className="w-6 h-6 text-neutral-800" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
        
        {/* Thumbnails */}
        <div className="flex justify-center mt-6 gap-3">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                activeSlide === index 
                  ? "bg-clean-500 scale-125" 
                  : "bg-neutral-300 hover:bg-neutral-400"
              )}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <a href="#contact" className="btn-primary">
          Заказать уборку
        </a>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
