
import React, { useState } from 'react';
import { toast } from "sonner";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'standard',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'standard',
      date: '',
      message: '',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" id="hero">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-clean-50 to-white z-0"></div>
      
      {/* Animated bubbles for background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble-container">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-clean-100/40 animate-float" 
              style={{
                width: `${Math.random() * 150 + 50}px`,
                height: `${Math.random() * 150 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 7 + 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-10 md:px-12 lg:px-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="chip bg-clean-100 text-clean-700 mb-4">Профессиональный клининг</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-800 leading-tight">
              Чистота в вашем доме — наша забота
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl">
              Профессиональные услуги клининга для вашего дома или офиса. Доверьте уборку профессионалам и получите безупречный результат.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">
                Наши услуги
              </a>
              <a href="#contact" className="px-6 py-3 border border-clean-500 text-clean-500 font-medium rounded-lg hover:bg-clean-50 transition-all duration-300">
                Связаться с нами
              </a>
            </div>
          </div>

          <div className="glass p-6 md:p-8 animate-fade-in-right">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Оставить заявку</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="example@mail.ru"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                  Тип уборки
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="standard">Стандартная уборка</option>
                  <option value="deep">Генеральная уборка</option>
                  <option value="office">Офисная уборка</option>
                  <option value="windows">Мытье окон</option>
                  <option value="after-repair">Уборка после ремонта</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
                  Предпочтительная дата
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Комментарий
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input min-h-[100px] resize-none"
                  placeholder="Укажите детали, площадь помещения и другую важную информацию..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full btn-primary"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
