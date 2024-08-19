import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Button from './Button';

function Project({ category, title, link, description, onClick, image, size }) {
  return (
    <>
      {size === 'small' ? (
        <div className="relative flex flex-col sm:flex-row xl:flex-col items-start mx-2 md:mx-10 my-10">
            <div className="order-1 sm:ml-6 xl:ml-0">
                <Heading size="h6" customClasses="mb-1 text-customBlack font-semibold">
                    <span className="mb-1 block text-sm leading-6 text-customColor1">{category}</span>{title}
                </Heading>
            <div className="prose prose-slate prose-sm text-slate-600">
                <Paragraph color="gray">{description}</Paragraph>
            </div><a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-customBlack hover:bg-customColor1 hover:text-white focus:ring-slate-500 mt-6"
                href={link}>Learn
                more<span className="sr-only"></span>
                <svg className="overflow-visible ml-3 text-customBlack group-hover:text-white"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
            </div>
        <img src={image} alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </div>
      ) : (
        <div class="rounded-xl shadow-md overflow-hidden mx-2 my-10 md:mx-10">
            <div class="xl:flex">
                <div class="md:shrink-0">
                    <img class="h-48 w-full object-cover md:h-64 md:w-full" src={image}/>
                </div>
                <div class="p-8">
                    <Heading size="h6" customClasses="mb-1 text-customBlack font-semibold">
                        <span className="mb-1 block text-sm leading-6 text-customColor1">{category}</span>{title}
                    </Heading>
                    <div className="prose prose-slate prose-sm text-slate-600">
                    <Paragraph color="gray">{description}</Paragraph>
                    </div><a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-customBlack hover:bg-customColor1 hover:text-white focus:ring-slate-500 mt-6"
                href={link}>Learn
                more<span className="sr-only"></span>
                <svg className="overflow-visible ml-3 text-customBlack group-hover:text-white"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
                </div>
            </div>
        </div>
      )}
    </>
  );
}

export default Project;