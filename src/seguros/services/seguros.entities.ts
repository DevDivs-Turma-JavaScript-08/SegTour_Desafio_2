// Insurance entities
export interface Insurance {
  id: string;
  type: string;
  premium: number;
  coverageAmount: number;
}

export interface HealthInsurance extends Insurance {
  preExistingConditions: string[];
}

export interface AutoInsurance extends Insurance {
  vehicleDetails: {
    make: string;
    model: string;
    year: number;
  };
}
