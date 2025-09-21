const slug = "video-gallery-block";

export const dashboardInfo = (info) => {
    const { version, isPremium, hasPro } = info;

    const proSuffix = isPremium ? " Pro" : "";

    return {
        name: `Services Card Block${proSuffix}`,
        displayName: `Services Card Block${proSuffix} - A service card block with multiple themes with easy to use interface.`,
        description:
            "Create and showcase your services with style using the Services Card Block. Choose from multiple themes and customize colors, fonts, and layouts to match your website's design. Perfect for highlighting your offerings in a visually appealing way.",
        slug,
        logo: `https://i.ibb.co.com/tp4fbPNb/20250921-1644-Services-Card-Logo-simple-compose-01k5nxyndae8pv4mxv5arhwwqf.png`,
        banner: `https://i.ibb.co.com/G4TsCrft/horizontal.png`,
        // video: "https://www.youtube.com/watch?v=milYZrqLJsE",
        isYoutube: true,
        version,
        isPremium,
        hasPro,
        pages: {
            org: `https://wordpress.org/plugins/${slug}/`,
            landing: `https://bplugins.com/products/${slug}/`,
            docs: `https://bplugins.com/docs/${slug}/`,
            pricing: `https://bplugins.com/products/${slug}/pricing`,
        },
        freemius: {
            product_id: 20637,
            plan_id: 34353,
            public_key: "pk_02d017aab6844d54db3238a59e91c",
        },
    };
};

export const changelogs = [
    {
        version: "2.0.0 - 10 Sep 2025",
        list: ["Added Six Video Gallery Layout", "Update SDK", "Admin Dashboard"],
    },
    {
        version: "1.1.0 - 30 Jan 25",
        list: ["Update Fancybox library v5"],
    },
    {
        version: "1.0.8 - 27 Nov 24",
        list: ["Hide the all(common) album button by remove its label"],
    },
    {
        version: "1.0.7",
        list: ["Option for changing the common label of the filter"],
    },
];

export const demoInfo = {
    title: "Live Overview",
    description: "Click on any section to view it live",
    allInOneLabel: "See All Demos",
    allInOneLink: "https://apb.bplugins.com/all-demos-in-one-place/",
    demos: [
        {
            icon: "",
            title: "Vertical- Default layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/grid-default-layout/",
        },
        {
            icon: "",
            title: "Grid- Title Meta layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/grid-title-meta-layout/",
        },
        {
            icon: "",
            title: "Grid- Side Image layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/grid-side-image-layout/",
        },
        {
            icon: "",
            title: "Grid- Overlay layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/grid-overlay-layout/",
        },
        {
            icon: "",
            title: "Masonry- Default layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/masonry-default-layout/",
        },
        {
            icon: "",
            title: "Masonry- Title Meta layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/masonry-title-meta-layout/",
        },
        {
            icon: "",
            title: "Masonry- Side Image layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/masonry-side-image-layout/",
        },
        {
            icon: "",
            title: "Masonry- Overlay layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/masonry-overlay-layout/",
        },
        {
            icon: "",
            title: "Slider- Side Image layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/slider-side-image-layout/",
        },
        {
            icon: "",
            title: "Slider- Overlay layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/slider-overlay-layout/",
        },
        {
            icon: "",
            title: "Ticker- Side Image layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/ticker-side-image-layout/",
        },
        {
            icon: "",
            title: "Ticker- Overlay layout",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/ticker-overlay-layout/",
        },
        {
            icon: "",
            title: "All Posts",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/all-posts/",
        },
        {
            icon: "",
            title: "Post Section (Design 1)",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/design-1/",
        },
        {
            icon: "",
            title: "Post Section (Design 2)",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/post-section-design-2/",
        },
        {
            icon: "",
            title: "Post Section (Design 3)",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/post-section-design-3/",
        },
        {
            icon: "",
            title: "Post Section (Design 4)",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/post-section-design-4/",
        },
        {
            icon: "",
            title: "Post Section (Design 5)",
            description: "",
            category: "",
            type: "iframe",
            url: "https://apb.bplugins.com/demo/post-section-design-5/",
        },
    ],
};

