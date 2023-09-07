interface Vehical {
  id: number;
  vin: string;
  make: string;
  model: string;
  price: number;
}

interface Filters {
  make: string;
  model: string;
  minPrice: number;
  maxPrice: number;
  startDate: Date;
  endDate: Date;
  page: number;
  limit: number;
}
