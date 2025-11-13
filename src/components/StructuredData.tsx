import React from 'react';

const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Richard Borges',
    jobTitle: 'Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer with 6+ years of experience in React, TypeScript, and modern web technologies. Technical leader and mentor passionate about clean code and continuous learning.',
    url: 'https://richardborgesdev.github.io/portfolio/',
    image: 'https://avatars.githubusercontent.com/u/19519036?v=4',
    sameAs: [
      'https://www.linkedin.com/in/richardborgesdev',
      'https://github.com/richardborgesdev',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Joinville',
      addressRegion: 'Santa Catarina',
      addressCountry: 'Brazil',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Conta Azul',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'State University of Santa Catarina (UDESC)',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Centro Universitário Senac',
      },
    ],
    knowsAbout: [
      'React',
      'TypeScript',
      'JavaScript',
      'Frontend Development',
      'Web Development',
      'Technical Leadership',
      'Mentoring',
      'Agile Development',
    ],
    email: 'rbdevcontact@gmail.com',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
