const fs = require('fs');
const path = require('path');

const models = [
  // Collection Types
  { name: 'service', kind: 'collectionType', attributes: { iconName: { type: 'string' }, title: { type: 'string' }, desc: { type: 'text' } } },
  { name: 'tech-category', kind: 'collectionType', attributes: { title: { type: 'string' }, subtitle: { type: 'string' }, description: { type: 'text' }, features: { type: 'json' }, iconName: { type: 'string' }, accent: { type: 'string' }, bgAccent: { type: 'string' }, borderAccent: { type: 'string' }, image: { type: 'string' }, logos: { type: 'json' } } },
  { name: 'industry', kind: 'collectionType', attributes: { iconName: { type: 'string' }, title: { type: 'string' }, color: { type: 'string' }, bgColor: { type: 'string' }, items: { type: 'json' } } },
  { name: 'process-step', kind: 'collectionType', attributes: { stepId: { type: 'string' }, title: { type: 'string' }, desc: { type: 'text' }, iconName: { type: 'string' }, color: { type: 'string' } } },
  { name: 'team-member', kind: 'collectionType', attributes: { name: { type: 'string' }, role: { type: 'string' }, bio: { type: 'text' }, image: { type: 'string' }, skills: { type: 'json' } } },
  { name: 'testimonial', kind: 'collectionType', attributes: { name: { type: 'string' }, title: { type: 'string' }, company: { type: 'string' }, quote: { type: 'text' }, image: { type: 'string' } } },
  { name: 'case-study', kind: 'collectionType', attributes: { title: { type: 'string' }, industry: { type: 'string' }, category: { type: 'string' }, image: { type: 'string' }, iconName: { type: 'string' }, challenge: { type: 'text' }, solution: { type: 'text' }, fullChallenge: { type: 'text' }, fullSolution: { type: 'text' }, results: { type: 'json' }, techStack: { type: 'json' } } },
  
  // Single Types
  { name: 'hero', kind: 'singleType', attributes: { titlePrefix: { type: 'string' }, titleHighlighted: { type: 'string' }, titleSuffix: { type: 'string' }, description: { type: 'text' }, ctaLabel: { type: 'string' }, ctaHref: { type: 'string' }, trustedStackLabel: { type: 'string' }, marqueeLogos: { type: 'json' } } },
  { name: 'services-section', kind: 'singleType', attributes: { headerPrefix: { type: 'string' }, headerHighlighted: { type: 'string' }, description: { type: 'text' }, ctaLabel: { type: 'string' }, ctaHref: { type: 'string' } } },
  { name: 'tech-stack-section', kind: 'singleType', attributes: { headerPrefix: { type: 'string' }, headerHighlighted: { type: 'string' }, headerBlueHighlighted: { type: 'string' }, description: { type: 'text' }, ctaLabel: { type: 'string' }, ctaHref: { type: 'string' } } },
  { name: 'industries-section', kind: 'singleType', attributes: { headerPrefix: { type: 'string' }, headerHighlighted: { type: 'string' }, description: { type: 'text' }, ctaLabel: { type: 'string' }, ctaHref: { type: 'string' } } },
  { name: 'process-section', kind: 'singleType', attributes: { headerPrefix: { type: 'string' }, headerHighlighted: { type: 'string' }, description: { type: 'text' }, ctaLabel: { type: 'string' }, ctaHref: { type: 'string' } } },
  { name: 'trust-section', kind: 'singleType', attributes: { header: { type: 'string' }, description: { type: 'text' }, ctaLabel: { type: 'string' }, ctaHref: { type: 'string' }, badgeLabel: { type: 'string' }, quote: { type: 'text' }, directorName: { type: 'string' }, directorTitle: { type: 'string' }, directorImage: { type: 'string' }, activeStatusLabel: { type: 'string' }, meetTeamCtaLabel: { type: 'string' }, meetTeamCtaHref: { type: 'string' } } },
  { name: 'testimonials-section', kind: 'singleType', attributes: { headerPrefix: { type: 'string' }, headerHighlighted: { type: 'string' }, headerSuffix: { type: 'string' }, description: { type: 'text' }, ctaLabel: { type: 'string' }, ctaHref: { type: 'string' } } },
  { name: 'contact-section', kind: 'singleType', attributes: { headerPrefix: { type: 'string' }, headerHighlighted: { type: 'string' }, headerSuffix: { type: 'string' }, description: { type: 'text' }, features: { type: 'json' }, formTitlePrefix: { type: 'string' }, formTitleHighlighted: { type: 'string' }, fields: { type: 'json' }, submitButtonLabel: { type: 'string' }, submitButtonSuccess: { type: 'string' } } },
  { name: 'company-page', kind: 'singleType', attributes: { heroImage: { type: 'string' }, heroHeadlinePrefix: { type: 'string' }, heroHeadlineHighlighted: { type: 'string' }, heroHeadlineSuffix: { type: 'string' }, heroDescription: { type: 'text' }, visionTitle: { type: 'string' }, visionDesc: { type: 'text' }, visionIconName: { type: 'string' }, missionTitle: { type: 'string' }, missionDesc: { type: 'text' }, missionIconName: { type: 'string' }, valuesBadge: { type: 'string' }, valuesTitle: { type: 'string' }, valuesList: { type: 'json' }, teamBadge: { type: 'string' }, teamTitle: { type: 'string' }, teamDesc: { type: 'text' }, bentoBadge: { type: 'string' }, bentoTitle: { type: 'string' }, bentoImages: { type: 'json' } } },
  { name: 'case-studies-page', kind: 'singleType', attributes: { heroBadge: { type: 'string' }, heroTitle: { type: 'string' }, heroDesc: { type: 'text' }, filters: { type: 'json' } } }
];

