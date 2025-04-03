
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type PricingOption = 'hourly' | 'area';

const PricingSection = () => {
  const [pricingOption, setPricingOption] = useState<PricingOption>('hourly');

  const hourlyPricing = [
    {
      service: 'Стандартная уборка',
      price: '1500',
      unit: 'час',
      features: [
        'Минимальный заказ от 3 часов',
        'Использование наших средств'
      ]
    },
    {
      service: 'Генеральная уборка',
      price: '2000',
      unit: 'час',
      features: [
        'Минимальный заказ от 5 часов',
        'Профессиональное оборудование'
      ]
    },
    {
      service: 'Уборка после ремонта',
      price: '2500',
      unit: 'час',
      features: [
        'Минимальный заказ от 6 часов',
        'Специальное оборудование'
      ]
    }
  ];

  const areaPricing = [
    {
      service: 'Стандартная уборка',
      price: '80',
      unit: 'м²',
      features: [
        'Минимальный заказ от 40 м²',
        'Использование наших средств'
      ]
    },
    {
      service: 'Генеральная уборка',
      price: '150',
      unit: 'м²',
      features: [
        'Минимальный заказ от 40 м²',
        'Профессиональное оборудование'
      ]
    },
    {
      service: 'Уборка после ремонта',
      price: '200',
      unit: 'м²',
      features: [
        'Минимальный заказ от 40 м²',
        'Специальное оборудование'
      ]
    }
  ];

  const additionalServices = [
    { service: 'Мытье окон', price: '800', unit: 'окно' },
    { service: 'Химчистка дивана', price: '2000', unit: 'посадочное место' },
    { service: 'Химчистка ковра', price: '150', unit: 'м²' },
    { service: 'Мытье люстр', price: '500', unit: 'шт.' },
    { service: 'Уборка балкона', price: '1000', unit: 'шт.' },
    { service: 'Дезинфекция санузла', price: '1500', unit: 'комната' }
  ];

  return (
    <section id="pricing" className="section-container bg-neutral-50">
      <div className="text-center mb-12">
        <div className="chip bg-clean-100 text-clean-700 mb-4">Цены</div>
        <h2 className="section-title">Стоимость услуг</h2>
        <p className="section-subtitle">
          Мы предлагаем гибкую систему оплаты. Выберите наиболее удобный для вас вариант расчета стоимости услуг.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-white p-1 rounded-lg shadow-md flex">
          <button
            className={cn(
              "px-6 py-3 rounded-lg transition-all duration-300 font-medium",
              pricingOption === 'hourly' 
                ? "bg-clean-500 text-white shadow-md" 
                : "hover:bg-neutral-100"
            )}
            onClick={() => setPricingOption('hourly')}
          >
            Почасовая оплата
          </button>
          <button
            className={cn(
              "px-6 py-3 rounded-lg transition-all duration-300 font-medium",
              pricingOption === 'area' 
                ? "bg-clean-500 text-white shadow-md" 
                : "hover:bg-neutral-100"
            )}
            onClick={() => setPricingOption('area')}
          >
            За площадь
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {(pricingOption === 'hourly' ? hourlyPricing : areaPricing).map((item, index) => (
          <div 
            key={index} 
            className={cn(
              "bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl",
              index === 1 ? "ring-2 ring-clean-500" : ""
            )}
          >
            {index === 1 && (
              <div className="bg-clean-500 text-white text-center py-2 font-medium">
                Популярный выбор
              </div>
            )}
            <div className="p-8">
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">{item.service}</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-neutral-800">{item.price} ₽</span>
                <span className="text-neutral-500 ml-1">/ {item.unit}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-clean-500 mt-0.5 mr-2 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={cn(
                  "block text-center py-3 rounded-lg font-medium transition-colors duration-300",
                  index === 1 
                    ? "bg-clean-500 text-white hover:bg-clean-600" 
                    : "bg-clean-100 text-clean-700 hover:bg-clean-200"
                )}
              >
                Заказать
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-neutral-800 mb-6">Дополнительные услуги</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className="flex justify-between items-center border-b border-neutral-100 pb-4">
              <span className="text-neutral-700">{service.service}</span>
              <span className="font-medium text-neutral-800">{service.price} ₽ / {service.unit}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-neutral-600">
          <p className="text-sm">
            * Указанные цены являются базовыми. Окончательная стоимость определяется после осмотра объекта или консультации с менеджером.
          </p>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <a href="#contact" className="btn-primary">
          Получить точный расчет
        </a>
      </div>
    </section>
  );
};

export default PricingSection;
