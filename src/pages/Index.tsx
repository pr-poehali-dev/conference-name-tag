import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [name, setName] = useState('Веретенникова Светлана Александровна');
  const [position, setPosition] = useState('');
  const [city, setCity] = useState('Кузнецк');
  const [party, setParty] = useState('Член Партии Единая Россия');
  const [org, setOrg] = useState('Резидент Общероссийской общественной организации «Опора России»');

  const nameSize =
    name.length > 28 ? 'text-xl' : name.length > 20 ? 'text-2xl' : 'text-3xl';

  return (
    <div className="min-h-screen bg-[#f4f2ee] text-neutral-900 font-sans flex flex-col">
      <header className="border-b border-neutral-300/70 px-8 py-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 border border-neutral-900 flex items-center justify-center">
              <Icon name="IdCard" size={18} />
            </div>
            <span className="font-serif text-xl tracking-wide">Конференц-табличка</span>
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 hidden sm:block">
            Corporate · 100 × 50 мм
          </span>
        </div>
      </header>

      <main className="flex-1 px-8 py-12">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <section className="animate-fade-in">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
              Генератор
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight mb-8">
              Именная табличка<br />для конференции
            </h1>

            <div className="space-y-7">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                  Имя и фамилия
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите имя"
                  className="w-full bg-transparent border-b border-neutral-400 py-2 text-lg outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                  Должность
                </label>
                <input
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Введите должность"
                  className="w-full bg-transparent border-b border-neutral-400 py-2 text-lg outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                  Город
                </label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Введите город"
                  className="w-full bg-transparent border-b border-neutral-400 py-2 text-lg outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                  Партия / статус
                </label>
                <input
                  value={party}
                  onChange={(e) => setParty(e.target.value)}
                  placeholder="Например: Член Партии Единая Россия"
                  className="w-full bg-transparent border-b border-neutral-400 py-2 text-lg outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                  Организация
                </label>
                <input
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="Например: Резидент ОО «Опора России»"
                  className="w-full bg-transparent border-b border-neutral-400 py-2 text-lg outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
                />
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="mt-10 inline-flex items-center gap-2 bg-neutral-900 text-[#f4f2ee] px-7 py-3.5 text-sm uppercase tracking-[0.15em] hover:bg-neutral-700 transition-colors"
            >
              <Icon name="Printer" size={16} />
              Печать таблички
            </button>
          </section>

          <section className="flex flex-col items-center lg:items-end">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4 self-start lg:self-center">
              Предпросмотр
            </p>
            <div
              className="relative w-full rounded-sm overflow-hidden flex items-center justify-center"
              style={{
                backgroundImage: 'url(https://cdn.poehali.dev/projects/38990285-0136-4b1a-8abb-e468aedd2d68/files/7159fd79-e9f3-4ab0-ac61-701b18ce3f37.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '320px',
                padding: '40px 24px',
              }}
            >
              <div className="absolute inset-0 bg-black/20" />
            <div
              id="badge-print"
              className="relative bg-white flex flex-col items-center justify-center text-center px-8"
              style={{
                width: '340px',
                height: '200px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.2)',
                transform: 'rotate(-1.8deg)',
              }}
            >
              <div className="w-10 h-px bg-neutral-900 mb-5" />
              <h2 className={`font-serif ${nameSize} text-neutral-900 leading-tight transition-all`}>
                {name || 'Имя Фамилия'}
              </h2>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-neutral-600">
                {position || 'Должность'}
              </p>
              {party && (
                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-neutral-400 px-4">
                  {party}
                </p>
              )}
              {org && (
                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-neutral-400 leading-snug px-4">
                  {org}
                </p>
              )}
              {city && (
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  {city}
                </p>
              )}
              <div className="w-10 h-px bg-neutral-900 mt-4" />
            </div>
            </div>
            <p className="mt-4 text-xs text-neutral-500">
              Реальный размер при печати — 100 × 50 мм
            </p>
          </section>
        </div>
      </main>

      <footer className="px-8 py-6 text-center text-xs text-neutral-400 tracking-wide">
        Строгий корпоративный стиль · Cormorant Garamond
      </footer>
    </div>
  );
};

export default Index;