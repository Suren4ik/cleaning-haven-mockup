
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    author: "Анна Смирнова",
    position: "Домохозяйка",
    image: "",
    content: "Заказывала генеральную уборку после ремонта. Команда приехала вовремя, работали очень аккуратно и профессионально. Результат превзошел ожидания - квартира засияла чистотой! Буду обращаться снова.",
    rating: 5
  },
  {
    id: 2,
    author: "Сергей Иванов",
    position: "Предприниматель",
    image: "",
    content: "Пользуюсь услугами компании уже больше года для уборки офиса. Всегда качественно, внимательно к деталям и без напоминаний. Отличный сервис, рекомендую всем знакомым.",
    rating: 5
  },
  {
    id: 3,
    author: "Екатерина Петрова",
    position: "Менеджер",
    image: "",
    content: "Очень довольна работой клининговой компании. Заказываю ежемесячную уборку квартиры. Всегда оперативно, качественно и по разумной цене. Отдельное спасибо за внимание к мелочам!",
    rating: 5
  },
  {
    id: 4,
    author: "Михаил Федоров",
    position: "Инженер",
    image: "",
    content: "Работой доволен. Заказывал мытье окон и генеральную уборку. Цена соответствует качеству. Единственное, хотелось бы, чтобы компания приезжала немного пораньше, но это мелочи.",
    rating: 4
  },
  {
    id: 5,
    author: "Ольга Козлова",
    position: "Врач",
    image: "",
    content: "Регулярно заказываю уборку своей квартиры. Очень нравится результат - всегда чисто, аккуратно и приятно пахнет. Клинеры вежливые и внимательные к просьбам. Рекомендую!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        className={cn(
          "w-5 h-5", 
          index < rating ? "text-yellow-400" : "text-neutral-300"
        )}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L14.39 8.26L21 9.27L16.5 14.14L17.77 21.02L12 17.77L6.23 21.02L7.5 14.14L3 9.27L9.61 8.26L12 2Z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="section-container">
      <div className="text-center mb-12">
        <div className="chip bg-clean-100 text-clean-700 mb-4">Отзывы</div>
        <h2 className="section-title">Что говорят наши клиенты</h2>
        <p className="section-subtitle">
          Мнение наших клиентов очень важно для нас. Мы ценим каждый отзыв и постоянно работаем над улучшением качества услуг.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white" 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-neutral-700 mb-4 italic">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-800">{testimonial.author}</h4>
                        <p className="text-neutral-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex 
                  ? "bg-clean-500 scale-125" 
                  : "bg-neutral-300 hover:bg-neutral-400"
              )}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Arrow buttons for larger screens */}
        <button 
          onClick={() => setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
          className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-clean-50 transition-colors"
          aria-label="Предыдущий отзыв"
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
          onClick={() => setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 rounded-full bg-white shadow-lg items-center justify-center hover:bg-clean-50 transition-colors"
          aria-label="Следующий отзыв"
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
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-neutral-600 mb-6">
          Присоединяйтесь к нашим довольным клиентам и оцените качество нашей работы.
        </p>
        <a href="#contact" className="btn-primary">
          Заказать услугу
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
