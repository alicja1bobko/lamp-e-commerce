export interface Item {
  name: string;
  manufacturer: string;
  price: number;
  prevPrice?: number;
  designer: string;
  image: string;
  id: string;
  category?: string;
  dimensions?: string;
  colourTemperature?: string;
  lightOutput?: string;
  CRI?: string;
  lifeTime?: number;
  voltage?: string;
}
