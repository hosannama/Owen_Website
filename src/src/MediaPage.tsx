import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { useInView } from './useInView';
interface MediaItem {
  headline: string;
  outlet: string;
  date: string;
  image: string;
  link: string;
}
const mediaItems: MediaItem[] = [{
  headline: '大埔惡火燒出港府「災難性回應」　專家點出為何香港連中國都不如',
  outlet: 'SET News',
  date: '18 December 2025',
  image: 'https://drive.google.com/thumbnail?id=1dalDCALHRWfAURF5w4qVrakR1enrGpaQ&sz=w2000',
  link: 'https://www.setn.com/News.aspx?NewsID=1767639'
}, {
  headline: '國際抨擊港府陷管治真空　李家超入選「2025年度暴君」投票',
  outlet: 'Pulse HK News',
  date: '15 December 2025',
  image: 'https://drive.google.com/thumbnail?id=14v5nC2F5R-sTdnI5z0Rf1J7pkY7qYcRU&sz=w2000',
  link: 'https://pulsehknews.com/tyrant-of-the-year/?fbclid=IwY2xjawO37tVleHRuA2FlbQIxMABzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEef922eOe8wZlQgGZdEKoqn3ET2DbmxpvC0oLCy3tgsu2QPo-m1ykKOYWacZQ_aem_Ib65Twr1hc6hgIaUmrRndg'
}, {
  headline: '香港角色由國際金融中心 轉向服務中國進動「全球南方」議程',
  outlet: 'Photon Media',
  date: '7 August 2025',
  image: 'https://drive.google.com/thumbnail?id=1HM69Fnd1IrU1qiUJFTIOdm8XsmN-331o&sz=w2000',
  link: 'https://photonmedia.net/diplomat0807/'
}];
const MediaItemCard = ({
  item,
  index
}: {
  item: MediaItem;
  index: number;
}) => {
  const {
    ref,
    inView
  } = useInView();
  return <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`} style={{
    transitionDelay: `${index * 150}ms`
  }}>
      <article className="flex flex-col md:flex-row gap-6 items-start">
        <img className="w-full md:w-56 h-40 md:h-40 rounded-[30px] shadow-[0px_2px_2px_0px_rgba(0,89,173,1.00)] object-cover flex-shrink-0" src={item.image} alt={item.headline} />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-sky-950 mb-3 leading-9 font-['Inter']">
            {item.headline}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sky-950 text-base font-normal font-['Inter']">
              {item.outlet}, {item.date}
            </span>
          </div>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#012d52] text-sm font-semibold hover:gap-3 hover:underline transition-all">
            Read More
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </article>
    </div>;
};
export const MediaPage = () => {
  const titleRef = useInView();
  return <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center">
        <div ref={titleRef.ref} className={`w-full transition-all duration-700 ease-out ${titleRef.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h1 className="text-4xl font-bold text-sky-950 mb-12 font-['Inter']">
            Media
          </h1>
        </div>

        <div className="w-full space-y-12">
          {mediaItems.map((item, index) => <MediaItemCard key={index} item={item} index={index} />)}
        </div>
      </div>
    </section>;
};