export interface SiteConfig {
    metadata: {
        title: string;
        description: string;
    };
    theme: {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
        };
        fonts: {
            heading: string;
            body: string;
        };
        style: string;
    };
    content: {
        hero: {
            headline: string;
            subheadline: string;
            ctaButtonText: string;
        };
        about: {
            title: string;
            description: string;
        };
        features: Array<{
            title: string;
            desc: string;
        }>;
    };
}
