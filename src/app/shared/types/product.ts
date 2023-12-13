export interface Product {
  id: number;
  title: string;
  subtitle: string;
  level: number;
  cours: Cour[];
  price_month: number;
  price_year: number;
}

export interface Cour {
  title: string;
  percentage: string;
  icon: string;
}
