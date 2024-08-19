import React from 'react'
import data from '../data/teme.json';

import Project from '../components/Project';
import Heading from '../components/Heading';

function Themes() {
  return (
    <>
        <section className="py-32 px-4 md:px-10 xl:px-32">
        <Heading size="h1" weight="bold" customClasses="text-center ">Teme FSE+</Heading>
        <div className="grid grid-cols-1 xl:grid-cols-3">
          {data.sections.map((section, index) => {
            const shortDescription = section.paragraphs[0]
              .split(' ')
              .slice(0, 15)
              .join(' ') + (section.paragraphs[0].split(' ').length > 15 ? '...' : '');

            return (
              <Project
                key={index}
                category={section.category}
                title={section.title}
                description={shortDescription}
                image={section.image}
                link={`/teme-fse+/${section.link}`}
                size="small"
              />
            );
          })}
        </div>
      </section>
    </>
  )
}

export default Themes