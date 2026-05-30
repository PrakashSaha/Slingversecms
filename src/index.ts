import dns from 'dns';
import fs from 'fs';
import path from 'path';

// Force IPv4 DNS resolution – Render cannot reach Supabase over IPv6
dns.setDefaultResultOrder('ipv4first');

export default {
  register({ strapi }: any) {
    strapi.server.routes([
      {
        method: 'GET',
        path: '/api/global-data',
        handler: async (ctx: any) => {
          try {
            const getSingle = async (uid: string) => await strapi.db.query(uid).findOne() || {};
            const getCollection = async (uid: string) => await strapi.db.query(uid).findMany() || [];

            const [
              hero, servicesSection, servicesList, techStackSection, techCategories,
              industriesSection, industriesList, processSection, processSteps,
              trustSection, testimonialsSection, testimonialsList,
              contactSection, companyPage, teamMembers, caseStudiesPage, caseStudiesList
            ] = await Promise.all([
              getSingle('api::hero.hero'), getSingle('api::services-section.services-section'), getCollection('api::service.service'),
              getSingle('api::tech-stack-section.tech-stack-section'), getCollection('api::tech-category.tech-category'),
              getSingle('api::industries-section.industries-section'), getCollection('api::industry.industry'),
              getSingle('api::process-section.process-section'), getCollection('api::process-step.process-step'),
              getSingle('api::trust-section.trust-section'), getSingle('api::testimonials-section.testimonials-section'), getCollection('api::testimonial.testimonial'),
              getSingle('api::contact-section.contact-section'), getSingle('api::company-page.company-page'), getCollection('api::team-member.team-member'),
              getSingle('api::case-studies-page.case-studies-page'), getCollection('api::case-study.case-study')
            ]);

            ctx.body = {
              hero: {
                titlePrefix: hero.titlePrefix,
                titleHighlighted: hero.titleHighlighted,
                titleSuffix: hero.titleSuffix,
                description: hero.description,
                cta: { label: hero.ctaLabel, href: hero.ctaHref, variant: 'primary' },
                trustedStackLabel: hero.trustedStackLabel,
                marqueeLogos: hero.marqueeLogos
              },
              services: {
                headerPrefix: servicesSection.headerPrefix,
                headerHighlighted: servicesSection.headerHighlighted,
                description: servicesSection.description,
                cta: { label: servicesSection.ctaLabel, href: servicesSection.ctaHref, variant: 'primary', showArrow: true },
                list: servicesList
              },
              techStack: {
                headerPrefix: techStackSection.headerPrefix,
                headerHighlighted: techStackSection.headerHighlighted,
                headerBlueHighlighted: techStackSection.headerBlueHighlighted,
                description: techStackSection.description,
                cta: { label: techStackSection.ctaLabel, href: techStackSection.ctaHref, variant: 'primary', showArrow: true },
                categories: techCategories
              },
              industries: {
                headerPrefix: industriesSection.headerPrefix,
                headerHighlighted: industriesSection.headerHighlighted,
                description: industriesSection.description,
                cta: { label: industriesSection.ctaLabel, href: industriesSection.ctaHref, variant: 'primary' },
                list: industriesList
              },
              process: {
                headerPrefix: processSection.headerPrefix,
                headerHighlighted: processSection.headerHighlighted,
                description: processSection.description,
                cta: { label: processSection.ctaLabel, href: processSection.ctaHref, variant: 'primary', showArrow: true },
                steps: processSteps.map((s: any) => ({ id: s.stepId, title: s.title, desc: s.desc, iconName: s.iconName, color: s.color }))
              },
              trustSection: {
                header: trustSection.header,
                description: trustSection.description,
                cta: { label: trustSection.ctaLabel, href: trustSection.ctaHref, variant: 'primary', showArrow: true },
                badgeLabel: trustSection.badgeLabel,
                quote: trustSection.quote,
                directorName: trustSection.directorName,
                directorTitle: trustSection.directorTitle,
                directorImage: trustSection.directorImage,
                activeStatusLabel: trustSection.activeStatusLabel,
                meetTeamCta: { label: trustSection.meetTeamCtaLabel, href: trustSection.meetTeamCtaHref, variant: 'primary', showArrow: true }
              },
              testimonials: {
                headerPrefix: testimonialsSection.headerPrefix,
                headerHighlighted: testimonialsSection.headerHighlighted,
                headerSuffix: testimonialsSection.headerSuffix,
                description: testimonialsSection.description,
                cta: { label: testimonialsSection.ctaLabel, href: testimonialsSection.ctaHref, variant: 'primary' },
                list: testimonialsList
              },
              contact: {
                headerPrefix: contactSection.headerPrefix,
                headerHighlighted: contactSection.headerHighlighted,
                headerSuffix: contactSection.headerSuffix,
                description: contactSection.description,
                features: contactSection.features,
                formTitlePrefix: contactSection.formTitlePrefix,
                formTitleHighlighted: contactSection.formTitleHighlighted,
                fields: contactSection.fields,
                submitButtonLabel: contactSection.submitButtonLabel,
                submitButtonSuccess: contactSection.submitButtonSuccess
              },
              companyPage: {
                hero: {
                  image: companyPage.heroImage,
                  headlinePrefix: companyPage.heroHeadlinePrefix,
                  headlineHighlighted: companyPage.heroHeadlineHighlighted,
                  headlineSuffix: companyPage.heroHeadlineSuffix,
                  description: companyPage.heroDescription
                },
                vision: {
                  title: companyPage.visionTitle,
                  desc: companyPage.visionDesc,
                  iconName: companyPage.visionIconName
                },
                mission: {
                  title: companyPage.missionTitle,
                  desc: companyPage.missionDesc,
                  iconName: companyPage.missionIconName
                },
                valuesSection: {
                  badge: companyPage.valuesBadge,
                  title: companyPage.valuesTitle,
                  list: companyPage.valuesList
                },
                teamSection: {
                  badge: companyPage.teamBadge,
                  title: companyPage.teamTitle,
                  desc: companyPage.teamDesc,
                  members: teamMembers
                },
                bentoGallery: {
                  badge: companyPage.bentoBadge,
                  title: companyPage.bentoTitle,
                  images: companyPage.bentoImages
                }
              },
              caseStudiesPage: {
                hero: {
                  badge: caseStudiesPage.heroBadge,
                  title: caseStudiesPage.heroTitle,
                  desc: caseStudiesPage.heroDesc
                },
                filters: caseStudiesPage.filters,
                list: caseStudiesList
              }
            };
          } catch (err: any) {
            ctx.body = { error: err.message };
          }
        },
        config: {
          auth: false
        }
      }
    ]);
  },

  async bootstrap({ strapi }: any) {
    // No seeding in production – keep empty
  }
};
