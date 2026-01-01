import React from 'react';
import { useInView } from './useInView';
export const AboutPage = () => {
  const image1 = useInView();
  const image2 = useInView();
  return <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-center">
        {/* Main Content */}
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold text-sky-950 mb-12 font-['Inter']">
            About
          </h1>

          {/* Wide Image */}
          <div ref={image1.ref} className={`mb-6 transition-all duration-700 ease-out ${image1.inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}>
            <img src="https://drive.google.com/thumbnail?id=1o9lftPmoLJkFzg1ewbo2oLkvjgs4d5Dx&sz=w2000" alt="Owen Au research and analysis" className="w-full w-max-933 h-auto rounded-[15px] shadow-[2px_2px_2px_0px_rgba(0,89,173,0.50)]" />
          </div>

          <p className="text-sky-950 mb-6 leading-relaxed text-sm font-semibold font-['Inter']">
            Owen Au is an independent analyst specialising in China's maritime
            strategy and foreign relations, as well as political transformation
            and securitisation in Hong Kong.
          </p>

          <p className="text-sky-950 mb-6 leading-relaxed text-sm font-['Inter']">
            After his undergraduate studies at the Chinese University of Hong
            Kong, he conducted policy research in Hong Kong following the
            enactment of the National Security Law and subsequent political
            restructuring. He later pursued a Master's degree in International
            Studies and Diplomacy at SOAS, University of London, where he began
            studying China's maritime ambitions and foreign relations.
          </p>

          <p className="text-sky-950 mb-6 leading-relaxed text-sm font-['Inter']">
            Since completing his Master's degree, he has continued to work as an
            independent analyst based in London, collaborating with think tanks
            and organisations across the United Kingdom and the United States.
            He is interested in expanding his work to European security and
            foreign policy debates on China.
          </p>

          <div className="clearfix">
            <img src="https://drive.google.com/thumbnail?id=1r68SZvDswRemcIOj72RblB9xi9-c3frx&sz=w2000" alt="Owen Au portrait" className="float-right w-48 ml-8 mb-4 h-auto rounded-[15px] shadow-[2px_2px_2px_0px_rgba(0,89,173,0.50)]" />

            <p className="text-sky-950 mb-6 leading-relaxed text-sm font-['Inter']">
              His work is widely published in policy journals and think tanks in
              Europe and the United States, including The Diplomat, The
              Jamestown Foundation, the Council on Geostrategy, and China
              Observers in Central and Eastern Europe (CHOICE).
            </p>

            <p className="text-sky-950 mb-6 leading-relaxed text-sm font-['Inter']">
              He currently manages{' '}
              <span className="italic font-medium">China Maritime Watch</span>,
              a Substack newsletter that monitors China's comprehensive sea
              power agenda through primary-source analysis and is updated
              biweekly.
            </p>
          </div>

          <p className="text-sky-950 mb-6 leading-relaxed text-sm font-['Inter']">
            Owen is open to project-based collaboration, research partnerships,
            and commissioned analysis, and welcomes enquiries related to his
            work.
          </p>
        </div>
      </div>
    </section>;
};