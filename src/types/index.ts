export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