export const pricingInfo = {
    cycles: [
        {
            cycle: "monthly",
            label: "Monthly",
            isDefault: false,
        },
        {
            cycle: "annual",
            label: "Yearly",
            isDefault: true,
        },
        {
            cycle: "lifetime",
            label: "Lifetime",
            isDefault: false,
        },
    ],

    heading: "One-time payment, lifetime access",
    headingStyles: {
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "bold",
        marginBottom: "25px",
    },

    plans: [
        {
            name: "Single Site",
            quantity: 1,
            prices: {
                monthly: "4.99",
                annual: "29",
                lifetime: "149.99",
            },
            pricePrefix: "",
            priceSuffix: "",
            isFeatured: false,
            note: "",
        },
        {
            name: "3 Sites",
            quantity: 3,
            prices: {
                monthly: "8.99",
                annual: "79",
                lifetime: "259.99",
            },
            pricePrefix: "",
            priceSuffix: "",
            isFeatured: true,
            note: "",
        },
        {
            name: "Unlimited Sites",
            quantity: "null",
            prices: {
                monthly: "33.99",
                annual: "199",
                lifetime: "979.99",
            },
            pricePrefix: "",
            priceSuffix: "",
            isFeatured: false,
            note: "",
        },
    ],

    features: [
        "Add videos from YouTube, Vimeo, Wistia, or files",
        "Use custom poster images for previews",
        "Add titles, subtitles, and captions",
        "Show star ratings for reviews",
        "Group videos into albums",
        "Choose from multiple gallery styles",
        "Use sliders, carousels, lightboxes, and more",
        "Adjust columns, rows, and spacing",
        "Add optional headers and subheaders",
        "Customize video size and play button",
        "Style navigation arrows, dots, and thumbnails",
        "Optimize galleries for desktop, tablet, and mobile",
        "Edit with a visual WordPress editor",
    ],
    button: {
        label: "Buy Now ➜",
    },
    featured: {
        text: "",
        // text: "Best Value",
    },
};

export const filterDemoInfo = {
    categories: [
        { label: "All", value: "all", col: 3, height: "500px" },
        { label: "Vertical", value: "vertical", col: 1, height: "500px" },
        { label: "Horizontal", value: "horizontal", col: 1, height: "500px" },
        { label: "Diagonal", value: "diagonal", col: 1, height: "500px" },
    ],

    demos: [
        {
            title: "Vertical Stack Traditional",
            categories: ["vertical"],
            url: "https://i.ibb.co.com/v6Z5sKwC/vertical.png",
        },
        {
            title: "Horizontal Split",
            categories: ["horizontal"],
            url: "https://i.ibb.co.com/G4TsCrft/horizontal.png",
        },
        {
            title: "Diagonal Stack",
            categories: ["diagonal"],
            url: "https://i.ibb.co.com/C3GtY6h8/diagonal.png",
        }

    ],
};

export const featureCompareInfo = {
    title: "Features",
    plans: [
        {
            id: "ztbk4ex2fyi",
            name: "Free Plan",
            color: "#485781",
        },
        {
            id: "lhmjqhkeyi",
            name: `<span style='color: #485781;'>Pro Start from </span><span style='font-size: 1.3em;'>47.88/y</span>`,
            color: "#146EF5",
        },
    ],
    features: [
        {
            label: "Multiple Layouts (Grid, Masonry, Ticker, and Slider)",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Sub Layout (Left/Right Image, Overlay Box, Title Meta, and more)",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "More Layouts and Sub Layouts",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Customization for Post Ticker layout",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Shortcode to display the posts block anywhere",
            plans: ["lhmjqhkeyi"],
        },
        {
            label:
                "Post Query (filter by post type, categories, author, post count, and order)",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Display Pages & Custom Post Types",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Advanced Filtering (filter by tag, taxonomy, author, and more)",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Post Offset (skip the first [n] posts)",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Include/Exclude Posts by IDs and Exclude Current Post",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Custom Post Query Hook",
            plans: ["lhmjqhkeyi"],
        },
        {
            label:
                "Show/Hide Post Elements (feature image, title, metadata, excerpt, and read more button)",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label:
                "Customize/Style Post Element (feature image, title, metadata, excerpt, and read more button)",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Fully Responsiveness for mobile, tablet, and desktop",
            plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
        },
        {
            label: "Customizable Pagination",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Rearrange/Sort post title and metadata",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Feature Image custom size",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Display Reading Time",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Show Excerpt from Main Content",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Enable/Disable Meta Author link",
            plans: ["lhmjqhkeyi"],
        },
        {
            label: "Custom Meta icons",
            plans: ["lhmjqhkeyi"],
        },
    ],
};