const apiDir = path.join(__dirname, 'src', 'api');

models.forEach(model => {
  const modelDir = path.join(apiDir, model.name);
  const contentTypesDir = path.join(modelDir, 'content-types', model.name);
  const controllersDir = path.join(modelDir, 'controllers');
  const routesDir = path.join(modelDir, 'routes');
  const servicesDir = path.join(modelDir, 'services');

  [modelDir, contentTypesDir, controllersDir, routesDir, servicesDir].forEach(d => {
    if (!fs.existsSync(d)) {
      fs.mkdirSync(d, { recursive: true });
    }
  });

  const isCollection = model.kind === 'collectionType';
  const pluralName = model.name + 's';

  // schema.json
  const schema = {
    kind: model.kind,
    collectionName: pluralName,
    info: {
      singularName: model.name,
      pluralName: pluralName,
      displayName: model.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    },
    options: { draftAndPublish: false },
    attributes: model.attributes
  };
  fs.writeFileSync(path.join(contentTypesDir, 'schema.json'), JSON.stringify(schema, null, 2));

  // controller
  fs.writeFileSync(
    path.join(controllersDir, `${model.name}.js`),
    `'use strict';\n\nconst { createCoreController } = require('@strapi/strapi').factories;\n\nmodule.exports = createCoreController('api::${model.name}.${model.name}');`
  );

  // route
  fs.writeFileSync(
    path.join(routesDir, `${model.name}.js`),
    `'use strict';\n\nconst { createCoreRouter } = require('@strapi/strapi').factories;\n\nmodule.exports = createCoreRouter('api::${model.name}.${model.name}');`
  );

  // service
  fs.writeFileSync(
    path.join(servicesDir, `${model.name}.js`),
    `'use strict';\n\nconst { createCoreService } = require('@strapi/strapi').factories;\n\nmodule.exports = createCoreService('api::${model.name}.${model.name}');`
  );
});

console.log('Successfully generated Strapi schemas, controllers, routes, and services!');
