export interface Property {
    area: string | null;
    area_in_sqft: string;
    availablefor: string | null;
    brochure: string;
    construction_status: string;
    created_at: string;
    description: string;
    emirate: string;
    featured: number;
    floor_plan: string;
    id: number;
    images: string;
    list_order: string | null;
    location: string;
    main_image: string | null;
    map: string;
    number_of_bathroom: string;
    number_of_bedroom: number;
    payment_terms: string;
    price: number;
    project_name: string | null;
    property_name: string;
    property_type: string;
    services: string;
    status: number;
    unique_id: string;
    updated_at: string;
    video: string;
}

interface Link {
    url: string | null;
    label: string;
    active: boolean;
}

export interface UpcomingProperties {
    current_page: number;
    data: Property[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{ url: string | null; label: string; active: boolean }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface ReadyProperties {
    current_page: number;
    data: Property[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{ url: string | null; label: string; active: boolean }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface FeaturedProperties {
    availablefor: string | null;
    property_type: string;
}

export interface FeaturedParameters {
    propType: 'villa' | 'apartment' | 'all';
    action: 'rent' | 'buy' | 'sell';
}

export interface SearchParameters {
    search_text: string;
    sort_by: string | null;
    sort_order: string | null;
}

export interface PropertyCardProps {
    id?: number;
    uniqueId?: string;
    imageUrl?: string | null;
    altText?: string;
    title?: string;
    description?: string;
    location?: string | null;
    bedrooms?: number | null;
    bathrooms?: string | null;
    area?: string | null;
    price?: number;
}

export interface PropertyProps {
    property: Property;
}

export interface APIContextProviderProps {
    children: React.ReactNode;
}

export interface SearchProperty {
    current_page: number;
    data: Property[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface Header {
    id: number;
    parent_id: number;
    name: string;
    pagename: string;
    page_url: string;
    image: string;
    display_order: number;
    metatitle: string;
    metadescription: string;
    metakeyword: string;
    menu_status: number;
    status: number;
    delete_status: number;
    updated_at: string; // Consider using Date if you want to handle date objects
}

export interface Field {
    field_name: string;
    input_type: string;
    system_name: string;
    field_value: string | null;
}

export interface Section {
    [key: number]: Field;
}

export interface Home {
    header: Header[];
    'section-1': Field[];
}
export interface AboutUs {
    header: Header[];
    asdf: Field[];
    aboutussection2: Section;
    aboutusmission: Section;
    aboutusvision: Section;
    personalisedinvestmentadvisory: Section;
    meettheteam: Section;
    instagram: Section;
}

export interface TeamMember {
    id: number;
    image: string;
    heading: string;
    subheading: string;
    status: number;
    updated_at: string;
    created_at: string;
}

export interface Careers {
    header: Header[];
    'careers-section-1': Field[];
}

export interface CareersResponse {
    current_page: number;
    data: Career[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface SellYourProperty {
    header: Header[];
    'sell-your-property-section-1': Field[];
}

export interface Investment {
    header: Header[];
    'investment-section-1': Field[];
}

export interface ContactUs {
    header: Header[];
    'contact-us-section-1': Field[];
}

export interface OurServices {
    header: Header[];
    'our-services-section-1': Field[];
    'our-services-section-2': Field[];
    personalisedinvestmentadvisory: Section;
}

export interface CareerCardProps {
    career: Career;
}

export interface Career {
    id: number | string;
    image: string;
    heading: string;
    subheading: string;
    description: string;
    status: number;
    updated_at: string;
    created_at: string;
}

export interface HomeSearchText {
    availablefor: string;
    price_range: string;
    location: string;
    construction_status: string;
    search_text: string;
    [key: string]: string | undefined; // Add index signature
}

export interface CareerDetailProps {
    params: {
        id: string;
    };
}

export interface NewsItem {
    id: number;
    image: string;
    heading: string;
    description: string;
    status: number;
    updated_at: string;
    created_at: string;
}

export interface NewsResponse {
    current_page: number;
    data: NewsItem[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface NewsPageProps {
    params: {
        slug: string;
    };
}
