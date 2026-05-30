"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.default = {
    register({ strapi }) {
        strapi.server.routes([
            {
                method: 'GET',
                path: '/api/global-data',
                handler: async (ctx) => {
                    try {
                        const getSingle = async (uid) => await strapi.db.query(uid).findOne() || {};
                        const getCollection = async (uid) => await strapi.db.query(uid).findMany() || [];
                        const [hero, servicesSection, servicesList, techStackSection, techCategories, industriesSection, industriesList, processSection, processSteps, trustSection, testimonialsSection, testimonialsList, contactSection, companyPage, teamMembers, caseStudiesPage, caseStudiesList] = await Promise.all([
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
                                steps: processSteps.map((s) => ({ id: s.stepId, title: s.title, desc: s.desc, iconName: s.iconName, color: s.color }))
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
                    }
                    catch (err) {
                        ctx.body = { error: err.message };
                    }
                },
                config: {
                    auth: false
                }
            }
        ]);
    },
    async bootstrap({ strapi }) {
        console.log('Running bootstrap script...');
        const dataPath = path_1.default.join(__dirname, '..', '..', 'src', 'data.json');
        if (!fs_1.default.existsSync(dataPath)) {
            console.log('No data.json found, skipping seed.');
            return;
        }
        const rawData = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf8'));
        const seedSingleType = async (uid, data) => {
            const count = await strapi.db.query(uid).count();
            if (count === 0) {
                await strapi.db.query(uid).create({ data });
                console.log(`Seeded ${uid}`);
            }
        };
        const seedCollectionType = async (uid, items) => {
            const count = await strapi.db.query(uid).count();
            if (count === 0 && Array.isArray(items)) {
                for (const item of items) {
                    await strapi.db.query(uid).create({ data: item });
                }
                console.log(`Seeded ${items.length} items to ${uid}`);
            }
        };
        try {
            // 1. Hero
            await seedSingleType('api::hero.hero', {
                titlePrefix: rawData.hero.titlePrefix,
                titleHighlighted: rawData.hero.titleHighlighted,
                titleSuffix: rawData.hero.titleSuffix,
                description: rawData.hero.description,
                ctaLabel: rawData.hero.cta.label,
                ctaHref: rawData.hero.cta.href,
                trustedStackLabel: rawData.hero.trustedStackLabel,
                marqueeLogos: rawData.hero.marqueeLogos
            });
            // 2. Services Section
            await seedSingleType('api::services-section.services-section', {
                headerPrefix: rawData.services.headerPrefix,
                headerHighlighted: rawData.services.headerHighlighted,
                description: rawData.services.description,
                ctaLabel: rawData.services.cta.label,
                ctaHref: rawData.services.cta.href
            });
            // 2b. Services items
            await seedCollectionType('api::service.service', rawData.services.list);
            // 3. Tech Stack Section
            await seedSingleType('api::tech-stack-section.tech-stack-section', {
                headerPrefix: rawData.techStack.headerPrefix,
                headerHighlighted: rawData.techStack.headerHighlighted,
                headerBlueHighlighted: rawData.techStack.headerBlueHighlighted,
                description: rawData.techStack.description,
                ctaLabel: rawData.techStack.cta.label,
                ctaHref: rawData.techStack.cta.href
            });
            // 3b. Tech Categories
            await seedCollectionType('api::tech-category.tech-category', rawData.techStack.categories);
            // 4. Industries Section
            await seedSingleType('api::industries-section.industries-section', {
                headerPrefix: rawData.industries.headerPrefix,
                headerHighlighted: rawData.industries.headerHighlighted,
                description: rawData.industries.description,
                ctaLabel: rawData.industries.cta.label,
                ctaHref: rawData.industries.cta.href
            });
            // 4b. Industries
            await seedCollectionType('api::industry.industry', rawData.industries.list);
            // 5. Process Section
            await seedSingleType('api::process-section.process-section', {
                headerPrefix: rawData.process.headerPrefix,
                headerHighlighted: rawData.process.headerHighlighted,
                description: rawData.process.description,
                ctaLabel: rawData.process.cta.label,
                ctaHref: rawData.process.cta.href
            });
            // 5b. Process Steps
            await seedCollectionType('api::process-step.process-step', rawData.process.steps.map((s) => ({
                stepId: s.id,
                title: s.title,
                desc: s.desc,
                iconName: s.iconName,
                color: s.color
            })));
            // 6. Trust Section
            await seedSingleType('api::trust-section.trust-section', {
                header: rawData.trustSection.header,
                description: rawData.trustSection.description,
                ctaLabel: rawData.trustSection.cta.label,
                ctaHref: rawData.trustSection.cta.href,
                badgeLabel: rawData.trustSection.badgeLabel,
                quote: rawData.trustSection.quote,
                directorName: rawData.trustSection.directorName,
                directorTitle: rawData.trustSection.directorTitle,
                directorImage: rawData.trustSection.directorImage,
                activeStatusLabel: rawData.trustSection.activeStatusLabel,
                meetTeamCtaLabel: rawData.trustSection.meetTeamCta.label,
                meetTeamCtaHref: rawData.trustSection.meetTeamCta.href
            });
            // 7. Testimonials Section
            await seedSingleType('api::testimonials-section.testimonials-section', {
                headerPrefix: rawData.testimonials.headerPrefix,
                headerHighlighted: rawData.testimonials.headerHighlighted,
                headerSuffix: rawData.testimonials.headerSuffix,
                description: rawData.testimonials.description,
                ctaLabel: rawData.testimonials.cta.label,
                ctaHref: rawData.testimonials.cta.href
            });
            // 7b. Testimonials
            await seedCollectionType('api::testimonial.testimonial', rawData.testimonials.list);
            // 8. Contact Section
            await seedSingleType('api::contact-section.contact-section', {
                headerPrefix: rawData.contact.headerPrefix,
                headerHighlighted: rawData.contact.headerHighlighted,
                headerSuffix: rawData.contact.headerSuffix,
                description: rawData.contact.description,
                features: rawData.contact.features,
                formTitlePrefix: rawData.contact.formTitlePrefix,
                formTitleHighlighted: rawData.contact.formTitleHighlighted,
                fields: rawData.contact.fields,
                submitButtonLabel: rawData.contact.submitButtonLabel,
                submitButtonSuccess: rawData.contact.submitButtonSuccess
            });
            // 9. Company Page
            await seedSingleType('api::company-page.company-page', {
                heroImage: rawData.companyPage.hero.image,
                heroHeadlinePrefix: rawData.companyPage.hero.headlinePrefix,
                heroHeadlineHighlighted: rawData.companyPage.hero.headlineHighlighted,
                heroHeadlineSuffix: rawData.companyPage.hero.headlineSuffix,
                heroDescription: rawData.companyPage.hero.description,
                visionTitle: rawData.companyPage.vision.title,
                visionDesc: rawData.companyPage.vision.desc,
                visionIconName: rawData.companyPage.vision.iconName,
                missionTitle: rawData.companyPage.mission.title,
                missionDesc: rawData.companyPage.mission.desc,
                missionIconName: rawData.companyPage.mission.iconName,
                valuesBadge: rawData.companyPage.valuesSection.badge,
                valuesTitle: rawData.companyPage.valuesSection.title,
                valuesList: rawData.companyPage.valuesSection.list,
                teamBadge: rawData.companyPage.teamSection.badge,
                teamTitle: rawData.companyPage.teamSection.title,
                teamDesc: rawData.companyPage.teamSection.desc,
                bentoBadge: rawData.companyPage.bentoGallery.badge,
                bentoTitle: rawData.companyPage.bentoGallery.title,
                bentoImages: rawData.companyPage.bentoGallery.images
            });
            // 9b. Team Members
            await seedCollectionType('api::team-member.team-member', rawData.companyPage.teamSection.members);
            // 10. Case Studies Page
            await seedSingleType('api::case-studies-page.case-studies-page', {
                heroBadge: rawData.caseStudiesPage.hero.badge,
                heroTitle: rawData.caseStudiesPage.hero.title,
                heroDesc: rawData.caseStudiesPage.hero.desc,
                filters: rawData.caseStudiesPage.filters
            });
            // 10b. Case Studies
            await seedCollectionType('api::case-study.case-study', rawData.caseStudiesPage.list);
            // Also set Public permissions to allow frontend fetching without token
            const setPublicPermissions = async () => {
                const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({ where: { type: 'public' } });
                if (publicRole) {
                    const apiTypes = ['hero', 'service', 'services-section', 'tech-category', 'tech-stack-section', 'industry', 'industries-section', 'process-step', 'process-section', 'trust-section', 'testimonial', 'testimonials-section', 'contact-section', 'company-page', 'team-member', 'case-study', 'case-studies-page'];
                    for (const type of apiTypes) {
                        const permissionExists = await strapi.db.query('plugin::users-permissions.permission').count({
                            where: { action: `api::${type}.${type}.find`, role: publicRole.id }
                        });
                        if (permissionExists === 0) {
                            await strapi.db.query('plugin::users-permissions.permission').create({
                                data: {
                                    action: `api::${type}.${type}.find`,
                                    role: publicRole.id
                                }
                            });
                        }
                    }
                    console.log('Public permissions set successfully.');
                }
            };
            await setPublicPermissions();
        }
        catch (err) {
            console.error('Failed during bootstrap seeding:', err);
        }
    }
};
